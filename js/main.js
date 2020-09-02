const toggle = document.getElementById("toggle");
const logo = document.querySelector(".logo");
const navLinks = document.querySelector(".nav__links");

const openNavbar = () => {
  navLinks.classList.toggle("active__navbar");
  toggle.classList.toggle("z__index");
  logo.classList.toggle("z__index");
};
