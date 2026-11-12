(function () {
  "use strict";

  const sliderBox = document.querySelector(".ing-slider-box");
  const carousel = document.querySelector(".ing-carousel");
  if (!sliderBox || !carousel) return;

  const track = carousel.querySelector(".ing-track");
  const cards = track ? track.querySelectorAll(".ing") : [];
  if (!track || cards.length < 2) return;

  const prevBtn = sliderBox.querySelector(".ing-nav--prev");
  const nextBtn = sliderBox.querySelector(".ing-nav--next");
  const dotsContainer = document.querySelector(".ing-dots");

  const INTERVAL = 3800; // 3.8s por slide
  let currentIndex = 0;
  let timer = null;
  let isPaused = false;

  // Criação dos dots indicadores
  const dots = [];
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    cards.forEach(function (_, i) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "ing-dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Ir para o ingrediente " + (i + 1));
      dot.addEventListener("click", function () {
        goToSlide(i);
        resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });
  }

  // Transição por CSS transform (NUNCA usa scrollIntoView, para não roubar o scroll da página)
  function goToSlide(index) {
    if (index < 0) {
      currentIndex = cards.length - 1;
    } else if (index >= cards.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    track.style.transform = "translateX(-" + (currentIndex * 100) + "%)";

    dots.forEach(function (dot, i) {
      if (i === currentIndex) {
        dot.classList.add("is-active");
        dot.setAttribute("aria-selected", "true");
      } else {
        dot.classList.remove("is-active");
        dot.setAttribute("aria-selected", "false");
      }
    });
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Eventos de botões
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      nextSlide();
      resetAutoPlay();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      prevSlide();
      resetAutoPlay();
    });
  }

  // Autoplay
  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(function () {
      if (!isPaused) {
        nextSlide();
      }
    }, INTERVAL);
  }

  function stopAutoPlay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function resetAutoPlay() {
    isPaused = false;
    startAutoPlay();
  }

  // Pausa ao interagir com o mouse
  sliderBox.addEventListener("mouseenter", function () {
    isPaused = true;
  });
  sliderBox.addEventListener("mouseleave", function () {
    isPaused = false;
  });

  // Suporte a Swipe no Mobile (touch) sem roubar o scroll vertical
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  carousel.addEventListener(
    "touchstart",
    function (e) {
      isPaused = true;
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    },
    { passive: true }
  );

  carousel.addEventListener(
    "touchend",
    function (e) {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleGesture();
      setTimeout(function () {
        isPaused = false;
      }, 4000);
    },
    { passive: true }
  );

  function handleGesture() {
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Se o movimento for mais horizontal do que vertical e maior que 40px
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  // Respeita preferência do usuário por menos movimento
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!motionQuery.matches) {
    startAutoPlay();
  }
  motionQuery.addEventListener("change", function () {
    if (motionQuery.matches) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });
})();
