document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded triggered');
    displayBucketList();
    setupDownloadPDF();
    setupSharing();
    initializeFilters();
    initMap();
});

async function getWeatherData(destination) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=0b6a6a9730b148d4bb2134521240812&q=${encodeURIComponent(destination)}&aqi=no`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
}

function displayBucketList() {
    console.log('displayBucketList called');
    const bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];
    console.log('Bucket list items:', bucketList);
    const container = document.getElementById('bucketListItems');
    
    container.innerHTML = '';
    
    if (bucketList.length === 0) {
        console.log('No bucket list items found');
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-map-marked-alt"></i>
                <h3>No destinations yet</h3>
                <p>Start by adding your dream destinations to your bucket list!</p>
                <a href="form.html" class="cta-button">Add Destination</a>
            </div>
        `;
        return;
    }
    
    console.log('Creating cards for bucket list items');
    bucketList.forEach(async (item) => {
        const card = await createDestinationCard(item);
        container.appendChild(card);
    });
}

async function createDestinationCard(item) {
    console.log('Creating card for item:', item);
    const card = document.createElement('div');
    card.className = 'destination-card';
    
    const weatherData = await getWeatherData(item.destination.split(',')[0]);
    const weatherHtml = weatherData ? `
        <div class="weather-widget">
            <i class="fas fa-temperature-high"></i> ${Math.round(weatherData.current.temp_c)}°C
            <i class="fas fa-tint"></i> ${weatherData.current.humidity}%
            <img src="${weatherData.current.condition.icon}" 
                alt="${weatherData.current.condition.text}">
        </div>
    ` : '';
    
    const activities = parseActivities(item.activities);
    const completedActivities = item.completedActivities || [];
    const progress = calculateProgress(activities.length, completedActivities.length);
    
    card.innerHTML = `
        <div class="card-header">
            <h3>${item.destination}</h3>
            ${weatherHtml}
            <div class="progress-container">
                <div class="progress-bar" style="width: ${progress}%"></div>
                <span>${progress}% Complete</span>
            </div>
        </div>
        <div class="card-content">
            <p><strong>Travel Date:</strong> ${new Date(item.travelDate).toLocaleDateString()}</p>
            <p><strong>Budget:</strong> $${item.budget}</p>
            <div class="activities-list">
                ${activities.map(activity => `
                    <div class="activity-item ${completedActivities.includes(activity) ? 'completed' : ''}">
                        <label onclick="event.preventDefault()">
                            <input type="checkbox" 
                                ${completedActivities.includes(activity) ? 'checked' : ''}
                                onclick="event.preventDefault(); toggleActivity('${item.id}', '${activity}')">
                            ${activity}
                        </label>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    return card;
}

function setupDownloadPDF() {
    document.getElementById('downloadPDF').addEventListener('click', () => {
        const element = document.getElementById('bucketListItems');
        const opt = {
            margin: 1,
            filename: 'travel-bucket-list.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    });
}

function setupSharing() {
    document.getElementById('shareList').addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'My Travel Bucket List',
                text: 'Check out my travel bucket list!',
                url: window.location.href
            });
        } else {
            alert('Sharing is not supported on this browser');
        }
    });
}

function initializeFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');
    
    // Add event listeners
    searchInput.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', applyFilters);
    
    // Initialize view toggle
    const viewButtons = document.querySelectorAll('.view-button');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            document.getElementById('bucketListItems').className = 
                `bucket-list-items ${button.dataset.view}-view`;
        });
    });
}

function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortBy').value;
    
    let bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];
    
    // Filter
    bucketList = bucketList.filter(item => {
        const matchesSearch = item.destination.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || 
            (categoryFilter === 'completed' && item.completedActivities?.length === parseActivities(item.activities).length) ||
            (categoryFilter === 'upcoming' && new Date(item.travelDate) > new Date()) ||
            (categoryFilter === 'inProgress' && item.completedActivities?.length > 0 && 
             item.completedActivities?.length < parseActivities(item.activities).length);
        return matchesSearch && matchesCategory;
    });

    // Sort
    bucketList.sort((a, b) => {
        switch (sortBy) {
            case 'date':
                return new Date(a.travelDate) - new Date(b.travelDate);
            case 'budget':
                return parseFloat(a.budget) - parseFloat(b.budget);
            case 'progress':
                const progressA = calculateProgress(
                    parseActivities(a.activities).length, 
                    (a.completedActivities || []).length
                );
                const progressB = calculateProgress(
                    parseActivities(b.activities).length, 
                    (b.completedActivities || []).length
                );
                return progressB - progressA;
            default:
                return 0;
        }
    });
    
    displayFilteredList(bucketList);
}

function getProgressPercentage(item) {
    const totalBudget = parseFloat(item.budget);
    const spent = parseFloat(item.spent);
    return (spent / totalBudget) * 100;
}

async function displayFilteredList(bucketList) {
    const container = document.getElementById('bucketListItems');
    container.innerHTML = '';
    
    for (const item of bucketList) {
        const card = await createDestinationCard(item);
        container.appendChild(card);
    }
}

function parseActivities(activitiesString) {
    if (!activitiesString) return [];
    return activitiesString
        .split('\n')
        .filter(line => line.includes(':'))
        .map(line => line.split(':')[1].trim().split(', '))
        .flat();
}

function calculateProgress(total, completed) {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
}

function toggleActivity(itemId, activity) {
    const bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];
    const item = bucketList.find(item => item.id === itemId);
    
    if (item) {
        if (!item.completedActivities) item.completedActivities = [];
        const index = item.completedActivities.indexOf(activity);
        
        if (index === -1) {
            item.completedActivities.push(activity);
        } else {
            item.completedActivities.splice(index, 1);
        }
        
        localStorage.setItem('bucketList', JSON.stringify(bucketList));
        
        // Update only the specific card instead of refreshing the entire list
        const cards = document.querySelectorAll('.destination-card');
        cards.forEach(async (card) => {
            if (card.querySelector(`h3`).textContent === item.destination) {
                const newCard = await createDestinationCard(item);
                card.replaceWith(newCard);
            }
        });
    }
}

function getActivityIcon(activity) {
    const iconMap = {
        'Hiking': 'fa-hiking',
        'Camping': 'fa-campground',
        'Skiing': 'fa-skiing',
        'Museums': 'fa-museum',
        'Shopping': 'fa-shopping-bag',
        'Beach': 'fa-umbrella-beach',
        'Food': 'fa-utensils',
        'Photography': 'fa-camera',
        'Sightseeing': 'fa-binoculars',
        'default': 'fa-star'
    };
    return iconMap[activity] || iconMap.default;
}
