const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu-link");

function showMenu() {
  menuIcon.classList.toggle("animate");
  menu.classList.toggle("show");
}

function addFocus() {
  links.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");
}

menuIcon.addEventListener("click", showMenu);
links.forEach((link) => link.addEventListener("click", addFocus));
