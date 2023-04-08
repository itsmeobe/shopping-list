let fullName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let fullNameCheck = document.getElementById("errorMessage");
let emailCheck = document.getElementById("errorMessage");
let passwordCheck = document.getElementById("errorMessage");
let fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^[A-Za-z]\w{7,14}$/;

let nameRegisterCheck = () => {
  if (!fullNameRegex.test(fullName.value)) {
    fullNameCheck.innerHTML = "Invalid name!";
    fullNameCheck.classList.replace("text-black-500", "text-red-500");
    fullNameCheck.classList.replace("text-green-500", "text-red-500");
    fullName.style.border = "thick solid #FF0000";
  } else {
    fullNameCheck.innerHTML = "Valid name!";
    fullNameCheck.classList.replace("text-red-500", "text-green-500");
    fullNameCheck.classList.replace("text-black-500", "text-green-500");
    fullName.style.border = "thick solid #9FCFDE";
  }
};

let emailRegisterCheck = () => {
  if (!emailRegex.test(email.value)) {
    emailCheck.innerHTML = "Your email is incorrect!";
    emailCheck.classList.replace("text-black-500", "text-red-500");
    emailCheck.classList.replace("text-green-500", "text-red-500");
    email.style.border = "thick solid #FF0000";
  } else {
    emailCheck.innerHTML = "Your email is correct!";
    emailCheck.classList.replace("text-red-500", "text-green-500");
    emailCheck.classList.replace("text-black-500", "text-green-500");
    email.style.border = "thick solid #9FCFDE";
  }
};

let passwordRegisterCheck = () => {
  if (!passwordRegex.test(password.value)) {
    passwordCheck.innerHTML = "Invalid password!";
    passwordCheck.classList.replace("text-black-500", "text-red-500");
    passwordCheck.classList.replace("text-green-500", "text-red-500");
    password.style.border = "thick solid #FF0000";
  } else {
    passwordCheck.innerHTML = "Valid password!";
    passwordCheck.classList.replace("text-red-500", "text-green-500");
    passwordCheck.classList.replace("text-black-500", "text-green-500");
    password.style.border = "thick solid #9FCFDE";
  }
};

fullName.addEventListener("input", nameRegisterCheck);
email.addEventListener("input", emailRegisterCheck);
password.addEventListener("input", passwordRegisterCheck);
// console.log(emailRegex.test(email.value));

let;
