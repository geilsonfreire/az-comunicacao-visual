const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-list");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

});