const toggle = document.querySelector(".award-toggle");
const box = document.querySelector(".award-photo");

if (toggle && box) {
  // 버튼에 원래 써있던 문장(너가 바꾼 이름)을 기억
  const originalText = toggle.textContent.trim();

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    box.hidden = isOpen;

    // 열려있으면 Hide, 닫히면 원래 문장으로 복구
    toggle.textContent = isOpen ? originalText : "Close";
  });
}