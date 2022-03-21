const inputEl = document.getElementById("name");
const ulEl = document.querySelector(".column");
const formEl = document.querySelector("form");

formEl.onsubmit = function (e) {
  e.preventDefault();
  let inputVal = formEl.elements.name.value.trim();
  console.log("inputVal===", inputVal);
  addLi(inputVal);
  formEl.elements.name.value = " ";
  //cookies
  document.cookie = `Name=${inputVal}`;
};

const cookieNames = document.cookie;
