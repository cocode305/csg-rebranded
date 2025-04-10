const navToggleBtn = document.querySelector('.nav-toggleBtn');
const closeNavMenu = document.querySelector('.close-btn');
const navMenu = document.querySelector('.nav-menu');


//Function to toggle the menu
function toggleMenu(event) {
    navMenu.classList.toggle('toggleMenu');
    event.stopPropagation(); //Prevent click from propagating to document.
}

// Function to close the menu when clicking outside.
function closeMenu(event) {
    if (!navMenu.contains(event.target) && !navToggleBtn.contains(event.target)) {
        navMenu.classList.remove('toggleMenu');
    }
}
navToggleBtn.addEventListener('click', toggleMenu);

closeNavMenu.addEventListener('click', () => navMenu.classList.remove('toggleMenu'));
document.addEventListener('click', closeMenu);