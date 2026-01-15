
const toggle = document.querySelector(".award-toggle");
const box = document.querySelector(".award-photo");

if (toggle && box) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    box.hidden = isOpen;
    toggle.textContent = isOpen ? "View award photo →" : "Hide award photo ←";
  });
}
