document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    const wondersGrid = document.querySelector('.examples-grid');
    console.log('Wonders Grid:', wondersGrid);
    
    // Add debug log for example data
    console.log('Example Data:', exampleData);
    
    const addWonderBtn = document.querySelector('.create-wonder-btn');
    const modal = document.getElementById('exampleModal');
    const addModal = document.getElementById('addWonderModal');
    
    // Load both preset examples and user-created wonders
    const userWonders = JSON.parse(localStorage.getItem('userWonders') || '[]');
    const allWonders = { ...exampleData, ...userWonders };
    
    // Display all wonders
    displayWonders(allWonders);
    
    // Handle modal closing
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            addModal.classList.remove('active');
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
        if (e.target === addModal) {
            addModal.classList.remove('active');
        }
    });
    
    // Handle view details clicks
    wondersGrid.addEventListener('click', (e) => {
        const viewBtn = e.target.closest('.view-details-btn');
        if (viewBtn) {
            const wonderId = viewBtn.dataset.example;
            console.log('Clicked wonder ID:', wonderId);
            console.log('Wonder data:', allWonders[wonderId]);
            showWonderDetails(allWonders[wonderId]);
        }
    });
    
    // Handle add wonder button
    if (addWonderBtn) {
        addWonderBtn.addEventListener('click', () => {
            addModal.classList.add('active');
        });
    }
    
    // Handle form submission
    const wonderForm = document.getElementById('wonderForm');
    if (wonderForm) {
        wonderForm.addEventListener('submit', handleWonderSubmit);
    }
    
    // Handle filters
    setupFilters();

    // Add event listeners for all add-item buttons
    document.querySelectorAll('.add-item-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.dataset.type;
            const listId = `${type}s-list`;
            const container = document.getElementById(listId);
            
            const itemForm = createItemForm(type);
            const div = document.createElement('div');
            div.innerHTML = itemForm;
            container.appendChild(div);

            // Add event listener to the new remove button
            div.querySelector('.remove-item-btn').addEventListener('click', function() {
                div.remove();
            });

            // Add icon selection functionality to the new form
            div.querySelectorAll('.icon-option').forEach(option => {
                option.addEventListener('click', function() {
                    // Remove selected class from all options in this form
                    const form = this.closest('.item-form');
                    form.querySelectorAll('.icon-option').forEach(opt => 
                        opt.classList.remove('selected'));
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Update hidden input
                    form.querySelector('.selected-icon-input').value = this.dataset.icon;
                });
            });
        });
    });

    // Add create wonder button functionality
    const createWonderBtn = document.querySelector('.create-wonder-btn');
    const addWonderModal = document.getElementById('addWonderModal');
    
    createWonderBtn.addEventListener('click', function() {
        addWonderModal.classList.add('active');
    });

    // Close modal functionality
    document.querySelector('.close-modal').addEventListener('click', function() {
        addWonderModal.classList.remove('active');
    });

    // Handle form submission
    document.getElementById('wonderForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        try {
            const formData = new FormData(this);
            const imageFile = formData.get('image');
            const imageBase64 = await handleImageUpload(imageFile);
            
            const newWonder = {
                title: formData.get('title'),
                duration: formData.get('duration'),
                budget: formData.get('budget'),
                description: formData.get('description'),
                image: imageBase64,
                categories: Array.from(formData.getAll('categories')),
                attractions: collectItemData('attractions'),
                activities: collectItemData('activities'),
                restaurants: collectItemData('restaurants')
            };

            // Save to localStorage or your backend
            saveWonder(newWonder);
            
            // Close modal and show success message
            addWonderModal.classList.remove('active');
            showNotification('Wonder created successfully!', 'success');
            
            // Refresh the wonders display
            displayWonders(getAllWonders());
        } catch (error) {
            showNotification('Error creating wonder: ' + error.message, 'error');
        }
    });

    // Add icon selection functionality
    document.querySelectorAll('.icon-option').forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            document.querySelectorAll('.icon-option').forEach(opt => 
                opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Update hidden input
            document.getElementById('selectedIcon').value = this.dataset.icon;
        });
    });
});

