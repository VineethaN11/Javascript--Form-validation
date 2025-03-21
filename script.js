document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const errors = document.querySelectorAll(".error");

    function showError(input, message) {
        const error = input.nextElementSibling;
        error.textContent = message;
        error.style.display = "block";
    }

    function clearError(input) {
        const error = input.nextElementSibling;
        error.textContent = "";
        error.style.display = "none";
    }

    function validateName() {
        if (fullName.value.trim().length < 5) {
            showError(fullName, "Name must be at least 5 characters long");
            return false;
        }
        clearError(fullName);
        return true;
    }

    function validateEmail() {
        if (!email.value.includes("@")) {
            showError(email, "Enter a valid email");
            return false;
        }
        clearError(email);
        return true;
    }

    function validatePhone() {
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value) || phone.value === "123456789") {
            showError(phone, "Enter a valid 10-digit phone number");
            return false;
        }
        clearError(phone);
        return true;
    }

    function validatePassword() {
        if (password.value.toLowerCase() === "password" || password.value.length < 6) {
            showError(password, "Password is too weak");
            return false;
        }
        clearError(password);
        return true;
    }

    function validateConfirmPassword() {
        if (confirmPassword.value !== password.value) {
            showError(confirmPassword, "Passwords do not match");
            return false;
        }
        clearError(confirmPassword);
        return true;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const isValid = validateName() & validateEmail() & validatePhone() & validatePassword() & validateConfirmPassword();
        
        if (isValid) {
            alert("Registration successful!");
            form.reset();
            errors.forEach(error => error.style.display = "none");
        }
    });

    fullName.addEventListener("input", validateName);
    email.addEventListener("input", validateEmail);
    phone.addEventListener("input", validatePhone);
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);
});
