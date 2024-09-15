document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let isValid = true;
        let errors = [];

        const username = form.querySelector("input[name='username']").value;
        const email = form.querySelector("input[name='email']").value;
        const password = form.querySelector("input[name='password']").value;

        if (!username) {
            isValid = false;
            errors.push("Username is required.");
        }
        if (!email) {
            isValid = false;
            errors.push("Email is required.");
        }
        if (!password || password.length < 6) {
            isValid = false;
            errors.push("Password must be at least 6 characters long.");
        }

        if (isValid) {
            // Store user credentials
            localStorage.setItem('username', username);
            localStorage.setItem('user', JSON.stringify({ username, email, password }));
            alert("Signup successful! You can now log in.");
            window.location.href = "login.html";
        } else {
            alert(errors.join("\n"));
        }
    });
});

