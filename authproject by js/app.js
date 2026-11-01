
let loginForm = document.querySelector(".login");
let registerForm = document.querySelector(".registred");

let registermess = document.querySelector("#registermess");
let loginmess = document.querySelector("#loginmess");

// Get registered user data
function getReaddata() {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");

    return {
        email,
        password
    };
}

// REGISTER FUNCTIONALITY
if (registerForm) {

    registerForm.addEventListener("submit", (e) => {

        e.preventDefault();

        let email = registerForm.querySelector("#email").value.trim();
        let password = registerForm.querySelector("#password").value.trim();

        // Validation
        if (!email || !password) {
            alert("Please fill up all fields");
            return;
        }

        // Check existing account
        const existingUser = getReaddata();

        if (existingUser.email === email) {
            alert("Your account already exists");
            return;
        }

        // Save user data
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Registration successful!");

        registerForm.reset();

        // Redirect to login page
        window.location.href = "login.html";

    });

}


// LOGIN FUNCTIONALITY
if (loginForm) {

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        let email = loginForm.querySelector("#email").value.trim();
        let password = loginForm.querySelector("#password").value.trim();

        // Validation
        if (!email || !password) {
            alert("Please fill up all fields");
            return;
        }

        // Get registered user
        const user = getReaddata();

        // Check login credentials
        if (user.email === email && user.password === password) {

            alert("Login Successful!");

            window.location.href = "homepage.html";

        } else {

            alert("Invalid email or password");

        }

    });

}
