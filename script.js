document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.social-icons a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`Link clicked: ${e.target.href}`);
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Reset the form
        contactForm.reset();

        alert('Thank you for your message!');
    });
});
