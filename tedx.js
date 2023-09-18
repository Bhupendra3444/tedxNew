
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        

        
        contactForm.reset();
    });
});
