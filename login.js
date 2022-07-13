

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

//signup details
const signupButton = document.getElementById("user-sign-up");
const signupForm = document.getElementById("signup-form");
const signupErrorMsg = document.getElementById("signup-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = signupForm.username.value;
    const password = signupForm.password.value;
    const password_confirm = signupForm.password_confirm.value;

    if (username === "user" && password === password_confirm) {
        alert("You have successfully signed up.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})