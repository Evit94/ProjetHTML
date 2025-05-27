document.getElementById('openSidebar').onclick = function(e) {
            e.stopPropagation();
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
function goTo(page) {
    window.location.href = page;
}


var btnAccueil = document.getElementById('Accueil');
if (btnAccueil) {
    btnAccueil.onclick = function() { goTo('Accueil.html'); };
}

var btnInfos = document.getElementById('Informations');
if (btnInfos) {
    btnInfos.onclick = function() { alert('Page Informations à venir !'); };
}

var btnLoc = document.getElementById('Localisation');
if (btnLoc) {
    btnLoc.onclick = function() { alert('Page Localisation à venir !'); };
}

var btnContact = document.getElementById('Contact');
if (btnContact) {
    btnContact.onclick = function() { goTo('Contact.html'); };
}