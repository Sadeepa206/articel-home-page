document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    
    // WhatsApp link with your number
    const whatsappLink = `https://wa.me/94740952096?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
});

// Add smooth scroll animation to form fields
const formElements = document.querySelectorAll('input, textarea');
formElements.forEach(element => {
    element.addEventListener('focus', function() {
        element.style.transform = 'translateY(-5px)';
    });
    
    element.addEventListener('blur', function() {
        element.style.transform = 'translateY(0)';
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 1s ease-in';
    }, 100);
});