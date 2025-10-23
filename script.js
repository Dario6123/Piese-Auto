const modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("night");

  if (document.body.classList.contains("night")) {
    modeBtn.textContent = "☀️ Light Mode";
  } else {
    modeBtn.textContent = "🌙 Night Mode";
  }
});