document.addEventListener("DOMContentLoaded", () => {

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

// Lightbox (Photograph only)
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.querySelector(".lightbox-close");

// Photograph 섹션의 썸네일 링크만 잡음 (The Seed/GMC는 건드리지 않음)
const photoLinks = document.querySelectorAll(".photo-grid a.photo-item");

function openLightbox(src, altText = "") {
  lightboxImg.src = src;
  lightboxImg.alt = altText;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

photoLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault(); // 새 탭 열림 막고 라이트박스로
    const img = a.querySelector("img");
    const src = a.getAttribute("href");
    openLightbox(src, img?.alt || "");
  });
});

lightboxClose?.addEventListener("click", closeLightbox);

// 배경 클릭하면 닫기 (이미지 클릭은 유지)
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// ESC로 닫기
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});

});
