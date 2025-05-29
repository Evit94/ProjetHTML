document.getElementById('openSidebar').onclick = function(ev) {
    ev.stopPropagation();
    document.getElementById('sidebarMenu').classList.add('active');
};
document.getElementById('closeSidebar').onclick = function() {
    document.getElementById('sidebarMenu').classList.remove('active');
};
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebarMenu');
    const bar = document.getElementById('openSidebar');
    if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && event.target !== bar) {
        sidebar.classList.remove('active');
    }
});
function aller(page) {
    window.location.href = page;
}

var btnAccueil = document.getElementById('Accueil');
if (btnAccueil) {
    btnAccueil.onclick = function() { aller('Accueil.html'); };
}

var btnInfos = document.getElementById('Informations');
if (btnInfos) {
    btnInfos.onclick = function() { alert('Page Informations à venir !'); };
}

var btnLoc = document.getElementById('Localisation');
if (btnLoc) {
    btnLoc.onclick = function() { window.location.href = 'localisation.html'; };
}

var btnContact = document.getElementById('Contact');
if (btnContact) {
    btnContact.onclick = function() { aller('Contact.html'); };
}

var btnAccueil = document.getElementById('Accueil2');
if (btnAccueil) {
    btnAccueil.onclick = function() { aller('Accueil.html'); };
}

var btnInfos = document.getElementById('Informations2');
if (btnInfos) {
    btnInfos.onclick = function() { alert('Page Informations à venir !'); };
}

var btnLoc = document.getElementById('Localisation2');
if (btnLoc) {
    btnLoc.onclick = function() { window.location.href = 'localisation.html'; };
}

var btnContact = document.getElementById('Contact2');
if (btnContact) {
    btnContact.onclick = function() { aller('Contact.html'); };
}

var btnDecouvrir = document.getElementById('Decouvrir');
if (btnDecouvrir) {
    btnDecouvrir.onclick = function() { window.location.href = 'Decouvrir.html'; };
}
var btnDecouvrir2 = document.getElementById('Decouvrir2');
if (btnDecouvrir2) {
    btnDecouvrir2.onclick = function() { window.location.href = 'Decouvrir.html'; };
}

const quizData = [
  {q: "Quel compositeur a écrit la 'Lettre à Élise' ?", o: ["Mozart", "Beethoven", "Chopin", "Bach"], a: 1},
  {q: "Quel instrument est surnommé 'le roi des instruments' ?", o: ["Piano", "Orgue", "Violon", "Guitare"], a: 1},
  {q: "Qui a composé 'Clair de Lune' ?", o: ["Debussy", "Liszt", "Schubert", "Ravel"], a: 0},
  {q: "Quel compositeur est célèbre pour ses 'Nocturnes' ?", o: ["Chopin", "Beethoven", "Brahms", "Haydn"], a: 0},
  {q: "Combien de touches possède un piano moderne ?", o: ["76", "85", "88", "90"], a: 2},
  {q: "Qui a composé 'La Marche Turque' ?", o: ["Mozart", "Beethoven", "Schumann", "Mendelssohn"], a: 0},
  {q: "Quel compositeur est associé à la période baroque ?", o: ["Bach", "Chopin", "Debussy", "Tchaïkovski"], a: 0},
  {q: "Quel compositeur a écrit 'Le Lac des cygnes' ?", o: ["Tchaïkovski", "Verdi", "Bach", "Liszt"], a: 0},
  {q: "Qui a composé la 'Sonate au clair de lune' ?", o: ["Mozart", "Beethoven", "Schumann", "Chopin"], a: 1},
  {q: "Quel compositeur est célèbre pour ses valses et polonaises ?", o: ["Liszt", "Chopin", "Brahms", "Ravel"], a: 1},
  {q: "Quel instrument n'a pas de cordes ?", o: ["Piano", "Orgue", "Guitare", "Violon"], a: 1},
  {q: "Qui a composé 'L'Hymne à la joie' ?", o: ["Mozart", "Beethoven", "Bach", "Schubert"], a: 1},
  {q: "Quel compositeur est connu pour ses opéras comme 'La Flûte enchantée' ?", o: ["Mozart", "Verdi", "Puccini", "Wagner"], a: 0},
  {q: "Quel instrument est à percussion ?", o: ["Piano", "Violon", "Flûte", "Trompette"], a: 0},
  {q: "Qui a composé 'Le Printemps' des Quatre Saisons ?", o: ["Vivaldi", "Bach", "Mozart", "Beethoven"], a: 0},
  {q: "Quel compositeur est célèbre pour ses ballets comme 'Casse-Noisette' ?", o: ["Tchaïkovski", "Ravel", "Debussy", "Liszt"], a: 0},
  {q: "Quel instrument est à vent ?", o: ["Flûte", "Piano", "Guitare", "Violon"], a: 0},
  {q: "Qui a composé 'Boléro' ?", o: ["Ravel", "Debussy", "Bizet", "Saint-Saëns"], a: 0},
  {q: "Quel compositeur est surnommé 'le roi du ragtime' ?", o: ["Scott Joplin", "Chopin", "Liszt", "Bach"], a: 0},
  {q: "Combien de pédales possède la plupart des pianos modernes ?", o: ["1", "2", "3", "4"], a: 2}
];

