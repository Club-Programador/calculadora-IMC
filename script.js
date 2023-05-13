
const PESO_TEXT = document.getElementById("input-peso-text");
const PESO_RANGE = document.getElementById("input-peso-range");
const ALTURA_TEXT = document.getElementById("input-altura-text");
const ALTURA_RANGE = document.getElementById("input-altura-range");

const RESULTADO = document.getElementById("resultado");
const DESCRIPCION_SOBREPESO = "Una mala alimentación y hábitos sedentarios pueden contribuir a acumular grasa en tu cuerpo, lo que puede llevar a problemas médicos en el futuro."
const DESCRIPCION_SALUDABLE = "El equilibrio del organismo -su homeostasis- se obtiene con mayor facilidad si el peso de una persona es normal. Una dieta balanceada y ejercicio ayudan a mantenerse en esta categoría."
const DESCRIPCION_BAJO_PESO = "La delgadez puede deberse a diversos factores, tales como genéticos y dietéticos. Independiente de su causa, es importante para tu bienestar mantener un peso saludable."
const DESCRIPCION_OBESIDAD = "Cuidado, la obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía."
const ESPACIO_BAJO_PESO = document.getElementById("resultado-bajo-peso");
const ESPACIO_SALUDABLE = document.getElementById("resultado-saludable");
const ESPACIO_SOBREPESO = document.getElementById("resultado-sobrepeso");
const ESPACIO_OBESIDAD = document.getElementById("resultado-obesidad");

function displayResultado() {
  // Cálculo del IMC
  var peso = parseFloat(PESO_TEXT.value);
  var altura = parseFloat(ALTURA_TEXT.value);
  var imc = (peso / ((altura * altura) / 10000)).toFixed(2);

  // Mostrat IMC
  RESULTADO.innerText = `\n${imc}`;

  if (imc < 18.5) {
    ESPACIO_BAJO_PESO.innerHTML = imc;
  } else if (imc >= 18.5 && imc <= 24.9) {
    ESPACIO_SALUDABLE.innerHTML = imc;
  } else if (imc >= 25.0 && imc <= 29.9) {
    ESPACIO_SOBREPESO.innerHTML = imc;
  } else if (imc > 29.9) {
    ESPACIO_OBESIDAD.innerHTML = imc;
  }


  document.querySelector(".resultado-imc").classList.toggle("hidden") // Ocultar Panel Calculadora
  document.querySelector(".calculadora-imc").classList.toggle("hidden") // Mostrar Panel Resultado
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

