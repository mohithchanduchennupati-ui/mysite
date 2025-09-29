
const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');

RegisterLink.addEventListener('click', () => {
    container.classList.add('active');
});

LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
});

// Handle Login Form Submission
document.querySelector('.form-box.Login form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;
    try {
    // Replace 'YOUR_IP' with your actual IP address (e.g., 192.168.1.5)
    const res = await fetch('http://192.168.1.5:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (res.ok) {
            alert('Login successful!');
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (err) {
        alert('Network error');
    }
});

// Handle Register Form Submission
document.querySelector('.form-box.Register form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;
    try {
    // Replace 'YOUR_IP' with your actual IP address (e.g., 192.168.1.5)
    const res = await fetch('http://192.168.1.5:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (res.ok) {
            alert('Registration successful!');
        } else {
            alert(data.error || (data.errors && data.errors[0].msg) || 'Registration failed');
        }
    } catch (err) {
        alert('Network error');
    }
});