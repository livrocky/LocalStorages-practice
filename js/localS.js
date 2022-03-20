const btnEl = document.getElementById("btn1");
const h2El = document.querySelector("h2");
const formEl = document.forms[0];
const ulEl = document.querySelector(".names");
let total = localStorage.getItem("total") === null ? 0 : localStorage.getItem("total");
// let total;
//is storage

// if (localStorage.getItem("total") == null) {
//   total = 0;
// } else {
//   total = localStorage.getItem("total");
// }

h2El.innerText = total;
btnEl.addEventListener("click", () => {
  h2El.textContent = ++total;
  //i storage
  localStorage.setItem("total", total);
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const inpEl = formEl.elements.name;
  //paimti reiksme
  let inputVal = inpEl.value.trim();
  console.log("inputVal===", inputVal);
  addLi(inputVal);
  inpEl.value = " ";
});

function addLi(stringName) {
  //create li
  const liEl = document.createElement("li");
  //add text
  liEl.textContent = stringName;
  //place el
  ulEl.append(liEl);
}
