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