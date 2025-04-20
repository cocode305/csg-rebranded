const navToggleBtn = document.querySelector('.nav-toggleBtn');
const mobileSearchBtn = document.querySelector('.searchBtn')
const mobileSearchBox = document.querySelector('.mobile-search');
const closeNavMenu = document.querySelector('.close-btn');
const navMenu = document.querySelector('.mobile-nav-menu');


//Function to toggle the menu
function toggleMenu(event) {
    event.stopPropagation(); //Prevent click from propagating to document.

    // Close Search Box if open
    mobileSearchBox.classList.remove('toggleMobileSearch');

    navMenu.classList.toggle('toggleMenu');
    
}

function toggleMobileSearchBox (event) {
    event.stopPropagation();

    // Close nav menu if open
    navMenu.classList.remove('toggleMenu');

    mobileSearchBox.classList.toggle('toggleMobileSearch');
    
}

// Function to close the menu when clicking outside.
function closeMenu(event) {
    if (!navMenu.contains(event.target) && !navToggleBtn.contains(event.target)) {
        navMenu.classList.remove('toggleMenu');
    }
}

function closeSearch (event) {
    if (!mobileSearchBox.contains(event.target) && !mobileSearchBtn.contains(event.target)) {
        mobileSearchBox.classList.remove('toggleMobileSearch');
    }
}

// Events
navToggleBtn.addEventListener('click', toggleMenu);
mobileSearchBtn.addEventListener('click', toggleMobileSearchBox);
closeNavMenu.addEventListener('click', () => navMenu.classList.remove('toggleMenu'));
document.addEventListener('click', function(event) {
    closeMenu(event);
    closeSearch(event);
});