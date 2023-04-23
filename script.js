window.onload = iniciar;

const wInput = document.getElementById('txtPeso');
const wRange = document.getElementById('range-Peso');
const hInput = document.getElementById('txtAltura');
const hRange = document.getElementById('range-Altura');


wRange.addEventListener('input', () => {
    wInput.value = wRange.value;
});
wInput.addEventListener('input', () => {
    wRange.value = wInput.value;
});
hRange.addEventListener('input', () => {
    hInput.value = hRange.value;
});
hInput.addEventListener('input', () => {
    hRange.value = hInput.value;
});





function iniciar() {
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular() {
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;
    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;

    var imc = peso / (altura * altura)

    document.write("Su Indice de Masa Corporal es: " + imc)
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write('<p ><img src="https://www.doctorjosevicenteferrer.com/wp-content/uploads/2013/10/tabla-IMC-624x411.png" alt="" class="center"></p')





}