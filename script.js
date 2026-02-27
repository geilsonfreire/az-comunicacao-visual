// =============================================
// 🔥 CARROSSEL DO HERO
// =============================================

const slides = document.querySelectorAll(".slide");
const indicatorsContainer = document.querySelector(".indicators");

let index = 0;
let interval;

// Criar indicadores dinamicamente
slides.forEach((_, i) => {
    const btn = document.createElement("button");

    if (i === 0) btn.classList.add("active");

    btn.addEventListener("click", () => {
        index = i;
        showSlide(index);
        resetInterval();
    });

    indicatorsContainer.appendChild(btn);
});

const indicators = document.querySelectorAll(".indicators button");

// Exibe slide ativo
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    indicators.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    indicators[i].classList.add("active");
}

// Próximo slide automático
function nextSlide() {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
}

// Reinicia intervalo ao clicar manualmente
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 6000);
}

// Inicia rotação automática
interval = setInterval(nextSlide, 6000);


// =============================================
// 🚀 TUDO QUE DEPENDE DO DOM
// =============================================

document.addEventListener("DOMContentLoaded", () => {

    // =============================================
    // 🎯 MENU ATIVO AUTOMÁTICO (IntersectionObserver)
    // =============================================

    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("nav ul li a");

    const sectionObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const id = entry.target.getAttribute("id");

                navLinks.forEach(link => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }

        });

    }, {
        threshold: 0.6
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    // =============================================
    // 🎬 SCROLL CINEMATOGRÁFICO PERSONALIZADO
    // =============================================

    const navAnchors = document.querySelectorAll('nav a[href^="#"]');

    navAnchors.forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault(); // Impede o scroll padrão do navegador

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            const headerOffset = 10; // Altura do header fixo
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

        });

    });


    // =============================================
    // 🧩 LABEL LATERAL (aparece apenas na HOME)
    // =============================================

    const label = document.querySelector(".Label-top-right");
    const homeSection = document.getElementById("home");

    const labelObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                label.classList.add("show");
            } else {
                label.classList.remove("show");
            }

        });

    }, {
        threshold: 0.6
    });

    labelObserver.observe(homeSection);

});