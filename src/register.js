let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let emailCheck = document.getElementById("errorMessage");
let nameCheck = document.getElementById("errorMessage");
let passwordCheck = document.getElementById("errorMessage");
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

let nameRegisterCheck = () => {
  if (!nameRegex.test(name.value)) {
    nameCheck.innerHTML = "Invalid name!";
    nameCheck.classList.replace("text-black-500", "text-red-500");
    nameCheck.classList.replace("text-green-500", "text-red-500");
    name.classList.style = "border-red-500";
  } else {
    nameCheck.innerHTML = "Valid name!";
    nameCheck.classList.replace("text-red-500", "text-green-500");
    nameCheck.classList.replace("text-black-500", "text-green-500");
    name.classList.style = "border-green-500";
  }
};

let emailRegisterCheck = () => {
  if (!emailRegex.test(email.value)) {
    emailCheck.innerHTML = "Your email is incorrect!";
    emailCheck.classList.replace("text-black-500", "text-red-500");
    emailCheck.classList.replace("text-green-500", "text-red-500");
    email.classList.style = "border-red-500";
  } else {
    emailCheck.innerHTML = "Your email is correct!";
    emailCheck.classList.replace("text-red-500", "text-green-500");
    emailCheck.classList.replace("text-black-500", "text-green-500");
    email.classList.style = "border-green-500";
  }
};

let passwordRegisterCheck = () => {
  if (!passwordRegex.test(password.value)) {
    passwordCheck.innerHTML = "Invalid password!";
    passwordCheck.classList.replace("text-black-500", "text-red-500");
    passwordCheck.classList.replace("text-green-500", "text-red-500");
    password.classList.style = "border-red-500";
  } else {
    passwordCheck.innerHTML = "Valid password!";
    passwordCheck.classList.replace("text-red-500", "text-green-500");
    passwordCheck.classList.replace("text-black-500", "text-green-500");
    password.classList.style = "border-green-500";
  }
};

name.addEventListener("input", nameRegisterCheck);
email.addEventListener("input", emailRegisterCheck);
password.addEventListener("input", passwordRegisterCheck);
// console.log(emailRegex.test(email.value));