function displayWonders(wonders) {
    console.log('Displaying wonders:', wonders);
    const grid = document.querySelector('.examples-grid');
    if (!grid) {
        console.error('Examples grid not found');
        return;
    }
    grid.innerHTML = Object.entries(wonders).map(([id, wonder]) => createWonderCard(id, wonder)).join('');
}

function createWonderCard(id, wonder) {
    // Ensure categories exists, default to empty array if not
    const categories = wonder.categories || [];
    
    // Handle both base64 images and regular image paths
    const imageSource = wonder.image.startsWith('data:') 
        ? wonder.image  // Use base64 image directly
        : `../assets/images/${wonder.image}`; // Use path for regular images
    
    return `
        <div class="example-card" data-categories="${categories.join(',')}">
            <div class="card-image">
                <img src="${imageSource}" 
                     alt="${wonder.title}"
                     onerror="this.src='../assets/images/placeholder.jpg'">
                <div class="card-tags">
                    ${categories.map(cat => 
                        `<span class="tag ${cat.toLowerCase()}">${cat}</span>`
                    ).join('')}
                </div>
            </div>
            <div class="example-content">
                <h2>${wonder.title}</h2>
                <div class="example-details">
                    <span class="duration"><i class="fas fa-clock"></i> ${wonder.duration}</span>
                    <span class="budget"><i class="fas fa-coins"></i> ${wonder.budget}</span>
                </div>
                <div class="activities-preview">
                    <ul>
                        ${wonder.attractions?.slice(0, 3).map(attraction => 
                            `<li><i class="fas fa-check"></i> ${attraction.name}</li>`
                        ).join('')}
                    </ul>
                </div>
                <div class="card-actions">
                    <button class="view-details-btn" data-example="${id}">
                        View Full Itinerary <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
} 

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchExamples');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            filterWonders(category, searchInput.value);
        });
    });

    searchInput.addEventListener('input', (e) => {
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
        filterWonders(activeCategory, e.target.value);
    });
}

function filterWonders(category, searchTerm = '') {
    const cards = document.querySelectorAll('.example-card');
    
    cards.forEach(card => {
        const categories = card.dataset.categories.split(',');
        const title = card.querySelector('h2').textContent.toLowerCase();
        const matchesCategory = category === 'all' || categories.includes(category);
        const matchesSearch = title.includes(searchTerm.toLowerCase());
        
        card.style.display = matchesCategory && matchesSearch ? 'block' : 'none';
    });
}

function createItemForm(type) {
    return `
        <div class="item-form">
            <div class="form-row">
                <input type="text" name="${type}Name[]" placeholder="Name" required>
            </div>
            <div class="icon-selector">
                ${getIconsForType(type).map(icon => `
                    <div class="icon-option" data-icon="${icon}">
                        <i class="fas ${icon}"></i>
                    </div>
                `).join('')}
            </div>
            <input type="hidden" name="${type}Icon[]" class="selected-icon-input">
            <div class="form-row">
                <input type="text" name="${type}Location[]" placeholder="Location">
                <input type="text" name="${type}Duration[]" placeholder="Duration (e.g., Full Day)">
            </div>
            <textarea name="${type}Description[]" placeholder="Description" required></textarea>
            <button type="button" class="remove-item-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
}

function getIconsForType(type) {
    const iconSets = {
        attraction: [
            'fa-landmark', 'fa-mountain', 'fa-castle', 
            'fa-water', 'fa-monument', 'fa-bridge', 
            'fa-tower-observation', 'fa-building-columns',
            'fa-tree', 'fa-waterfall', 'fa-fort'
        ],
        activity: [
            'fa-hiking', 'fa-person-skiing', 'fa-person-swimming',
            'fa-ship', 'fa-bicycle', 'fa-person-walking',
            'fa-camera', 'fa-paintbrush', 'fa-fish',
            'fa-volleyball', 'fa-horse'
        ],
        restaurant: [
            'fa-utensils', 'fa-wine-glass', 'fa-burger',
            'fa-bowl-food', 'fa-mug-hot', 'fa-beer-mug-empty',
            'fa-pizza-slice', 'fa-fish', 'fa-ice-cream'
        ]
    };
    return iconSets[type] || ['fa-circle'];
}

