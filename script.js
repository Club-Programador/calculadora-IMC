iniciar()

const wInput = document.getElementById("txtPeso");
const wRange = document.getElementById("range-Peso");
const hInput = document.getElementById("txtAltura");
const hRange = document.getElementById("range-Altura");
const p = document.querySelector("#resultOp");

wRange.addEventListener("input", () => {
  wInput.value = wRange.value;
});
wInput.addEventListener("input", () => {
  wRange.value = wInput.value;
});
hRange.addEventListener("input", () => {
  hInput.value = hRange.value;
});
hInput.addEventListener("input", () => {
  hRange.value = hInput.value;
});

function operacion() {
  // Cálculo del IMC
  var txtPeso = document.getElementById("txtPeso");
  var peso = parseFloat(txtPeso.value);
  var txtAltura = document.getElementById("txtAltura");
  var altura = parseFloat(txtAltura.value);
  var imc = peso / (altura * altura);
  p.innerText = "Su Indice de Masa Corporal es: " + imc.toFixed(2);

  // Mostrar la imagen
  var imgMostrar = document.getElementById("imgMostrar");
  imgMostrar.src =
    "https://www.doctorjosevicenteferrer.com/wp-content/uploads/2013/10/tabla-IMC-624x411.png";

  // Mostrar el div que contiene la image
  var divImagen = document.getElementById("imagen");
  divImagen.style.display = "block";
}

function iniciar() {
  // Ocultar la imagen al cargar la página
  var divImagen = document.getElementById("imagen");
  divImagen.style.display = "none";

  

  // Asignar el evento click al botón de calcular
  var btnCalcular = document.querySelector("#btnCalcular");
  btnCalcular.type = "button"; // Cambiar el tipo del botón
  btnCalcular.addEventListener("click", function(event) {
    event.preventDefault(); // Cancelar la acción predeterminada
    operacion();
  });
}

