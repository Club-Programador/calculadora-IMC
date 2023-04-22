window.onload = iniciar;

function iniciar() {
   var btnCalcular=  document.getElementById("btnCalcular");
   btnCalcular.addEventListener("click",clickBtnCalcular);
}

function clickBtnCalcular() {
    var txtPeso=  document.getElementById("txtPeso");
    var peso =txtPeso.value;
    var txtAltura=  document.getElementById("txtAltura");
    var altura= txtAltura.value;

    var imc=peso/(altura*altura)

    document.write("Su Indice de Masa Corporal es: "+ imc)
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write('<p ><img src="https://www.doctorjosevicenteferrer.com/wp-content/uploads/2013/10/tabla-IMC-624x411.png" alt="" class="center"></p')
    

    


}