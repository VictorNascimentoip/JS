
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const resultado = document.getElementById("resultado");
const calcular = document.getElementById("calcular");
const limpar = document.getElementById("limpar");

// Determina os aprovados para segunda fase de um processo seletivo.
function primeiraetapa(acertoProva, semCursado) {

    const NumQuestoes = 20;
    const notaMinAprovada = 0.7;
    const qtdeSemestre = 3;

    //Calcula a % da nota
    let nota = acertoProva / NumQuestoes;
    console.log(nota);

    //Verifica se aprovado
    if ((nota >= notaMinAprovada) || (semCursado >= qtdeSemestre)) {
        return "Aprovado";
    }
    else{
        return "Reprovado";
    }
}

calcular.addEventListener("click", () => {

    const acertoProva = Number(nota1.value);
    const semCursado = Number(nota2.value);

    resultado.value = primeiraetapa(acertoProva, semCursado);
    // alert = (primeiraetapa(acertoProva, semCursado));
})

limpar.addEventListener("click", () => {
    nota1.value = "";
    nota2.value = "";
    resultado.value = "";
})

//Teste da função
// alert = (primeiraetapa(15, 3));
// console.log(primeiraetapa(15, 2));