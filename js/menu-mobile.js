const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-list");

/* abrir e fechar pelo botão */

toggle.addEventListener("click", (event) => {
    event.stopPropagation(); // evita conflito com document click
    menu.classList.toggle("active");
});


/* fechar clicando fora */

document.addEventListener("click", (event) => {

    if (!menu.classList.contains("active")) return;

    const clickedInsideMenu = menu.contains(event.target);
    const clickedToggle = toggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        menu.classList.remove("active");
    }

});
