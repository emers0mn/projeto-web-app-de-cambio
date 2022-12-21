var cotacaoWu = document.getElementById("cotacaoWu");
var real = document.getElementById("real");
var peso = document.getElementById("peso");
var calculo = document.getElementById("calcular");

real.addEventListener('input', calcularPeso);
peso.addEventListener('input',calcularReal);

function calcularPeso() {
    
    let resultado =  real.value * cotacaoWu.value;
    peso.value = resultado.toFixed(2)
    return console.log(resultado)
}

function calcularReal() {
    
    let resultado =  peso.value / cotacaoWu.value;
    real.value = resultado.toFixed(2)
    return console.log(resultado)
}