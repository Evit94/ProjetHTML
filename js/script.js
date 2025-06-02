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
if (btnAccueil)
  btnAccueil.onclick = function() { aller('Accueil.html'); };

var btnInfos = document.getElementById('Informations');
if (btnInfos)
  btnInfos.onclick = function() { alert('Page Informations à venir !'); };

var btnLoc = document.getElementById('Localisation');
if (btnLoc)
  btnLoc.onclick = function() { window.location.href = 'localisation.html'; };

var btnContact = document.getElementById('Contact');
if (btnContact)
  btnContact.onclick = function() { aller('Contact.html'); };

var btnAccueil = document.getElementById('Accueil2');
if (btnAccueil)
  btnAccueil.onclick = function() { aller('Accueil.html'); };

var btnInfos = document.getElementById('Informations2');
if (btnInfos)
  btnInfos.onclick = function() { alert('Page Informations à venir !'); };

var btnLoc = document.getElementById('Localisation2');
if (btnLoc)
  btnLoc.onclick = function() { window.location.href = 'localisation.html'; };

var btnContact = document.getElementById('Contact2');
if (btnContact)
  btnContact.onclick = function() { aller('Contact.html'); };

var btnDecouvrir = document.getElementById('Decouvrir');
if (btnDecouvrir)
  btnDecouvrir.onclick = function() { window.location.href = 'Decouvrir.html'; };

var btnDecouvrir2 = document.getElementById('Decouvrir2');
if (btnDecouvrir2)
  btnDecouvrir2.onclick = function() { window.location.href = 'Decouvrir.html'; };