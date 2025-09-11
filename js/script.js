
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-contacto");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío real del formulario

    alert("✅ ¡Se ha enviado correctamente!");
    formulario.reset(); // Limpia el formulario
  });
});
console.log("📦 El archivo script.js se ha cargado correctamente");
