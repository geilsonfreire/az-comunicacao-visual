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
    const header = document.querySelector("header");

    navAnchors.forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (!target) return;

            // 🔥 Altura dinâmica do header
            const headerOffset = header ? header.offsetHeight : 0;

            // 📐 Cálculo preciso da posição
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
        threshold: 0.5
    });

    labelObserver.observe(homeSection);

});


// =============================================
// 🧩 Buttom whatsApp com Tooltip
// =============================================
document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.querySelector(".whatsapp-tooltip");

    let displayCount = 0;
    const maxDisplays = 3;

    function showTooltipCycle() {
        if (displayCount >= maxDisplays) return;

        setTimeout(() => {
            tooltip.classList.add("show");
            displayCount++;

            // Fica visível por 8s
            setTimeout(() => {
                tooltip.classList.remove("show");

                // Espera 10s antes do próximo ciclo
                if (displayCount < maxDisplays) {
                    setTimeout(showTooltipCycle, 10000);
                }

            }, 8000);

        }, displayCount === 0 ? 3000 : 0);
        // 3s apenas na primeira vez
    }

    showTooltipCycle();
});