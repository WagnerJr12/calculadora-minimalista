let tela = document.querySelector(".tela");
let algarismo = "";
let primeiroAlgarismo = "";
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
        primeiroAlgarismo = "";
        resultado = 0;
    } else if (caractere === "←") {
        algarismo = algarismo.slice(0, -1);
        if (algarismo === ""){
            tela.innerHTML = 0;
        } else {
            tela.innerHTML = algarismo;
        }
    } else if (caractere === "=") {
        resultado = calcula(parseInt(primeiroAlgarismo), parseInt(algarismo), simbolo);
        algarismo = resultado.toString();
        tela.innerHTML = parseInt(resultado);
        primeiroAlgarismo = "";
    } else { 
        //simbolos da operação
        if (primeiroAlgarismo === "") {
            primeiroAlgarismo = algarismo;
            simbolo = caractere;
            tela.innerHTML = caractere;
            algarismo = "";
        }
        else {
            resultado = calcula(parseInt(primeiroAlgarismo), parseInt(algarismo), simbolo);
            primeiroAlgarismo = resultado;
            simbolo = caractere;
            tela.innerHTML = caractere;
            algarismo = "";
        }
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

    return calculo;
}
