
const PESO_TEXT = document.getElementById("input-peso-text");
const PESO_RANGE = document.getElementById("input-peso-range");
const ALTURA_TEXT = document.getElementById("input-altura-text");
const ALTURA_RANGE = document.getElementById("input-altura-range");
const RESULTADO = document.getElementById("resultado");

function displayResultado() {
  // Cálculo del IMC
  var peso = parseFloat(PESO_TEXT.value);
  var altura = parseFloat(ALTURA_TEXT.value);
  var imc = peso / (altura * altura);
  RESULTADO.innerText = `\n${imc.toFixed(2)}`;

  document.querySelector(".resultado-imc").classList.toggle("hidden")
  document.querySelector(".calculadora-imc").classList.toggle("hidden")
}

function onClickResultado() {
  if (PESO_TEXT.value !== "" && ALTURA_TEXT.value !== "") {
    displayResultado()
  }
}


PESO_RANGE.addEventListener("input", () => {
  PESO_TEXT.value = PESO_RANGE.value;
});
PESO_TEXT.addEventListener("input", () => {
  PESO_RANGE.value = PESO_TEXT.value;
});
ALTURA_RANGE.addEventListener("input", () => {
  ALTURA_TEXT.value = ALTURA_RANGE.value;
});
ALTURA_TEXT.addEventListener("input", () => {
  ALTURA_RANGE.value = ALTURA_TEXT.value;
});

// Asignar el evento click al botón de calcular
document.getElementById("btn-calcular").addEventListener("click", function (event) {
  onClickResultado();
});

