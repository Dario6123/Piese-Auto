const modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("night");

  if (document.body.classList.contains("night")) {
    modeBtn.textContent = "☀️ Light Mode";
  } else {
    modeBtn.textContent = "🌙 Night Mode";
  }
});

// Buton scroll sus
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
