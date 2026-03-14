const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-list");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");

}                                                                                                                                                                                                                               );

document.addEventListener("click", (event) => {
    if (!menu.classList.contains("active")) return;

    const clickedInsideMenu = menu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        menu.classList.remove("active");
    }
});