function renderQuiz(selectedAnswers = {}, showResults = false, correctAnswers = []) {
  const quizForm = document.getElementById('quiz-form');
  if (!quizForm) return;
  quizForm.innerHTML = quizData.map((q, i) => `
    <div class="quiz-question">
      <div style="font-weight: bold; margin-bottom: 8px;">${i+1}. ${q.q}</div>
      ${q.o.map((opt, j) => {
        let checked = selectedAnswers[`q${i}`] == j ? 'checked' : '';
        let icon = '';
        if (showResults) {
          if (q.a === j) {
            icon = ' <span style="color:green;font-size:1.2em;vertical-align:middle;">✔️</span>';
          } else if (selectedAnswers[`q${i}`] == j) {
            icon = ' <span style="color:red;font-size:1.2em;vertical-align:middle;">❌</span>';
          }
        }
        return `
          <label style="display:inline-block;margin-right:16px;">
            <input type="radio" name="q${i}" value="${j}" ${checked} ${showResults ? 'disabled' : ''}> ${opt}${icon}
          </label>
        `;
      }).join('')}
    </div>
  `).join('') + (!showResults ? `<button type="submit" class="submit-btn">Valider mes réponses</button>` : '');
}

function setupQuiz() {
  const quizForm = document.getElementById('quiz-form');
  const quizResult = document.getElementById('quiz-result');
  if (!quizForm || !quizResult) return;
  renderQuiz();
  quizForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let score = 0;
    let selectedAnswers = {};
    quizData.forEach((q, i) => {
      const selected = quizForm.querySelector(`input[name='q${i}']:checked`);
      if (selected) {
        selectedAnswers[`q${i}`] = Number(selected.value);
        if (Number(selected.value) === q.a) score++;
      }
    });
    quizResult.style.display = 'block';
    quizResult.innerHTML = `<strong>Votre score : ${score} / ${quizData.length}</strong><br>` +
      (
        score < 7
          ? 'Tu peux mieux faire !'
          : score < 14
            ? 'Pas mal !'
            : 'Tu es un pro !'
      );
    renderQuiz(selectedAnswers, true);
    window.scrollTo({top: quizResult.offsetTop-100, behavior:'smooth'});
  });
}

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
    { name: "Monoprix Beaugrenelle", address: "7 Rue Linois, 75015 Paris", lat: 48.849900, lng: 2.282900 }
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
    } else {
      alert('Aucun piano trouvé pour cette recherche.');
    }
  }
}

document.addEventListener('DOMContentLoaded', setupQuiz);