async function handleWonderSubmit(e) {
    e.preventDefault();
    
    try {
        const formData = new FormData(e.target);
        const imageFile = formData.get('image');
        const imageUrl = await handleImageUpload(imageFile);
        
        // Collect items from dynamic form fields
        const attractions = collectItems(formData, 'attraction');
        const activities = collectItems(formData, 'activity');
        const restaurants = collectItems(formData, 'restaurant');

        const newWonder = {
            title: formData.get('title'),
            duration: formData.get('duration'),
            budget: formData.get('budget'),
            description: formData.get('description'),
            image: imageUrl,
            categories: Array.from(formData.getAll('categories')),
            attractions,
            activities,
            restaurants
        };

        // Save to localStorage
        const userWonders = JSON.parse(localStorage.getItem('userWonders')) || {};
        const wonderId = `user_${Date.now()}`;
        userWonders[wonderId] = newWonder;
        localStorage.setItem('userWonders', JSON.stringify(userWonders));

        // Refresh display and close modal
        const allWonders = { ...exampleData, ...userWonders };
        displayWonders(allWonders);
        document.getElementById('addWonderModal').classList.remove('active');
        e.target.reset();

    } catch (error) {
        console.error('Error creating wonder:', error);
        alert('Failed to create wonder. Please try again.');
    }
}

function collectItems(formData, type) {
    const names = formData.getAll(`${type}Name[]`);
    const icons = formData.getAll(`${type}Icon[]`);
    const locations = formData.getAll(`${type}Location[]`);
    const durations = formData.getAll(`${type}Duration[]`);
    const descriptions = formData.getAll(`${type}Description[]`);

    return names.map((name, i) => ({
        name,
        icon: icons[i],
        location: locations[i],
        duration: durations[i],
        description: descriptions[i]
    }));
}

async function handleImageUpload(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject('No file selected');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            // Store the base64 string of the image
            resolve(e.target.result);
        };
        reader.onerror = (e) => reject(e);
        reader.readAsDataURL(file);
    });
}

