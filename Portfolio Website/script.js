// Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    // Typed.js for hero section
    var typed = new Typed('#typed-text', {
        strings: ['Python Developer', 'Data Analyst', 'Backend Engineer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize MDB components
    new mdb.Ripple(document.querySelectorAll('.btn'));
    new mdb.HoverZoom(document.querySelectorAll('.hover-zoom'));
});