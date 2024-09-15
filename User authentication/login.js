document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let isValid = true;
        let errors = [];

        const username = form.querySelector("input[name='username']").value;
        const password = form.querySelector("input[name='password']").value;

        if (!username) {
            isValid = false;
            errors.push("Username is required.");
        }
        if (!password) {
            isValid = false;
            errors.push("Password is required.");
        }

        if (isValid) {
            // Retrieve stored credentials
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                // Valid credentials
                localStorage.setItem('username', username);
                window.location.href = "welcome.html";
            } else {
                // Invalid credentials
                alert("Invalid username or password. Please try again.");
            }
        } else {
            alert(errors.join("\n"));
        }
    });
});
