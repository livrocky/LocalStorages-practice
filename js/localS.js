const btnEl = document.getElementById("btn1");
const h2El = document.querySelector("h2");
//padarem kad issaugotu reiksme ir po perkrovimu
let total = localStorage.getItem("total") === null ? 0 : localStorage.getItem("total");

//VIENAS IS BUDU//

// let total;
//is storage

// if (localStorage.getItem("total") == null) {
//   total = 0;
// } else {
//   total = localStorage.getItem("total");
// }

//PASPAUDUS MYGTUKA SKAICIUS PADIDEJA +1
//TADA ISIKELIA I LOCAL STORAGE

h2El.textContent = total;
btnEl.addEventListener("click", () => {
  h2El.textContent = ++total;
  //i storage
  localStorage.setItem("total", total);
});

/* 2
<form>
  <input type="text" id="name" placeholder="Enter name" />
</form>
ivedus varda ir issiuntus forma su enter(automatiskai vysksta)
pridedam ta varda i vardu sarasa, kaip saraso el
*/

const formEl = document.querySelector("form");
const ulEl = document.querySelector(".names");
const inputVal = document.getElementById("name");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputValue = inputVal.value.trim();
  console.log("inputValue===", inputValue);
  //Idedam i ta sukurta funkcija savo input Value.
  addLi(inputValue);
  inputVal.value = " ";
});

//sukurti arr kad ideti i local storage
const namesArr = [];
//susikuriam funkcija kuri sukurs li ir duos text content.
function addLi(stringName) {
  const liEl = document.createElement("li");
  liEl.textContent = stringName;
  ulEl.append(liEl);
  //add to array [LOCAL STORAGE]//
  namesArr.push(stringName);
  saveToStorage();
}

function saveToStorage() {
  const stringFromArr = namesArr.join(",");
  localStorage.setItem("names", stringFromArr);
}
//[LOCAL STORAGE] ENDS//

//TAS PATS SU MOKYTOJU DARYTA//

// const formEl = document.forms[0];
// const ulEl = document.querySelector(".names");

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const inpEl = formEl.elements.name;
//   //paimti reiksme
//   let inputVal = inpEl.value.trim();
//   console.log("inputVal===", inputVal);
//   addLi(inputVal);
//   inpEl.value = " ";
// });

// function addLi(stringName) {
//   //create li
//   const liEl = document.createElement("li");
//   //add text
//   liEl.textContent = stringName;
//   //place el
//   ulEl.append(liEl);
// }
