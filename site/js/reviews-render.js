(function () {
  "use strict";

  const reviews = typeof REVIEWS !== "undefined" && Array.isArray(REVIEWS) ? REVIEWS : [];
  const list = document.getElementById("reviews-list");
  const empty = document.getElementById("reviews-empty");
  const sort = document.getElementById("reviews-sort");
  const sub = document.getElementById("reviews-sub");
  const more = document.getElementById("reviews-more");

  if (!list || !empty || !more || reviews.length === 0) return;

  const NS = "http://www.w3.org/2000/svg";
  const mobile = window.matchMedia("(max-width: 47.9375rem)");
  const items = [];
  let expanded = false;

  function personIcon() {
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("width", "26");
    svg.setAttribute("height", "26");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-width", "1.6");
    svg.style.cssText = "width:26px;height:26px;fill:none;flex-shrink:0;";
    const head = document.createElementNS(NS, "circle");
    head.setAttribute("cx", "12");
    head.setAttribute("cy", "8.5");
    head.setAttribute("r", "3.5");
    head.setAttribute("fill", "none");
    const body = document.createElementNS(NS, "path");
    body.setAttribute("d", "M5 20c.6-3.6 3.4-5.5 7-5.5s6.4 1.9 7 5.5");
    body.setAttribute("fill", "none");
    svg.append(head, body);
    return svg;
  }

  function build(review) {
    const li = document.createElement("li");
    li.className = "review";

    const avatar = document.createElement("span");
    avatar.className = "review-avatar";
    if (review.photo) {
      const img = document.createElement("img");
      img.src = review.photo;
      img.alt = "";
      img.width = 44;
      img.height = 44;
      img.loading = "lazy";
      img.decoding = "async";
      avatar.append(img);
    } else {
      avatar.append(personIcon());
    }

    const body = document.createElement("div");
    body.className = "review-body";
    const who = document.createElement("p");
    who.className = "review-who";
    if (review.name) {
      const name = document.createElement("b");
      name.textContent = review.name;
      who.append(name);
    }
    if (review.meta) {
      const meta = document.createElement("span");
      meta.textContent = review.meta;
      who.append(meta);
    }
    const text = document.createElement("p");
    text.className = "review-text";
    text.textContent = review.text || "";

    if (who.childNodes.length) body.append(who);
    body.append(text);
    li.append(avatar, body);
    return li;
  }

  function update() {
    const limit = mobile.matches ? 4 : 5;
    const showAll = expanded || items.length <= limit;
    items.forEach((li, index) => {
      li.hidden = !showAll && index >= limit;
    });
    more.hidden = showAll;
    more.setAttribute("aria-expanded", String(expanded));
  }

  items.push(...reviews.map(build));
  list.append(...items);
  list.hidden = false;
  empty.hidden = true;
  if (sort) sort.hidden = false;
  if (sub) {
    sub.textContent = "Avaliações de compradores do produto.";
  }

  more.addEventListener("click", () => {
    const firstRevealed = items.find((li) => li.hidden);
    expanded = true;
    update();
    if (firstRevealed) {
      firstRevealed.tabIndex = -1;
      firstRevealed.focus({ preventScroll: true });
    }
  });
  mobile.addEventListener("change", update);
  update();
})();
