// localStorage.setItem("facebookLink", "https://www.facebook.com/rokas.ruzevicius");
// localStorage.setItem("twitterLink", "https://twitter.com/AaayeeeeweeeR");
// localStorage.setItem("googleLink", "https://www.google.com/");

const divEl = document.querySelector("div");
const h1El = document.getElementById("title");
const pEl = document.getElementById("describtion");
const h2El = document.getElementById("subtitle");
//name//
const fullName = localStorage.getItem("fullName");
h1El.textContent = fullName;
//subtitle//
const subtitle = localStorage.getItem("subtitle");
h2El.textContent = subtitle;
//describtion//
const describtion = localStorage.getItem("Describtion");
pEl.textContent = describtion;
//image//
const logo = localStorage.getItem("image");
document.getElementById("imgLogo").setAttribute("src", logo);
//links//
const link1 = localStorage.getItem("facebookLink");
document.getElementById("facebook").setAttribute("href", link1);
const link2 = localStorage.getItem("twitterLink");
document.getElementById("twitter").setAttribute("href", link2);
const link3 = localStorage.getItem("googleLink");
document.getElementById("google").setAttribute("href", link3);
