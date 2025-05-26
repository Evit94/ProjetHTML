        document.getElementById('openSidebar').onclick = function(e) {
            e.stopPropagation();
            document.getElementById('sidebarMenu').classList.add('active');
        };
        document.getElementById('closeSidebar').onclick = function() {
            document.getElementById('sidebarMenu').classList.remove('active');
        };
        document.addEventListener('click', function(event) {
            const sidebar = document.getElementById('sidebarMenu');
            const hamburger = document.getElementById('openSidebar');
            if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && event.target !== hamburger) {
                sidebar.classList.remove('active');
            }
        });