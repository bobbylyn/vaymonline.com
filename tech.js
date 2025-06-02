document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const registrationMessage = document.getElementById('registrationMessage');
    const contactForm = document.getElementById('contactForm');
    const contactMessage = document.getElementById('contactMessage');
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterMessage = document.getElementById('newsletterMessage');

    if (registrationForm) {
        registrationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(registrationForm);
            const data = Object.fromEntries(formData);

            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                if (response.ok) {
                    registrationMessage.textContent = result.message;
                    registrationMessage.className = 'message success';
                    registrationForm.reset();
                } else {
                    registrationMessage.textContent = result.error || 'Registration failed.';
                    registrationMessage.className = 'message error';
                }
            } catch (error) {
                console.error('Error:', error);
                registrationMessage.textContent = 'An unexpected error occurred.';
                registrationMessage.className = 'message error';
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                if (response.ok) {
                    contactMessage.textContent = result.message;
                    contactMessage.className = 'message success';
                    contactForm.reset();
                } else {
                    contactMessage.textContent = result.error || 'Failed to send message.';
                    contactMessage.className = 'message error';
                }
            } catch (error) {
                console.error('Error:', error);
                contactMessage.textContent = 'An unexpected error occurred.';
                contactMessage.className = 'message error';
            }
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(newsletterForm);
            const data = Object.fromEntries(formData);

            try {
                const response = await fetch('/api/newsletter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                if (response.ok) {
                    newsletterMessage.textContent = result.message;
                    newsletterMessage.className = 'message success';
                    newsletterForm.reset();
                } else {
                    newsletterMessage.textContent = result.error || 'Failed to subscribe.';
                    newsletterMessage.className = 'message error';
                }
            } catch (error) {
                console.error('Error:', error);
                newsletterMessage.textContent = 'An unexpected error occurred.';
                newsletterMessage.className = 'message error';
            }
        });
    }
});