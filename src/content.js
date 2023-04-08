const API_ENDPOINT = "https://642c0edd208dfe254726c8ee.mockapi.io/modify";
const box = document.getElementById("box");

//CRUD - READ//
const showData = () => {
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        box.innerHTML += `
        <div class="grid grid-cols-2 bg-[#DE9F9F]/50 w-full h-25 rounded-2xl flex flex-col p-4">
        <div>
          <h2 class="font-bold text-md">${data[i].date}</h2>
          <p>${data[i].title}</p>
          </div>
          <div class="flex justify-end">
             <button id="edit"><img class="w-8" src="../assets/edit.png" alt="edit" /></button>
             <button id="delete"><img class="w-8" src="../assets/delete.png" alt="delete" /></button>
          </div>
        </div>`;
      }
    });
};

showData();
