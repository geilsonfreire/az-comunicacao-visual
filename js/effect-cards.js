// =============================================
// 🧩 cards effect
// =============================================
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.05,
    rootMargin: "0px 0px -50px 0px"
});

cards.forEach((card) => {
    observer.observe(card);
});
