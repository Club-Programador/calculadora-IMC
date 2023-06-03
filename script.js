const DESCRIPCION_SOBREPESO = "Una mala alimentación y hábitos sedentarios pueden contribuir a acumular grasa en tu cuerpo, lo que puede llevar a problemas médicos en el futuro."
const DESCRIPCION_SALUDABLE = "El equilibrio del organismo -su homeostasis- se obtiene con mayor facilidad si el peso de una persona es normal. Una dieta balanceada y ejercicio ayudan a mantenerse en esta categoría."
const DESCRIPCION_BAJO_PESO = "La delgadez puede deberse a diversos factores, tales como genéticos y dietéticos. Independiente de su causa, es importante para tu bienestar mantener un peso saludable."
const DESCRIPCION_OBESIDAD = "Cuidado, la obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía."

const PESO_TEXT = document.getElementById("input-peso-text");
const PESO_RANGE = document.getElementById("input-peso-range");
const ALTURA_TEXT = document.getElementById("input-altura-text");
const ALTURA_RANGE = document.getElementById("input-altura-range");
const RESULTADO = document.getElementById("resultado-imc");
const FLECHA_BAJO_PESO = document.getElementById("flecha-bajo-peso");
const FLECHA_SALUDABLE = document.getElementById("flecha-saludable");
const FLECHA_SOBREPESO = document.getElementById("flecha-sobrepeso");
const FLECHA_OBESIDAD = document.getElementById("flecha-obesidad");
const PARAGRAPH_DESCRIPCION = document.getElementById("descipcion-resultado");

function displayResultado() {
  // Cálculo del IMC
  let peso = parseFloat(PESO_TEXT.value);
  let alturaEnCentimetros = parseFloat(ALTURA_TEXT.value);
  let alturaEnMetros = alturaEnCentimetros / 100;
  let imc = (peso / (alturaEnMetros * alturaEnMetros)).toFixed(2);

  // Mostrat IMC
  RESULTADO.innerText = `Tu IMC: ${imc}`;
  if (imc < 18.5) {
    FLECHA_BAJO_PESO.classList.add("visible")
    PARAGRAPH_DESCRIPCION.textContent = DESCRIPCION_BAJO_PESO;
  } else if (imc >= 18.5 && imc < 25) {
    FLECHA_SALUDABLE.classList.add("visible")
    PARAGRAPH_DESCRIPCION.textContent = DESCRIPCION_SALUDABLE;
  } else if (imc >= 25 && imc < 30) {
    FLECHA_SOBREPESO.classList.add("visible")
    PARAGRAPH_DESCRIPCION.textContent = DESCRIPCION_SOBREPESO;
  } else if (imc >= 30) {
    FLECHA_OBESIDAD.classList.add("visible")
    PARAGRAPH_DESCRIPCION.textContent = DESCRIPCION_OBESIDAD;
  }

  document.querySelector(".calculadora-imc").classList.toggle("hidden") // Ocultar Panel Calculadora
  document.querySelector(".resultado").classList.toggle("hidden") // Mostrar Panel Resultado
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