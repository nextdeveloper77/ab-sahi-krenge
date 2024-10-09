document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');

    messageElement.textContent = `Thank you for your submission, ${name}! We will contact you at ${email}.`;
    this.reset(); // Clear the form
});
