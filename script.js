let tela = document.querySelector(".tela");
let algarismo = "";
let simbolo = "";
let calculo = 0;

botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        const textoBotao = e.target.textContent;
        inserirNaTela(textoBotao);
        //console.log(textoBotao);
    })
})


function inserirNaTela (caractere) {
    if (caractere >= 0 && caractere <= 9){
        algarismo = algarismo + caractere;
        calculo = algarismo;
        tela.innerHTML = algarismo;
    } else if (caractere === "C") {
        calculo = 0;
        algarismo = "";
        tela.innerHTML = calculo;
    } else if (caractere === "←") {
        algarismo = algarismo.slice(0, -1);
        if (algarismo === ""){
            tela.innerHTML = 0;
        } else {
            tela.innerHTML = algarismo;
        }
    }
}