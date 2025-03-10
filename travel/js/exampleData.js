const exampleData = {
    switzerland: {
        title: "14-Day Swiss Adventure Plan",
        duration: "14 Days",
        budget: "$5000-7000",
        image: "switzerland.jpg",
        description: "Experience the best of Switzerland with this carefully curated bucket list that combines adventure, nature, culture, and luxury experiences across the country's most stunning locations.",
        attractions: [
            {
                name: "Glacier Express",
                description: "A scenic train journey connecting Zermatt and St. Moritz. Enjoy panoramic views of the Swiss Alps.",
                icon: "fa-train",
                duration: "Full Day"
            },
            {
                name: "Matterhorn",
                description: "Visit the iconic peak in Zermatt with a cable car ride to Glacier Paradise.",
                icon: "fa-mountain",
                duration: "Half Day"
            },
            {
                name: "Lake Lucerne",
                description: "Explore the picturesque lake by boat and stroll along the waterfront.",
                icon: "fa-water",
                duration: "Half Day"
            },
            {
                name: "Chillon Castle",
                description: "Tour this medieval castle on the shores of Lake Geneva.",
                icon: "fa-castle",
                duration: "Half Day"
            },
            {
                name: "Jungfraujoch",
                description: "Ride the train to Europe's highest railway station and explore the Ice Palace and Glacier Plateau.",
                icon: "fa-mountain",
                duration: "Full Day"
            }
        ],
        activities: [
            {
                name: "Skiing in Zermatt",
                description: "Enjoy world-class slopes with stunning Matterhorn views.",
                icon: "fa-skiing",
                duration: "Full Day"
            },
            {
                name: "Hiking the Eiger Trail",
                description: "Experience one of the most famous Alpine trails in the Jungfrau Region.",
                icon: "fa-hiking",
                duration: "Half Day"
            },
            {
                name: "Paragliding in Interlaken",
                description: "Soar over the lakes and mountains for an unforgettable adventure.",
                icon: "fa-person-falling",
                duration: "Half Day"
            },
            {
                name: "Boat Ride on Lake Geneva",
                description: "Cruise on Switzerland's largest lake, surrounded by vineyards and castles.",
                icon: "fa-ship",
                duration: "Half Day"
            }
        ],
        cultural: [
            {
                name: "Old Town of Zurich",
                description: "Wander the historic streets and discover Swiss culture and history.",
                icon: "fa-landmark",
                duration: "Half Day"
            },
            {
                name: "Montreux Jazz Festival",
                description: "Attend one of the world's most renowned music festivals (if traveling in July).",
                icon: "fa-music",
                duration: "Half Day"
            },
            {
                name: "Swiss National Museum",
                location: "Zurich",
                description: "Learn about Swiss history and culture through impressive exhibitions.",
                icon: "fa-museum",
                duration: "Half Day"
            }
        ],
        shopping: [
            {
                name: "Bahnhofstrasse",
                location: "Zurich",
                description: "Explore high-end luxury shopping with brands like Cartier and Rolex.",
                icon: "fa-shopping-bag",
                duration: "Half Day"
            },
            {
                name: "Bucherer",
                location: "Lucerne",
                description: "Purchase Swiss watches and jewelry from a trusted retailer.",
                icon: "fa-clock",
                duration: "Half Day"
            },
            {
                name: "Plainpalais Flea Market",
                location: "Geneva",
                description: "Hunt for antiques, art, and unique souvenirs.",
                icon: "fa-store",
                duration: "Half Day"
            }
        ],
        restaurants: [
            {
                name: "Haus Hiltl",
                location: "Zurich",
                description: "The world's oldest vegetarian restaurant with an incredible buffet.",
                icon: "fa-utensils",
                type: "Lunch/Dinner"
            },
            {
                name: "Old Swiss House",
                location: "Lucerne",
                description: "Renowned for its Wiener Schnitzel and traditional charm.",
                icon: "fa-utensils",
                type: "Lunch/Dinner"
            },
            {
                name: "Chez Vrony",
                location: "Zermatt",
                description: "Enjoy traditional dishes with stunning Matterhorn views.",
                icon: "fa-utensils",
                type: "Lunch/Dinner"
            },
            {
                name: "Bayview by Michel Roth",
                location: "Geneva",
                description: "Experience fine dining at a Michelin-starred restaurant.",
                icon: "fa-star",
                type: "Dinner"
            }
        ]
    },
    egypt: {
        title: "14-Day Egypt Adventure Plan",
        duration: "14 Days",
        budget: "$3000-4500",
        image: "egypt.jpg",
        description: "Discover the wonders of ancient Egypt on this comprehensive journey through history, combining iconic pyramids, temple visits, and Nile experiences with modern Egyptian culture.",
        attractions: [
            {
                name: "Pyramids of Giza & Sphinx",
                description: "Explore the Great Pyramids, the Sphinx, and the Solar Boat Museum.",
                icon: "fa-pyramid",
                duration: "Full Day"
            },
            {
                name: "Egyptian Museum",
                description: "Discover ancient artifacts, including treasures from Tutankhamun's tomb.",
                icon: "fa-landmark",
                duration: "Half Day"
            },
            {
                name: "Citadel of Salah El-Din",
                description: "Visit the historic Islamic fortress and admire panoramic views of Cairo.",
                icon: "fa-fort",
                duration: "Half Day"
            },
            {
                name: "Karnak & Luxor Temples",
                description: "Marvel at the largest temple complex in the ancient world.",
                icon: "fa-monument",
                duration: "Full Day"
            },
            {
                name: "Abu Simbel Temples",
                description: "Visit the monumental temples built by Ramses II.",
                icon: "fa-landmark",
                duration: "Full Day"
            }
        ],
        activities: [
            {
                name: "Nile River Cruise",
                description: "Sail the Nile, stopping at Kom Ombo and Edfu Temples.",
                icon: "fa-ship",
                duration: "3-5 Days"
            },
            {
                name: "Hot Air Balloon Ride",
                description: "Enjoy a sunrise view over the Valley of the Kings.",
                icon: "fa-hot-air-balloon",
                duration: "Half Day"
            },
            {
                name: "Desert Safari",
                description: "Explore the Mediterranean Desert on quad bikes or camels.",
                icon: "fa-desert",
                duration: "Half Day"
            },
            {
                name: "Scuba Diving & Snorkeling",
                description: "Discover vibrant coral reefs and marine life in the Red Sea.",
                icon: "fa-water",
                duration: "Full Day"
            },
            {
                name: "Felucca Ride",
                description: "Relax on a traditional wooden sailboat.",
                icon: "fa-sailboat",
                duration: "Half Day"
            }
        ],
        cultural: [
            {
                name: "Old Cairo",
                description: "Visit the Hanging Church, Ben Ezra Synagogue, and Coptic Museum.",
                icon: "fa-landmark",
                duration: "Half Day"
            },
            {
                name: "Khan El Khalili Bazaar",
                description: "Shop for spices, jewelry, and souvenirs in the bustling souk.",
                icon: "fa-shop",
                duration: "Half Day"
            },
            {
                name: "Sound & Light Show",
                description: "Learn the history of the pyramids through a dazzling audio-visual display.",
                icon: "fa-lightbulb",
                duration: "Evening"
            },
            {
                name: "Nubian Village Visit",
                description: "Immerse yourself in the vibrant Nubian culture and colorful houses.",
                icon: "fa-people-group",
                duration: "Half Day"
            }
        ],
        shopping: [
            {
                name: "Khan El Khalili Bazaar",
                location: "Cairo",
                description: "Perfect for buying spices, handcrafted jewelry, and lanterns.",
                icon: "fa-shop",
                duration: "Half Day"
            },
            {
                name: "City Stars Mall",
                location: "Cairo",
                description: "A massive shopping destination with international and Egyptian brands.",
                icon: "fa-shopping-bag",
                duration: "Half Day"
            },
            {
                name: "Souk Luxor",
                location: "Luxor",
                description: "Shop for alabaster statues and traditional Egyptian souvenirs.",
                icon: "fa-store",
                duration: "Half Day"
            },
            {
                name: "Aswan Market",
                location: "Aswan",
                description: "Known for Nubian handicrafts, spices, and traditional scarves.",
                icon: "fa-store",
                duration: "Half Day"
            }
        ],
        restaurants: [
            {
                name: "Abou Tarek",
                location: "Cairo",
                description: "Famous for authentic koshary, Egypt's national dish.",
                icon: "fa-utensils",
                type: "Lunch/Dinner"
            },
            {
                name: "Sobhy Kaber",
                location: "Cairo",
                description: "Known for grilled meats, including lamb chops and kofta.",
                icon: "fa-utensils",
                type: "Lunch/Dinner"
            },
            {
                name: "Hadramout Antar",
                location: "Cairo",
                description: "Renowned for its authentic Yemeni cuisine, including mandi and haneeth.",
                icon: "fa-utensils",
                type: "Dinner"
            }
        ]
    },
    bali: {
        title: "10-Day Bali Paradise Escape",
        duration: "10 Days",
        budget: "$2000-3500",
        image: "bali1.jpg",
        description: "Experience the perfect blend of spiritual wellness, tropical beaches, and cultural immersion in the Island of the Gods.",
        attractions: [
            {
                name: "Tanah Lot Temple",
                description: "Visit this iconic sea temple perched on a rocky outcrop.",
                icon: "fa-temple",
                duration: "Half Day"
            },
            {
                name: "Sacred Monkey Forest",
                description: "Explore this spiritual forest sanctuary home to hundreds of monkeys.",
                icon: "fa-tree",
                duration: "Half Day"
            },
            {
                name: "Uluwatu Temple",
                description: "Watch the sunset and traditional Kecak fire dance at this clifftop temple.",
                icon: "fa-temple",
                duration: "Evening"
            },
            {
                name: "Rice Terraces of Tegalalang",
                description: "Marvel at the stunning UNESCO-listed rice paddies.",
                icon: "fa-mountain",
                duration: "Half Day"
            }
        ],
        activities: [
            {
                name: "Yoga in Ubud",
                description: "Practice yoga in the spiritual heart of Bali.",
                icon: "fa-spa",
                duration: "Half Day"
            },
            {
                name: "Surf Lessons in Canggu",
                description: "Learn to surf at one of Bali's best beaches for beginners.",
                icon: "fa-water",
                duration: "Half Day"
            },
            {
                name: "Mount Batur Sunrise Trek",
                description: "Hike an active volcano for breathtaking sunrise views.",
                icon: "fa-hiking",
                duration: "Full Day"
            },
            {
                name: "Spa and Wellness Day",
                description: "Indulge in traditional Balinese treatments and healing practices.",
                icon: "fa-spa",
                duration: "Full Day"
            }
        ],
        cultural: [
            {
                name: "Traditional Cooking Class",
                description: "Learn to prepare authentic Balinese dishes with local ingredients.",
                icon: "fa-utensils",
                duration: "Half Day"
            },
            {
                name: "Water Temple Ceremony",
                description: "Participate in a traditional water purification ritual.",
                icon: "fa-water",
                duration: "Half Day"
            },
            {
                name: "Art Galleries of Ubud",
                description: "Explore traditional and contemporary Balinese art.",
                icon: "fa-palette",
                duration: "Half Day"
            }
        ],
        shopping: [
            {
                name: "Ubud Art Market",
                location: "Ubud",
                description: "Traditional market for handicrafts, textiles, and souvenirs.",
                icon: "fa-shop",
                duration: "Half Day"
            },
            {
                name: "Seminyak Boutiques",
                location: "Seminyak",
                description: "Designer boutiques and contemporary Balinese fashion.",
                icon: "fa-shopping-bag",
                duration: "Half Day"
            },
            {
                name: "John Hardy Workshop",
                location: "Ubud",
                description: "Visit the famous jewelry designer's sustainable workshop.",
                icon: "fa-gem",
                duration: "Half Day"
            }
        ],
        restaurants: [
            {
                name: "Locavore",
                location: "Ubud",
                description: "Award-winning restaurant featuring local ingredients in innovative dishes.",
                icon: "fa-star",
                type: "Dinner"
            },
            {
                name: "Warung Babi Guling Ibu Oka",
                location: "Ubud",
                description: "Famous for traditional Balinese suckling pig.",
                icon: "fa-utensils",
                type: "Lunch"
            },
            {
                name: "La Lucciola",
                location: "Seminyak",
                description: "Beachfront dining with Mediterranean-Indonesian fusion.",
                icon: "fa-utensils",
                type: "Lunch/Dinner"
            }
        ]
    },
    maldives: {
        title: "7-Day Maldives Paradise Escape",
        duration: "7 Days",
        budget: "$4000-6000",
        image: "maldives.jpg",
        description: "Experience luxury and tranquility in the Maldives with this carefully curated itinerary combining water activities, relaxation, and unique experiences.",
        attractions: [
            {
                name: "Male City Tour",
                description: "Explore the capital city's markets, mosques, and museums.",
                icon: "fa-city",
                duration: "Half Day"
            },
            {
                name: "Maafushi Island",
                description: "Visit a local island to experience authentic Maldivian culture.",
                icon: "fa-island",
                duration: "Full Day"
            },
            {
                name: "Artificial Beach",
                description: "Enjoy water sports and beach activities at Male's popular beach.",
                icon: "fa-umbrella-beach",
                duration: "Half Day"
            }
        ],
        activities: [
            {
                name: "Scuba Diving",
                description: "Discover vibrant coral reefs and marine life at world-class dive sites.",
                icon: "fa-water",
                duration: "Full Day"
            },
            {
                name: "Dolphin Watching",
                description: "Sunset cruise to spot dolphins in their natural habitat.",
                icon: "fa-fish",
                duration: "Half Day"
            },
            {
                name: "Island Hopping",
                description: "Visit multiple islands and experience different resort offerings.",
                icon: "fa-ship",
                duration: "Full Day"
            },
            {
                name: "Underwater Spa",
                description: "Unique spa experience with underwater treatment rooms.",
                icon: "fa-spa",
                duration: "Half Day"
            }
        ],
        cultural: [
            {
                name: "Local Island Visit",
                description: "Experience daily life and traditions of Maldivian people.",
                icon: "fa-people-group",
                duration: "Full Day"
            },
            {
                name: "Cooking Class",
                description: "Learn to prepare traditional Maldivian dishes and spice blends.",
                icon: "fa-utensils",
                duration: "Half Day"
            }
        ],
        shopping: [
            {
                name: "Male Local Market",
                location: "Male",
                description: "Shop for local handicrafts, textiles, and spices.",
                icon: "fa-shop",
                duration: "Half Day"
            },
            {
                name: "STO Trade Centre",
                location: "Male",
                description: "Modern shopping complex with local and international brands.",
                icon: "fa-shopping-bag",
                duration: "Half Day"
            }
        ],
        restaurants: [
            {
                name: "Ithaa Undersea",
                location: "Conrad Maldives",
                description: "Unique dining experience in an underwater restaurant.",
                icon: "fa-star",
                type: "Dinner"
            },
            {
                name: "Jazz Cafe",
                location: "Male",
                description: "Local cuisine with live music in a relaxed setting.",
                icon: "fa-utensils",
                type: "Lunch/Dinner"
            }
        ]
    },
    newzealand: {
        title: "14-Day New Zealand Adventure",
        duration: "14 Days",
        budget: "$4500-6000",
        image: "newzealand.jpg",
        description: "Experience the stunning landscapes and thrilling adventures of New Zealand, from pristine fjords to volcanic peaks, with a mix of Lord of the Rings filming locations and Maori culture.",
        attractions: [
            {
                name: "Milford Sound",
                description: "Cruise through one of the world's most beautiful fjords.",
                icon: "fa-water",
                duration: "Full Day"
            },
            {
                name: "Hobbiton Movie Set",
                description: "Visit the famous Lord of the Rings filming location.",
                icon: "fa-ring",
                duration: "Half Day"
            },
            {
                name: "Rotorua Geothermal Parks",
                description: "Explore geysers, mud pools, and thermal springs.",
                icon: "fa-fire",
                duration: "Full Day"
            },
            {
                name: "Mount Cook National Park",
                description: "Discover New Zealand's highest peak and stunning alpine scenery.",
                icon: "fa-mountain",
                duration: "Full Day"
            }
        ],
        activities: [
            {
                name: "Bungee Jumping in Queenstown",
                description: "Experience the thrill at the world's first commercial bungee site.",
                icon: "fa-person-falling",
                duration: "Half Day"
            },
            {
                name: "Glacier Hiking",
                description: "Guided trek on Franz Josef or Fox Glacier.",
                icon: "fa-hiking",
                duration: "Full Day"
            },
            {
                name: "Skydiving over Lake Taupo",
                description: "Freefall with views of volcanoes and the lake.",
                icon: "fa-parachute-box",
                duration: "Half Day"
            },
            {
                name: "Kayaking Abel Tasman",
                description: "Paddle through crystal-clear waters and golden beaches.",
                icon: "fa-water",
                duration: "Full Day"
            }
        ],
        cultural: [
            {
                name: "Maori Cultural Experience",
                description: "Traditional hangi dinner and cultural performance.",
                icon: "fa-people-group",
                duration: "Evening"
            },
            {
                name: "Wellington Museums",
                description: "Visit Te Papa and other cultural institutions.",
                icon: "fa-museum",
                duration: "Full Day"
            },
            {
                name: "Wine Tasting in Marlborough",
                description: "Sample New Zealand's famous Sauvignon Blanc.",
                icon: "fa-wine-glass",
                duration: "Half Day"
            }
        ],
        restaurants: [
            {
                name: "Fleur's Place",
                location: "Moeraki",
                description: "Fresh seafood in a charming coastal setting.",
                icon: "fa-fish",
                type: "Lunch/Dinner"
            },
            {
                name: "Botswana Butchery",
                location: "Queenstown",
                description: "Premium steaks and local game meat.",
                icon: "fa-utensils",
                type: "Dinner"
            },
            {
                name: "The French Cafe",
                location: "Auckland",
                description: "Fine dining with contemporary New Zealand cuisine.",
                icon: "fa-star",
                type: "Dinner"
            }
        ]
    },
    bahamas: {
        title: "7-Day Bahamas Paradise",
        duration: "7 Days",
        budget: "$2500-4000",
        image: "bahamas.jpg",
        description: "Discover the pristine beaches, vibrant marine life, and laid-back island culture of the Bahamas with this carefully curated tropical getaway.",
        attractions: [
            {
                name: "Paradise Island",
                description: "Explore the famous Atlantis resort and pristine beaches.",
                icon: "fa-umbrella-beach",
                duration: "Full Day"
            },
            {
                name: "Pig Beach",
                description: "Visit the famous swimming pigs at Big Major Cay.",
                icon: "fa-water",
                duration: "Full Day"
            },
            {
                name: "Exuma Cays",
                description: "Explore the stunning chain of pristine islands and cays.",
                icon: "fa-island",
                duration: "Full Day"
            },
            {
                name: "Nassau Historic Sites",
                description: "Visit Fort Charlotte and other colonial landmarks.",
                icon: "fa-fort",
                duration: "Half Day"
            }
        ],
        activities: [
            {
                name: "Swimming with Pigs",
                description: "Unique experience with the famous swimming pigs of the Bahamas.",
                icon: "fa-water",
                duration: "Full Day"
            },
            {
                name: "Coral Reef Snorkeling",
                description: "Discover vibrant marine life in crystal-clear waters.",
                icon: "fa-fish",
                duration: "Half Day"
            },
            {
                name: "Island Hopping Tour",
                description: "Visit multiple islands and hidden beaches by boat.",
                icon: "fa-ship",
                duration: "Full Day"
            },
            {
                name: "Swimming with Sharks",
                description: "Safe encounter with nurse sharks at Compass Cay.",
                icon: "fa-water",
                duration: "Half Day"
            }
        ],
        cultural: [
            {
                name: "Straw Market",
                description: "Shop for traditional Bahamian crafts and souvenirs.",
                icon: "fa-shop",
                duration: "Half Day"
            },
            {
                name: "Fish Fry at Arawak Cay",
                description: "Experience local cuisine and culture at famous fish fry.",
                icon: "fa-utensils",
                duration: "Evening"
            },
            {
                name: "Junkanoo Museum",
                description: "Learn about the colorful Bahamian carnival tradition.",
                icon: "fa-mask",
                duration: "Half Day"
            }
        ],
        restaurants: [
            {
                name: "Graycliff Restaurant",
                location: "Nassau",
                description: "Fine dining in a historic colonial mansion.",
                icon: "fa-star",
                type: "Dinner"
            },
            {
                name: "Twin Brothers",
                location: "Arawak Cay",
                description: "Famous for authentic Bahamian seafood.",
                icon: "fa-fish",
                type: "Lunch/Dinner"
            },
            {
                name: "Dune",
                location: "Paradise Island",
                description: "Elegant fusion cuisine with ocean views.",
                icon: "fa-utensils",
                type: "Dinner"
            }
        ]
    },
    greece: {
        title: "10-Day Greek Adventure",
        duration: "10 Days",
        budget: "$3500-5000",
        image: "greece1.jpg",
        description: "Experience the perfect blend of ancient history and Mediterranean island life in Greece, from iconic ruins to stunning beaches and vibrant culture.",
        attractions: [
            {
                name: "Acropolis & Parthenon",
                description: "Explore Athens' iconic ancient citadel and temple.",
                icon: "fa-monument",
                duration: "Full Day"
            },
            {
                name: "Santorini Caldera",
                description: "Visit the famous blue-domed churches and stunning volcanic views.",
                icon: "fa-church",
                duration: "Full Day"
            },
            {
                name: "Ancient Delphi",
                description: "Discover the ancient sanctuary of Apollo and Oracle.",
                icon: "fa-landmark",
                duration: "Full Day"
            },
            {
                name: "Meteora Monasteries",
                description: "Visit monasteries perched atop dramatic rock formations.",
                icon: "fa-mountain",
                duration: "Full Day"
            }
        ],
        activities: [
            {
                name: "Island Hopping",
                description: "Explore multiple Greek islands by ferry.",
                icon: "fa-ship",
                duration: "3 Days"
            },
            {
                name: "Wine Tasting in Santorini",
                description: "Sample local wines from volcanic soil vineyards.",
                icon: "fa-wine-glass",
                duration: "Half Day"
            },
            {
                name: "Sailing in Milos",
                description: "Discover hidden beaches and crystal caves by boat.",
                icon: "fa-sailboat",
                duration: "Full Day"
            },
            {
                name: "Athens Food Tour",
                description: "Explore local markets and taste traditional Greek cuisine.",
                icon: "fa-utensils",
                duration: "Half Day"
            }
        ],
        cultural: [
            {
                name: "Greek Cooking Class",
                description: "Learn to prepare traditional Greek dishes.",
                icon: "fa-kitchen-set",
                duration: "Half Day"
            },
            {
                name: "Traditional Dance Show",
                description: "Experience Greek music and dance performances.",
                icon: "fa-music",
                duration: "Evening"
            },
            {
                name: "Plaka Neighborhood",
                description: "Explore Athens' oldest district with traditional shops.",
                icon: "fa-street-view",
                duration: "Half Day"
            }
        ],
        restaurants: [
            {
                name: "Selene",
                location: "Santorini",
                description: "Fine dining with modern Greek cuisine and caldera views.",
                icon: "fa-star",
                type: "Dinner"
            },
            {
                name: "Ta Karamanlidika",
                location: "Athens",
                description: "Traditional Greek deli and mezedes.",
                icon: "fa-utensils",
                type: "Lunch"
            },
            {
                name: "Ergon House",
                location: "Athens",
                description: "Modern Greek gastronomy in a unique marketplace setting.",
                icon: "fa-utensils",
                type: "Lunch/Dinner"
            }
        ]
    },
    japan: {
        title: "12-Day Japan Discovery",
        duration: "12 Days",
        budget: "$4000-6000",
        image: "japan.jpg",
        description: "Experience the fascinating contrast of ancient traditions and modern innovation in Japan, from historic temples to cutting-edge technology.",
        attractions: [
            {
                name: "Fushimi Inari Shrine",
                description: "Walk through thousands of vermillion torii gates.",
                icon: "fa-torii-gate",
                duration: "Half Day"
            },
            {
                name: "Senso-ji Temple",
                description: "Tokyo's oldest Buddhist temple and vibrant Asakusa area.",
                icon: "fa-temple",
                duration: "Half Day"
            },
            {
                name: "Arashiyama Bamboo Grove",
                description: "Explore the iconic bamboo forest and temples.",
                icon: "fa-tree",
                duration: "Half Day"
            },
            {
                name: "Miyajima Island",
                description: "See the floating torii gate and wild deer.",
                icon: "fa-torii-gate",
                duration: "Full Day"
            }
        ],
        activities: [
            {
                name: "Tea Ceremony",
                description: "Traditional tea ceremony experience in Kyoto.",
                icon: "fa-mug-hot",
                duration: "Half Day"
            },
            {
                name: "Sushi Making Class",
                description: "Learn to make sushi from professional chefs.",
                icon: "fa-utensils",
                duration: "Half Day"
            },
            {
                name: "Robot Restaurant Show",
                description: "Experience Tokyo's unique pop culture entertainment.",
                icon: "fa-robot",
                duration: "Evening"
            },
            {
                name: "Mount Fuji Climb",
                description: "Guided climb of Japan's iconic mountain (seasonal).",
                icon: "fa-mountain",
                duration: "Full Day"
            }
        ],
        cultural: [
            {
                name: "Gion District",
                description: "Explore Kyoto's historic geisha district.",
                icon: "fa-landmark",
                duration: "Evening"
            },
            {
                name: "Sumo Wrestling Match",
                description: "Watch Japan's national sport (seasonal).",
                icon: "fa-person",
                duration: "Half Day"
            },
            {
                name: "Onsen Experience",
                description: "Relax in traditional hot springs.",
                icon: "fa-hot-tub",
                duration: "Evening"
            }
        ],
        shopping: [
            {
                name: "Akihabara",
                location: "Tokyo",
                description: "Electronics and anime culture district.",
                icon: "fa-shop",
                duration: "Half Day"
            },
            {
                name: "Tsukiji Outer Market",
                location: "Tokyo",
                description: "Famous fish market and street food.",
                icon: "fa-fish",
                duration: "Half Day"
            },
            {
                name: "Nishiki Market",
                location: "Kyoto",
                description: "Traditional food market with local specialties.",
                icon: "fa-store",
                duration: "Half Day"
            }
        ],
        restaurants: [
            {
                name: "Sukiyabashi Jiro",
                location: "Tokyo",
                description: "World-famous sushi restaurant.",
                icon: "fa-star",
                type: "Lunch/Dinner"
            },
            {
                name: "Ichiran Ramen",
                location: "Multiple Locations",
                description: "Customizable authentic ramen experience.",
                icon: "fa-utensils",
                type: "Lunch/Dinner"
            },
            {
                name: "Tempura Tsunahachi",
                location: "Tokyo",
                description: "Traditional tempura restaurant.",
                icon: "fa-utensils",
                type: "Lunch/Dinner"
            }
        ]
    },
    germany: {
        title: "10-Day German Adventure",
        duration: "10 Days",
        budget: "$3500-5000",
        image: "germany.jpg",
        description: "Experience Germany's rich history, vibrant culture, and modern lifestyle through this carefully curated journey combining historical sites, sports culture, and high-speed adventures.",
        attractions: [
            {
                name: "Neuschwanstein Castle",
                description: "Visit the fairy-tale castle that inspired Disney, nestled in the Bavarian Alps.",
                icon: "fa-castle",
                duration: "Full Day"
            },
            {
                name: "Brandenburg Gate",
                description: "Explore Berlin's most iconic landmark and symbol of German unity.",
                icon: "fa-landmark",
                duration: "Half Day"
            },
            {
                name: "Signal Iduna Park",
                description: "Experience the legendary 'Yellow Wall' at Borussia Dortmund's home stadium.",
                icon: "fa-futbol",
                duration: "Match Day"
            },
            {
                name: "Allianz Arena",
                description: "Watch FC Bayern Munich play in their state-of-the-art stadium.",
                icon: "fa-futbol",
                duration: "Match Day"
            }
        ],
        activities: [
            {
                name: "Autobahn Experience",
                description: "Drive on the famous German highways with no speed limits (rental car required).",
                icon: "fa-car-side",
                duration: "Flexible"
            },
            {
                name: "Bundesliga Match",
                description: "Experience German football culture at a live match with passionate fans.",
                icon: "fa-futbol",
                duration: "Half Day"
            },
            {
                name: "Beer Garden Experience",
                description: "Enjoy traditional Bavarian beer and food in Munich's famous beer gardens.",
                icon: "fa-beer-mug-empty",
                duration: "Evening"
            },
            {
                name: "Nürburgring Track Day",
                description: "Drive or ride on the legendary Nordschleife racing circuit.",
                icon: "fa-flag-checkered",
                duration: "Full Day"
            }
        ],
        cultural: [
            {
                name: "Oktoberfest",
                description: "World's largest folk festival with traditional music and beer (seasonal).",
                icon: "fa-beer",
                duration: "Full Day"
            },
            {
                name: "Christmas Markets",
                description: "Experience magical winter markets with crafts and glühwein (seasonal).",
                icon: "fa-gifts",
                duration: "Evening"
            }
        ],
        restaurants: [
            {
                name: "Hofbräuhaus",
                location: "Munich",
                description: "Historic beer hall with traditional Bavarian cuisine.",
                icon: "fa-utensils",
                type: "Lunch/Dinner"
            },
            {
                name: "Curry 36",
                location: "Berlin",
                description: "Famous street food spot for authentic Currywurst.",
                icon: "fa-utensils",
                type: "Lunch"
            },
            {
                name: "Schnitzelei",
                location: "Berlin",
                description: "Specialty restaurant serving various schnitzel dishes.",
                icon: "fa-utensils",
                type: "Dinner"
            }
        ]
    }
}; 
