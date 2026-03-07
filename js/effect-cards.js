// =============================================
// 🧩 cards effect
// =============================================
const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {
    card.style.setProperty("--delay", `${i * 90}ms`);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px"
});

cards.forEach((card) => observer.observe(card));
