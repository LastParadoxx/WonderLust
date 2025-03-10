const destinationRecommendations = {
    'Adventure & Outdoors': {
        'Hiking': ['Nepal', 'New Zealand', 'Switzerland', 'Peru'],
        'Skiing': ['Switzerland', 'Austria', 'Canada', 'Japan'],
        'Surfing': ['Hawaii', 'Australia', 'Bali', 'Portugal'],
        'Scuba Diving': ['Maldives', 'Great Barrier Reef', 'Thailand', 'Belize']
    },
    'Cultural Experiences': {
        'Museums': ['Paris', 'London', 'New York', 'Rome'],
        'Historical Sites': ['Rome', 'Athens', 'Cairo', 'Petra'],
        'Traditional Workshops': ['Kyoto', 'Florence', 'Marrakech', 'Istanbul']
    }
    // Add more recommendations for other categories
};

function getRecommendations(selectedActivities) {
    const recommendations = new Set();
    
    selectedActivities.forEach(activity => {
        Object.entries(destinationRecommendations).forEach(([category, activities]) => {
            if (activities[activity]) {
                activities[activity].forEach(destination => recommendations.add(destination));
            }
        });
    });
    
    return Array.from(recommendations);
} 
