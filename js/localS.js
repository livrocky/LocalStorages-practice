const btnEl = document.getElementById("btn1");
const h2El = document.querySelector("h2");
const formEl = document.forms[0];
const ulEl = document.querySelector(".names");
//is storage
let total = 0;
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
