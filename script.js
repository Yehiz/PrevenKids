// Calculador de IMC
document.getElementById("imcForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const peso = parseFloat(document.getElementById("peso").value);
  const talla = parseFloat(document.getElementById("talla").value) / 100;
  const imc = (peso / (talla * talla)).toFixed(2);
  document.getElementById("resultado").textContent = "IMC: " + imc;
});

// Formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("feedback").textContent =
    "Gracias por tu mensaje. Te responderemos pronto.";
  this.reset();
});

// Calculador de IMC
document.getElementById("imcForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const peso = parseFloat(document.getElementById("peso").value);
  const talla = parseFloat(document.getElementById("talla").value) / 100;
  const imc = (peso / (talla * talla)).toFixed(2);
  document.getElementById("resultado").textContent = "IMC: " + imc;
});

// Formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("feedback").textContent =
    "Gracias por tu mensaje. Te responderemos pronto.";
  this.reset();
});
