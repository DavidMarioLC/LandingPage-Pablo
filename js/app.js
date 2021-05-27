const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

function showMenu(e) {
  menuIcon.classList.toggle("animate");
  menu.classList.toggle("show");
}

menuIcon.addEventListener("click", showMenu);
