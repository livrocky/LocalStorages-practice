const inputEl = document.getElementById("name");
const h2El = document.getElementById("display");
const formEl = document.querySelector("form");

formEl.onsubmit = function (e) {
  e.preventDefault();
  let inputVal = formEl.elements.name.value.trim();
  console.log("inputVal===", inputVal);
  formEl.elements.name.value = " ";
  //cookies
  document.cookie = `Name=${inputVal}`;
};
