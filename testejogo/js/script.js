document.addEventListener("DOMContentLoaded", function() {
    const caixas = document.querySelectorAll(".caixa");
    const botaoConfirmar = document.querySelector("#btn-confirma");
    const caixaCorreta = "caixa3"; 
    let caixaSelecionada = null;

    caixas.forEach(caixa => {
        caixa.addEventListener("click", function() {
            if (caixaSelecionada) {
                caixaSelecionada.classList.remove("box-selecionado");
            }
            caixaSelecionada = this;
            this.classList.add("box-selecionado");
        });
    });

    botaoConfirmar.addEventListener("click", function() {
        if (!caixaSelecionada) {
            alert("Por favor, selecione um quadrado.");
            return;
        }
        const mensagem = caixaSelecionada.id === caixaCorreta ? 
            "Parabéns! Você acertou a imagem correta." : 
            "Tente novamente! Você escolheu a imagem errada.";
        alert(mensagem);
    });
});
