let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let errorMessage = document.getElementById("errorMessage");

let alertEmpty = () => {
  if (!email.value) {
    errorMessage.innerHTML = "Please input email correctly!";
    errorMessage.classList.replace("text-black-500", "text-red-500");
    errorMessage.classList.replace("text-green-500", "text-red-500");
    email.style.border = "thick solid #FF0000";
  } else {
    errorMessage.innerHTML = "Email correct :)";
    errorMessage.classList.replace("text-red-500", "text-green-500");
    errorMessage.classList.replace("text-black-500", "text-green-500");
    email.style.border = "thick solid #9FCFDE";
  }
};

submit.addEventListener("click", alertEmpty);

const API_ENDPOINT = "https://642c0edd208dfe254726c8ee.mockapi.io/user";

const compareData = () => {
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

compareData();
