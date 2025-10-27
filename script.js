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


// --------------------
// Coș Produse
// --------------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Funcție pentru actualizarea numărului din coș (header)
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if(cartCount) cartCount.innerText = cart.length;
}

// Adaugă produse în coș la click
document.querySelectorAll(".produs button").forEach(button => {
  button.addEventListener("click", function () {
    const produs = this.closest(".produs");
    const name = produs.querySelector("h3").innerText;
    const price = parseFloat(produs.querySelector("p").innerText.replace(/[^0-9]/g,''));

    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${name} a fost adăugat în coș ✅`);
  });
});

// Actualizare inițială count coș
updateCartCount();