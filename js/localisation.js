if (document.getElementById('map')) {
    const pianos = [
        { name: "Gare de Lyon", address: "207 Rue de Bercy, 75012 Paris", lat: 48.844294, lng: 2.373084 },
        { name: "Gare Saint-Lazare", address: "13 Rue d'Amsterdam, 75008 Paris", lat: 48.876174, lng: 2.326376 },
        { name: "Gare de Bercy", address: "48 bis Boulevard de Bercy, 75012 Paris", lat: 48.840833, lng: 2.381389 },
        { name: "Gare Montparnasse", address: "17 Boulevard de Vaugirard, 75015 Paris", lat: 48.840047, lng: 2.320768 },
        { name: "Gare de l'Est", address: "Place du 11 Novembre 1918, 75010 Paris", lat: 48.876355, lng: 2.359233 },
        { name: "Forum des Halles", address: "101 Porte Berger, 75001 Paris", lat: 48.862725, lng: 2.346884 },
        { name: "Châtelet - Les Halles", address: "1 Rue Pierre Lescot, 75001 Paris", lat: 48.861992, lng: 2.347094 },
        { name: "Gare d'Austerlitz", address: "85 Quai d'Austerlitz, 75013 Paris", lat: 48.842182, lng: 2.365352 },
        { name: "Gare du Nord", address: "18 Rue de Dunkerque, 75010 Paris", lat: 48.880948, lng: 2.355291 },
        { name: "Parc de la Villette", address: "211 Avenue Jean Jaurès, 75019 Paris", lat: 48.889735, lng: 2.393206 },
        { name: "Le Nelson Châtelet", address: "16 Rue Coquillière, 75001 Paris", lat: 48.864210, lng: 2.343420 },
        { name: "Dupont Café", address: "84 Av. de France, 75013 Paris", lat: 48.846800, lng: 2.374900 },
        { name: "Gare La Défense", address: "1 Parvis de la Défense, 92800 Puteaux", lat: 48.892427, lng: 2.236980 },
        { name: "Monoprix Champs-Élysées", address: "52 Avenue des Champs-Élysées, 75008 Paris", lat: 48.870850, lng: 2.304510 },
        { name: "Monoprix Nationale (13e)", address: "117 Boulevard Vincent Auriol, 75013 Paris", lat: 48.834900, lng: 2.366900 },
        { name: "Monoprix Montparnasse", address: "31 Rue du Départ, 75014 Paris", lat: 48.842900, lng: 2.323400 },
        { name: "Monoprix Nation", address: "28 Cours de Vincennes, 75012 Paris", lat: 48.848900, lng: 2.398900 },
        { name: "Opéra Garnier", address: "Place de l'Opéra, 75009 Paris", lat: 48.870697, lng: 2.331640 },
        { name: "Piano International", address: "Place de la République, 75010 Paris", lat: 48.867430, lng: 2.363180 },
        { name: "Monoprix Beaugrenelle", address: "7 Rue Linois, 75015 Paris", lat: 48.849900, lng: 2.282900 },
        { name: "Sacré-Cœur", address: "35 Rue du Chevalier de la Barre, 75018 Paris", lat: 48.886704, lng: 2.343104 }
    ];

    const map = L.map('map').setView([48.8566, 2.3522], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        minZoom: 1,
        maxZoom: 19
    }).addTo(map);

    const markers = [];
    pianos.forEach(piano => {
        const marker = L.marker([piano.lat, piano.lng], {
        title: piano.name,
        alt: piano.name,
        icon: L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
            iconSize: [36, 36],
            iconAnchor: [18, 36],
            popupAnchor: [0, -36]
        })
    }).addTo(map);
    marker.bindPopup(`<b>${piano.name}</b><br>${piano.address}`);
    markers.push({ marker, piano });
    });
    window.searchPiano = function() {
        const val = document.getElementById('searchInput').value.trim().toLowerCase();
        if (!val) return;
        const found = pianos.find(p => p.name.toLowerCase().includes(val) || p.address.toLowerCase().includes(val));
        if (found) {
            map.setView([found.lat, found.lng], 15);
            const m = markers.find(mk => mk.piano === found);
            if (m) m.marker.openPopup();
        } else 
            alert('Aucun piano trouvé pour cette recherche.');
    }
}