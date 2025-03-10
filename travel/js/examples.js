document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded'); // Debug log
    
    const modal = document.getElementById('exampleModal');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close-modal');
    
    // Handle view details button clicks
    document.querySelectorAll('.view-details-btn').forEach(button => {
        console.log('Found view details button:', button); // Debug log
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const exampleId = this.dataset.example;
            console.log('Button clicked:', exampleId); // Debug log
            const example = exampleData[exampleId];
            console.log('Example data:', example); // Debug log
            
            if (example) {
                showModal(example);
            }
        });
    });
    
    // Handle like button clicks
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const heart = this.querySelector('i');
            heart.classList.toggle('far');
            heart.classList.toggle('fas');
            heart.classList.toggle('text-red-500');
        });
    });
    
    // Close modal when clicking the close button
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

function showModal(example) {
    const modal = document.getElementById('exampleModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) {
        console.error('Modal elements not found');
        return;
    }

    modalContent.innerHTML = `
        <div class="modal-header">
            <img src="../assets/images/${example.image}" 
                 alt="${example.title}" 
                 onerror="this.src='../assets/images/placeholder.jpg'"
                 class="modal-image">
            <div class="modal-header-content">
                <h2>${example.title}</h2>
                <div class="modal-meta">
                    <span><i class="fas fa-clock"></i> ${example.duration}</span>
                    <span><i class="fas fa-coins"></i> ${example.budget}</span>
                </div>
            </div>
        </div>
        <div class="modal-body">
            ${example.description ? `
                <div class="modal-section">
                    <p class="modal-description">${example.description}</p>
                </div>
            ` : ''}
            
            ${example.attractions?.length ? `
                <div class="modal-section">
                    <h3><i class="fas fa-star"></i> Must-See Attractions</h3>
                    <div class="attraction-list">
                        ${example.attractions.map(item => `
                            <div class="attraction-item">
                                <div class="attraction-icon">
                                    <i class="fas ${item.icon}"></i>
                                </div>
                                <div>
                                    <h4>${item.name}</h4>
                                    <p>${item.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${example.activities?.length ? `
                <div class="modal-section">
                    <h3><i class="fas fa-hiking"></i> Activities</h3>
                    <div class="attraction-list">
                        ${example.activities.map(item => `
                            <div class="attraction-item">
                                <div class="attraction-icon">
                                    <i class="fas ${item.icon}"></i>
                                </div>
                                <div>
                                    <h4>${item.name}</h4>
                                    <p>${item.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${example.restaurants?.length ? `
                <div class="modal-section">
                    <h3><i class="fas fa-utensils"></i> Recommended Restaurants</h3>
                    <div class="attraction-list">
                        ${example.restaurants.map(item => `
                            <div class="attraction-item">
                                <div class="attraction-icon">
                                    <i class="fas ${item.icon}"></i>
                                </div>
                                <div>
                                    <h4>${item.name}</h4>
                                    <p>${item.description}</p>
                                    <small><i class="fas fa-map-marker-alt"></i> ${item.location}</small>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    document.body.classList.add('modal-open');
    modal.classList.add('active');
}
