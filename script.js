// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    // Prevent scrolling when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Simple reveal animation on scroll
const revealElements = () => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    sections.forEach(section => {
        const elementTop = section.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Initialize elements with zero opacity and translated Y for the animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    if (section.id !== 'home') { // Don't hide the hero section initially
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.5, 0, 0, 1)';
    }
});

window.addEventListener('scroll', revealElements);
// Trigger once on load
revealElements();
