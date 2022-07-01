const hamburgerButton = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar-links')

function toggleHam() {
    navbarLinks.classList.toggle('show')
}
hamburgerButton.addEventListener('click', toggleHam);