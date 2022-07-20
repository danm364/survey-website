

//const loginForm = document.getElementById("login-form");
//const loginButton = document.getElementById("login-form-submit");
//const loginErrorMsg = document.getElementById("login-error-msg");

//console.log(loginForm);

//loginButton.addEventListener("click", (e) => {
  //  e.preventDefault();
   // const username = loginForm.username.value;
    //const password = loginForm.password.value;

   // if (username === "user" && password === "web_dev") {
    //    alert("You have successfully logged in.");
     //   location.reload();
    //} else {
     //   loginErrorMsg.style.opacity = 1;
   // }
//})

//signup details
const UserForm = document.getElementById('signup-form');
const signupButton = document.getElementById('user-sign-up');
const passwordConfirmation = document.getElementById('password-confirm-field').value;
const passwordNewUser = document.getElementById('password-field').value


function signUpAlert() {
  const passwordConfirmation = document.getElementById('password-confirm-field').value;
  const passwordNewUser = document.getElementById('password-field').value
  const signupUserName = document.getElementById('username-field').value
  if (passwordConfirmation === passwordNewUser && signupUserName.length > 8 ){
    alert('You are now signed up');
    location.reload();
}


};

signupButton.addEventListener("click", signUpAlert);



  

