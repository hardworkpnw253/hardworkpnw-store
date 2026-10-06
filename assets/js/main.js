/* HardworkPNW storefront — nav, scroll state, order-inquiry modal */
(function () {
  "use strict";

  /* Fixed nav: solid background after scrolling past the hero top */
  var nav = document.querySelector(".site-nav");
  var onScroll = function () {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu toggle */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });

  /* Order-inquiry modal */
  var backdrop = document.getElementById("order-modal");
  var modal = backdrop.querySelector(".modal");
  var closeBtn = modal.querySelector(".modal-close");
  var productName = document.getElementById("order-modal-product");
  var emailBtn = document.getElementById("order-email");
  var lastFocused = null;

  function openModal(product) {
    lastFocused = document.activeElement;
    productName.textContent = product || "—";
    emailBtn.href =
      "mailto:Hardworkpnw@yahoo.com?subject=" +
      encodeURIComponent("Order inquiry: " + (product || "HardworkPNW gear"));
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    backdrop.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  document.querySelectorAll(".order-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal(btn.getAttribute("data-product"));
    });
  });
  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", function (e) {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !backdrop.hidden) closeModal();
  });
})();
