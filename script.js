let tela = document.querySelector(".tela");
let algarismo = "";
let primeiroAlgarismo = 0;
let resultado = 0;
let simbolo = "";

botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        const textoBotao = e.target.textContent;
        inserirNaTela(textoBotao);
    })
})


function inserirNaTela (caractere) {
    if (caractere >= 0 && caractere <= 9){
        algarismo = algarismo + caractere;
        tela.innerHTML = algarismo;
    } else if (caractere === "C") {
        algarismo = "";
        tela.innerHTML = 0;
    } else if (caractere === "←") {
        algarismo = algarismo.slice(0, -1);
        if (algarismo === ""){
            tela.innerHTML = 0;
        } else {
            tela.innerHTML = algarismo;
        }
    } else if (caractere === "÷" || caractere === "×" || caractere === "-" || caractere === "+") {
        primeiroAlgarismo = parseInt(algarismo);
        simbolo = caractere;
        tela.innerHTML = caractere;
        algarismo = "";
    } else if (caractere === "=") {
        resultado = calcula(primeiroAlgarismo, parseInt(algarismo), simbolo);
        tela.innerHTML = resultado.toFixed(2);
    }
}

function calcula (valorUm, valorDois, operador) {
    let calculo = 0;
    if (operador === "÷") {
        calculo = valorUm / valorDois;
    } else if (operador === "×") {
        calculo = valorUm * valorDois;
    } else if (operador === "-") {
        calculo = valorUm - valorDois;
    } else if (operador === "+") {
        calculo = valorUm + valorDois;
    }
    console.log(calculo)
    return calculo;
}
