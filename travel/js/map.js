let map;
let markers = [];

function initMap() {
    map = L.map('map').setView([0, 0], 2);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    loadBucketListLocations();
}

async function loadBucketListLocations() {
    const bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];
    
    for (const item of bucketList) {
        try {
            const coordinates = await getCoordinates(item.destination);
            addMarker(coordinates, item);
        } catch (error) {
            console.error('Error loading location:', error);
        }
    }
}

async function getCoordinates(address) {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
    );
    const data = await response.json();
    
    if (data && data[0]) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    }
    throw new Error('Location not found');
}

function addMarker(coordinates, item) {
    const marker = L.marker(coordinates)
        .addTo(map)
        .bindPopup(`
            <h3>${item.destination}</h3>
            <p><strong>Activities:</strong> ${item.activities}</p>
            <p><strong>Date:</strong> ${new Date(item.travelDate).toLocaleDateString()}</p>
        `);
    
    markers.push(marker);
}

document.addEventListener('DOMContentLoaded', initMap); 
