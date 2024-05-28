function toggleSidebar() {
    const body = document.body;
    if (window.innerWidth <= 768) {
        body.classList.toggle('sidebar-visible-small');
    } else {
        body.classList.toggle('sidebar-hidden');
    }
}

function adjustSidebarForScreenSize() {
    const body = document.body;
    if (window.innerWidth <= 768) {
        body.classList.add('sidebar-hidden-small');
        body.classList.remove('sidebar-visible-small');
    } else {
        body.classList.remove('sidebar-hidden-small');
        body.classList.remove('sidebar-visible-small');
    }
}

// Adjust sidebar on initial load
adjustSidebarForScreenSize();

// Adjust sidebar on window resize
window.addEventListener('resize', adjustSidebarForScreenSize);
