document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bucketListForm');
    const destinationInput = document.getElementById('destination');
    const travelDateInput = document.getElementById('travelDate');
    let timeout;
    
    // Set minimum date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    travelDateInput.min = tomorrow.toISOString().split('T')[0];
    
    // Activity categories
    const categories = {
        'Adventure & Outdoors': [
            'Hiking', 'Camping', 'Skiing', 'Surfing', 'Scuba Diving', 
            'Rock Climbing', 'Safari', 'Paragliding', 'Kayaking'
        ],
        'Cultural Experiences': [
            'Museums', 'Historical Sites', 'Local Festivals', 'Art Galleries',
            'Traditional Workshops', 'Temple Visits', 'Archaeological Sites'
        ],
        'Food & Dining': [
            'Fine Dining', 'Street Food Tours', 'Cooking Classes', 
            'Wine Tasting', 'Food Markets', 'Local Restaurants'
        ],
        'Entertainment': [
            'Live Shows', 'Concerts', 'Theater', 'Nightlife',
            'Local Music', 'Festivals', 'Cinema'
        ],
        'Relaxation & Wellness': [
            'Spa Days', 'Beach Time', 'Yoga Retreats', 'Hot Springs',
            'Meditation', 'Nature Walks', 'Resort Stay'
        ],
        'Shopping & Markets': [
            'Local Markets', 'Shopping Districts', 'Artisan Shops',
            'Antique Stores', 'Fashion Outlets', 'Souvenir Shopping'
        ],
        'Learning & Education': [
            'Language Classes', 'Photography Tours', 'Historical Tours',
            'Wildlife Education', 'Local Crafts Workshop', 'Guided Tours'
        ]
    };
    
    function createActivityCategories() {
        const container = document.createElement('div');
        container.className = 'activity-categories';
        
        Object.entries(categories).forEach(([category, activities]) => {
            const section = document.createElement('div');
            section.className = 'category-section';
            
            const header = document.createElement('h3');
            header.textContent = category;
            section.appendChild(header);
            
            const chipContainer = document.createElement('div');
            chipContainer.className = 'chip-container';
            
            activities.forEach(activity => {
                const chip = document.createElement('div');
                chip.className = 'category-chip';
                chip.dataset.category = category;
                chip.textContent = activity;
                
                chip.addEventListener('click', () => {
                    chip.classList.toggle('selected');
                    updateActivities();
                });
                
                chipContainer.appendChild(chip);
            });
            
            section.appendChild(chipContainer);
            container.appendChild(section);
        });
        
        return container;
    }

    // Create and insert categories container
    const categoriesContainer = createActivityCategories();
    document.querySelector('.form-group:nth-child(2)').insertBefore(
        categoriesContainer,
        document.getElementById('activities')
    );

    // Add this function to update activities textarea
    function updateActivities() {
        const selectedChips = document.querySelectorAll('.category-chip.selected');
        const activitiesByCategory = {};
        
        selectedChips.forEach(chip => {
            const category = chip.dataset.category;
            const activity = chip.textContent.trim();
            
            if (!activitiesByCategory[category]) {
                activitiesByCategory[category] = [];
            }
            activitiesByCategory[category].push(activity);
        });
        
        const formattedActivities = Object.entries(activitiesByCategory)
            .map(([category, activities]) => `${category}: ${activities.join(', ')}`)
            .join('\n');
        
        document.getElementById('activities').value = formattedActivities;
    }

    // Update destination suggestions to use a free API instead of Mapbox
    async function fetchDestinations(query) {
        if (query.length < 2) {
            const existingSuggestions = document.querySelector('.destination-suggestions');
            if (existingSuggestions) existingSuggestions.remove();
            return;
        }
        
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
            );
            const data = await response.json();
            showSuggestions(data);
        } catch (error) {
            console.error('Error fetching destinations:', error);
        }
    }

    function showSuggestions(places) {
        const existingSuggestions = document.querySelector('.destination-suggestions');
        if (existingSuggestions) existingSuggestions.remove();

        if (!places || places.length === 0) return;

        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'destination-suggestions';
        
        places.slice(0, 5).forEach(place => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = place.display_name;
            div.addEventListener('click', () => {
                destinationInput.value = place.display_name;
                suggestionsContainer.remove();
            });
            suggestionsContainer.appendChild(div);
        });
        
        destinationInput.parentNode.appendChild(suggestionsContainer);
    }

    // Add debounced input handler for destination
    destinationInput.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fetchDestinations(e.target.value);
        }, 300);
    });

    // Update form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const destination = destinationInput.value;
        const activities = document.getElementById('activities').value;
        const travelDate = travelDateInput.value;
        const budget = document.getElementById('budget').value;

        if (!destination || !activities || !travelDate || !budget) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        showLoadingState();

        try {
            const bucketListItem = {
                id: Date.now().toString(),
                destination,
                activities,
                travelDate,
                budget,
                completedActivities: [],
                created: new Date().toISOString()
            };

            // Save to localStorage
            const bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];
            bucketList.push(bucketListItem);
            localStorage.setItem('bucketList', JSON.stringify(bucketList));

            showNotification('Destination added successfully!');
            setTimeout(() => {
                window.location.href = 'bucket-list.html';
            }, 1500);
        } catch (error) {
            showNotification('Error adding destination', 'error');
            resetLoadingState();
        }
    });

    // Add after the form submit handler
    function showLoadingState() {
        const submitButton = document.querySelector('.submit-button');
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';
        submitButton.disabled = true;
    }

    function resetLoadingState() {
        const submitButton = document.querySelector('.submit-button');
        submitButton.innerHTML = 'Add to Bucket List';
        submitButton.disabled = false;
    }

    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            ${message}
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }
});
