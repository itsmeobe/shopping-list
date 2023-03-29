let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let errorMessage = document.getElementById("errorMessage");

let alertEmpty = () => {
  if (!email.value) {
    errorMessage.innerHTML = "Please input email correctly!";
    errorMessage.classList.replace("text-black-500", "text-red-500");
    errorMessage.classList.replace("text-green-500", "text-red-500");
    email.classList.style = "border-red-500";
  } else {
    errorMessage.innerHTML = "Email correct :)";
    errorMessage.classList.replace("text-red-500", "text-green-500");
    errorMessage.classList.replace("text-black-500", "text-green-500");
    email.classList.style = "border-green-500";
  }
};

submit.addEventListener("click", alertEmpty);