function showWonderDetails(wonder) {
    if (!wonder) {
        console.error('Wonder not found');
        return;
    }

    const imageSource = wonder.image.startsWith('data:') 
        ? wonder.image 
        : `../assets/images/${wonder.image}`;

    const modal = document.getElementById('exampleModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <img src="${imageSource}" 
                 alt="${wonder.title}" 
                 class="modal-image">
            <div class="modal-header-content">
                <h2>${wonder.title}</h2>
                <div class="modal-meta">
                    <span><i class="fas fa-clock"></i> ${wonder.duration}</span>
                    <span><i class="fas fa-coins"></i> ${wonder.budget}</span>
                </div>
                <p class="modal-description">${wonder.description}</p>
                <div class="modal-actions">
                    <button class="add-bucket-btn" onclick="addToBucketList(${JSON.stringify(wonder)})">
                        <i class="fas fa-plus"></i> Add to Bucket List
                    </button>
                    <button class="share-btn" onclick="shareWonder(${JSON.stringify(wonder)})">
                        <i class="fas fa-share"></i> Share
                    </button>
                </div>
            </div>
        </div>
        <div class="modal-sections">
            ${wonder.attractions ? `
                <div class="modal-section">
                    <h3><i class="fas fa-star"></i> Must-See Attractions</h3>
                    <div class="attraction-list">
                        ${wonder.attractions.map(item => `
                            <div class="attraction-item">
                                <div class="attraction-icon">
                                    <i class="fas ${item.icon || 'fa-location-dot'}"></i>
                                </div>
                                <div class="attraction-content">
                                    <h4>${item.name}</h4>
                                    <p>${item.description || ''}</p>
                                    ${item.duration ? `<span class="duration-tag"><i class="fas fa-clock"></i> ${item.duration}</span>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${wonder.activities ? `
                <div class="modal-section">
                    <h3><i class="fas fa-hiking"></i> Activities</h3>
                    <div class="attraction-list">
                        ${wonder.activities.map(item => `
                            <div class="attraction-item">
                                <div class="attraction-icon">
                                    <i class="fas ${item.icon || 'fa-circle-dot'}"></i>
                                </div>
                                <div class="attraction-content">
                                    <h4>${item.name}</h4>
                                    <p>${item.description || ''}</p>
                                    ${item.duration ? `<span class="duration-tag"><i class="fas fa-clock"></i> ${item.duration}</span>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${wonder.cultural ? `
                <div class="modal-section">
                    <h3><i class="fas fa-landmark"></i> Cultural Experiences</h3>
                    <div class="attraction-list">
                        ${wonder.cultural.map(item => `
                            <div class="attraction-item">
                                <div class="attraction-icon">
                                    <i class="fas ${item.icon || 'fa-landmark'}"></i>
                                </div>
                                <div class="attraction-content">
                                    <h4>${item.name}</h4>
                                    <p>${item.description || ''}</p>
                                    ${item.duration ? `<span class="duration-tag"><i class="fas fa-clock"></i> ${item.duration}</span>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${wonder.shopping ? `
                <div class="modal-section">
                    <h3><i class="fas fa-shopping-bag"></i> Shopping Experiences</h3>
                    <div class="attraction-list">
                        ${wonder.shopping.map(item => `
                            <div class="attraction-item">
                                <div class="attraction-icon">
                                    <i class="fas ${item.icon || 'fa-shop'}"></i>
                                </div>
                                <div class="attraction-content">
                                    <h4>${item.name}</h4>
                                    <p>${item.description || ''}</p>
                                    <div class="item-meta">
                                        <small><i class="fas fa-map-marker-alt"></i> ${item.location}</small>
                                        ${item.duration ? `<span class="duration-tag"><i class="fas fa-clock"></i> ${item.duration}</span>` : ''}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${wonder.restaurants ? `
                <div class="modal-section">
                    <h3><i class="fas fa-utensils"></i> Recommended Restaurants</h3>
                    <div class="attraction-list">
                        ${wonder.restaurants.map(item => `
                            <div class="attraction-item">
                                <div class="attraction-icon">
                                    <i class="fas ${item.icon || 'fa-utensils'}"></i>
                                </div>
                                <div class="attraction-content">
                                    <h4>${item.name}</h4>
                                    <p>${item.description || ''}</p>
                                    <small><i class="fas fa-map-marker-alt"></i> ${item.location}</small>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('active');
}

function addToBucketList(wonder) {
    const bucketList = JSON.parse(localStorage.getItem('bucketList') || '[]');
    bucketList.push({
        ...wonder,
        dateAdded: new Date().toISOString(),
        status: 'planned'
    });
    localStorage.setItem('bucketList', JSON.stringify(bucketList));
    alert('Added to your bucket list!');
}

async function shareWonder(wonder) {
    if (navigator.share) {
        try {
            await navigator.share({
                title: wonder.title,
                text: `Check out this amazing travel experience: ${wonder.title}`,
                url: window.location.href
            });
        } catch (err) {
            console.error('Error sharing:', err);
        }
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareUrl = `${window.location.origin}/share?id=${wonder.id}`;
        prompt('Copy this link to share:', shareUrl);
    }
}

// Helper function to collect form data for items
function collectItemData(type) {
    const items = [];
    const container = document.getElementById(`${type}-list`);
    
    container.querySelectorAll('.item-form').forEach(form => {
        const item = {
            name: form.querySelector(`input[name="${type}Name[]"]`).value,
            icon: form.querySelector('.selected')?.dataset.icon || 'fa-circle',
            description: form.querySelector(`textarea[name="${type}Description[]"]`).value,
            duration: form.querySelector(`input[name="${type}Duration[]"]`).value,
            location: form.querySelector(`input[name="${type}Location[]"]`)?.value
        };
        items.push(item);
    });
    
    return items;
}
