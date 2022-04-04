//validation for sign up form 
let input = document.querySelectorAll(".input")
let signUp = document.getElementById("signUp")
let checkPass = document.getElementById("rePass");
let submit = document.getElementById("submit");
let fNameSpan = document.getElementById("firstName")
let lNameSpan = document.getElementById("lastName")
let pass = document.getElementById("pass")
let chpass = document.getElementById("checkpass")
let name = document.getElementsByClassName("name");
let mailCheck = document.querySelector(".mailCheck")
let userN = document.getElementById("userN")
let userNSpan = document.getElementById("userNSpan")
let nameReg = /[a-zA-Z]/;
let password = document.getElementById("password");
let passwordReg = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*_-]{8,16}$/;


for (i = 0; i < input.length; i++) {
  input[i].onchange = function () {
    localStorage.setItem(this.name, this.value)
  }
}


submit.onclick = function () {


  if (name[0].value.match(nameReg)) {
    fNameSpan.style.display = "none"
    if (name[1].value.match(nameReg)) {
      lNameSpan.style.display = "none"
      if (userN.value.match(nameReg)) {
        userNSpan.style.display = "none"
        if (email.value.endsWith(".com") === false || email.value.includes("@") === false) {
          mailCheck.style.display = "inline"
        } else {
          mailCheck.style.display = "none"
          if (password.value.match(passwordReg)) {
            pass.style.display = "none"
            if (password.value === checkPass.value) {
              chpass.style.display = "none"
              window.location.href = "https://abdallah-alhasan.github.io/Quiz-site/sign-in.html"
            } else {
              chpass.style.display = "inline"
            }
          } else {
            pass.style.display = "inline"
          }
        }
      } else {
        userNSpan.style.display = "inline"
      }
    } else {
      lNameSpan.style.display = "inline"
    }
  } else {
    fNameSpan.style.display = "inline"
  }

  sessionStorage.setItem("full name", `${localStorage.getItem("first name")} ${localStorage.getItem("last name")}`)
  sessionStorage.setItem("email", `${localStorage.getItem("email")}`)
  sessionStorage.setItem("user name", `${localStorage.getItem("userN")}`)
  sessionStorage.setItem("password", `${localStorage.getItem("password")}`)

}




