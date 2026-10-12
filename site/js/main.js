(function () {
  "use strict";

  const siteConfig = Object.freeze({
    // PENDENTE: substitua pela URL real do checkout do Snow Bleach.
    checkoutUrl: "",
    price: "R$ 129,90",
  });

  document.querySelectorAll("[data-price]").forEach((element) => {
    element.textContent = siteConfig.price;
  });

  if (siteConfig.checkoutUrl) {
    document.querySelectorAll("[data-checkout]").forEach((link) => {
      link.href = siteConfig.checkoutUrl;
      link.rel = "noopener";
    });
  }

  const bar = document.querySelector(".sticky");
  const start = document.getElementById("produto");

  if (!bar || !start) return;

  const stopElements = [
    document.getElementById("oferta"),
    document.querySelector(".final"),
    document.querySelector("footer"),
  ];
  let scheduled = false;

  function updateStickyCta() {
    scheduled = false;

    const viewportHeight = window.innerHeight;
    const reachedStart =
      start.getBoundingClientRect().top < viewportHeight * 0.5;
    const overlapsStopElement = stopElements.some((element) => {
      if (!element) return false;

      const bounds = element.getBoundingClientRect();
      return bounds.top < viewportHeight - 100 && bounds.bottom > 62;
    });

    bar.classList.toggle("show", reachedStart && !overlapsStopElement);
  }

  function scheduleUpdate() {
    if (scheduled) return;

    scheduled = true;
    window.requestAnimationFrame(updateStickyCta);
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  updateStickyCta();
})();
