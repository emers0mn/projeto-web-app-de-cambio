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

    valoresFinais[0].innerHTML = "R$" + (peso.value / cotacaoWu.value).toFixed(2);
    valoresFinais[1].innerHTML = "$" + (real.value * cotacaoWu.value).toFixed(2);

    valoresFinais[2].innerHTML = "$" + cotacaoWu.value

    let iof = (real.value / 100)*1.1
    valoresFinais[3].innerHTML = "$" + iof.toFixed(2)

    
    if (real.value <= 250) {
        var taxaWu = 9.9; 
    }else if (real.value <= 500) {
        var taxaWu = 20;
    } else {
        console.log(erro)
    }

    taxaWu = 9.9

    console.log(taxaWu)
    
    let totalTransferencia = (real.value + taxaWu + iof);

    let cotacaoFinal = peso.value / totalTransferencia
    valoresFinais[4].innerHTML = "$" + cotacaoFinal.toFixed(3);

    
}