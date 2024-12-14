// Selectors
const navLinks = document.querySelectorAll('.nav-menu a');
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Smooth Scrolling
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1); // Remove the '#'
        const targetSection = document.getElementById(targetId);

        // Scroll into view smoothly
        targetSection.scrollIntoView({behavior: 'smooth'});
    });
});

// Project Hover Effect
const projectCards = document.querySelectorAll('.project-list article');

projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Contact Form Validation
form.addEventListener('submit', e => {
    e.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    let isValid = true;

    // Name validation
    if (!nameValue) {
        alert('Name is required.');
        isValid = false;
    }

    // Email validation (basic regex for email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Message validation
    if (!messageValue) {
        alert('Message cannot be empty.');
        isValid = false;
    }

    if (isValid) {
        alert('Thank you for your message!');
        form.reset(); // Clear the form
    }
});