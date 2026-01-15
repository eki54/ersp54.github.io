const toggle = document.querySelector(".award-toggle");
const box = document.querySelector(".award-photo");

if (toggle && box) {
  // ✅ 처음 버튼 문구를 저장해둠 (네가 바꾼 긴 문장 그대로)
  const originalText = toggle.textContent.trim();

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    box.hidden = isOpen;

    // ✅ 열리면 짧게, 닫히면 원래 문구로 복구
    toggle.textContent = isOpen ? originalText : "Hide ←";
  });
}
