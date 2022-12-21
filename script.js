var cotacaoWu = document.getElementById("cotacaoWu");
var real = document.getElementById("real");
var peso = document.getElementById("peso");
var calculo = document.getElementById("calcular");
var valoresFinais = document.getElementsByClassName("valores-finais");


real.addEventListener('input', calcularPeso);
peso.addEventListener('input',calcularReal);

calculo.addEventListener('click', calculoTotal)

function calcularPeso() {
    
    let resultado =  real.value * cotacaoWu.value;
    peso.value = resultado.toFixed(2)
    
}

function calcularReal() {
    
    let resultado =  peso.value / cotacaoWu.value;
    real.value = resultado.toFixed(2)
    
}

function calculoTotal() {

    var realF = parseInt(real.value)

    valoresFinais[0].innerHTML = "R$" + real.value;
    valoresFinais[1].innerHTML = "$" + peso.value;

    var taxaWu = 0

    if (realF <= 250) {
        taxaWu = 9.9;
        valoresFinais[2].innerHTML = "R$" + taxaWu 
    }else if (realF <= 500) {
        taxaWu = 20;
        valoresFinais[2].innerHTML = "R$" + taxaWu 
    } else if (realF <= 1500){
        taxaWu = 30
        valoresFinais[2].innerHTML = "R$" + taxaWu 
    } else if (realF <= 2000) {
        taxaWu = 50
        valoresFinais[2].innerHTML = "R$" + taxaWu 
    } else if (realF > 5000) {
        taxaWu = 75
        valoresFinais[2].innerHTML = "R$" + taxaWu 
    }

    let iof = (realF / 100)*1.1
    valoresFinais[3].innerHTML = "R$" + iof.toFixed(2)
    
    let totalTransferencia = realF + taxaWu + iof;

    let cotacaoFinal = peso.value / totalTransferencia
    valoresFinais[4].innerHTML = "$" + cotacaoFinal.toFixed(3);

    valoresFinais[5].innerHTML = "R$" + totalTransferencia

}