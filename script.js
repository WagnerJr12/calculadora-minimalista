let valorTela = document.querySelector(".tela");

botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        const textoBotao = e.target.textContent
        console.log(textoBotao)
    })
})
//valorTela.innerHTML = 10 + 5