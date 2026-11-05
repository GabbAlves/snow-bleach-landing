(function () {
  "use strict";

  const siteConfig = Object.freeze({
    checkoutUrl:
      "https://yzwu2m-qv.myshopify.com/cart/67685120508124:1",
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
})();
