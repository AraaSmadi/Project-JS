//validation for sign in form 
if (sessionStorage.getItem('full name') === null) {
    window.location.href = 'http://127.0.0.1:5500/Quiz-site-main/sign-up.html';
}
let userName = document.getElementById("user")
let signInPass = document.getElementById("signIn-pass")
let signInSubmit = document.getElementById("signIn-submit")
let userNameSpan = document.getElementById("checkEmail")
let signInAlert = document.getElementById("signInAlert")
signInSubmit.onclick = function() {
    if (userName.value === sessionStorage.getItem("email") || userName.value === sessionStorage.getItem("user name")) {
        userNameSpan.style.display = "none"
        if (signInPass.value === sessionStorage.getItem("password")) {
            signInAlert.style.display = "none"
            window.location.href = "http://127.0.0.1:5500/Quiz-site-main/welcome.html"
        } else {
            signInAlert.style.display = "inline"
        }
    } else {
        userNameSpan.style.display = "inline"
    }
}