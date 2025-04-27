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

// HERO CAROUSEL SLIDE
let slideIndex = 1;
let autoSlide;
let longPressTimer;
let touchStartX = 0;
let touchEndX = 0;

showSlides(slideIndex);

// NAVIGATION CONTROLS.
// Change Slide,
// >>> Stop the slide for a bit when the nav button is clicked
// >>> Resumes right after the interaction.
document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();
    plusSlides(-1);
    startAutoSlide();

});
document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide(); // stops the slide for a bit.
    plusSlides(1); // Change the slide.
    startAutoSlide(); //Resume auto play.
});


// EVENT FOR DOTS TO MOVE SLIDE TO THE NEXT OR PREVIOUS ONE.
document.querySelectorAll('.dots').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        currentSlide(index + 1);
        startAutoSlide();
    });
});

// FUNCTION TO MOVE SLIDE TO NEXT OR PREVIOUS ONE
// >>> IT IS CALLED ON THE EVENT LISTENER FOR THE SLIDE BUTTONS (PREV AND NEXT)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.hero-slide');
    let dots = document.querySelectorAll('.dots');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade");
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");
    dots[slideIndex - 1].classList.add("active");

}

// AUTO SLIDE
function startAutoSlide() {
    autoSlide = setInterval(() => {
        plusSlides(1);
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

// START AUTO SLIDE
startAutoSlide();

const heroSlider = document.querySelector('.hero-slider');

heroSlider.addEventListener('mouseover', stopAutoSlide);

heroSlider.addEventListener('mouseout', startAutoSlide);

heroSlider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

heroSlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance in px to count as swipe.

    if (touchEndX < touchStartX - swipeThreshold) {
        stopAutoSlide();
        plusSlides(1); //Swipe left - next
        startAutoSlide();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        stopAutoSlide();
        plusSlides(-1); // Swipe right - prev
        startAutoSlide();
    }
}