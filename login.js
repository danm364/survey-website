

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


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

//signup details
var signupUser = document.getElementById("user-sign-up")
var signupPassword = document.getElementById("password-field")
var passwordConfirm = document.getElementById("password-confirm-field")
var signupButton = document.getElementById("user-sign-up")


document.addEventListener('DOMContentLoaded', () => {
    function createParagraph() {
      const para = document.createElement('p');
      para.textContent = 'You clicked the button!';
      document.body.appendChild(para);
    }
  
    const buttons = document.querySelectorAll('button');
  
    for (const button of buttons) {
      button.addEventListener('click', createParagraph);
    }
  });
  

