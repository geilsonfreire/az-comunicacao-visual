// Efeito de carrossel para as imagens do hero 
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

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    indicators.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    indicators[i].classList.add("active");
  }

  function nextSlide() {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 6000);
  }

  interval = setInterval(nextSlide, 6000);

  // Efeito de scroll suave para os links de navegação e menu ativo
  document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("nav ul li a");

    const observer = new IntersectionObserver(entries => {

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
        observer.observe(section);
    });

});

// Efeito de removeção do label de links social 
document.addEventListener("DOMContentLoaded", () => {

    const label = document.querySelector(".Label-top-right");

    const sectionsToHide = document.querySelectorAll(`
        #about,
        #facades,
        #totems,
        #slatted,
        #brises,
        #Signs,
        #doors,
        #marquise,
        #pergolas,
        #clients,
        #partners
    `);

    let isAnySectionVisible = false;

    const observer = new IntersectionObserver((entries) => {

        isAnySectionVisible = entries.some(entry => entry.isIntersecting);

        if (isAnySectionVisible) {
            label.classList.add("hide");
        } else {
            label.classList.remove("hide");
        }

    }, {
        threshold: 0.3
    });

    sectionsToHide.forEach(section => {
        observer.observe(section);
    });

});