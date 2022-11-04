const API = "http://localhost:8000";

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let submit = document.getElementById("submit");
let output = document.getElementById("output");
let users = [];

let search = ''

submit.addEventListener("click", function () {
  CreateObject();
  CheckInput();
});

class Phonebook {
  constructor(object) {
    this.name = object.name;
    this.phone = object.phone;
    this.number = object.number;
    this.url = object.url;
  }

  getUserContainer() {
    return `<div class="outputContent">
            <p>${this.name}</p>
            <p>${this.phone}</p>
            <p>${this.number}</p>
            <p>${this.url}</p>
         </div>`;
  }
}

function CreateObject() {
  let user = new Phonebook({
    name: input1.value,
    phone: input2.value,
    number: input3.value,
    url: input4.value,
  });
  output.insertAdjacentHTML("beforeend", user.getUserContainer());

  users.push(user);
  console.log(users);
}

function CheckInput() {
  if (
    input1.value == "" ||
    input2.value == "" ||
    input3.value == "" ||
    input4.value == ""
  ) {
    alert("Пожалуйста, введите имя или телефон");
  }
}

// ? отображение карточек товаров
async function render() {
    let products = await fetch(
        `${API}?q=${search}`
    )
}
