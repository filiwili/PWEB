const entradaTexto = document.getElementById("entradaTexto");
const radioMaiusculas = document.getElementById("maiusculas");
const radioMinusculas = document.getElementById("minusculas");

radioMaiusculas.addEventListener("change", () => {
  if (radioMaiusculas.checked) {
    entradaTexto.value = entradaTexto.value.toUpperCase();
  }
});

radioMinusculas.addEventListener("change", () => {
  if (radioMinusculas.checked) {
    entradaTexto.value = entradaTexto.value.toLowerCase();
  }
});
