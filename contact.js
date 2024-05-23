document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    fetch('https://formspree.io/f/mqkropqy', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully.');
            document.getElementById('contactForm').reset();
        } else {
            alert('An error occurred while submitting the form.');
        }
    })
    .catch(error => {
        alert('An error occurred while submitting the form.');
    });
});