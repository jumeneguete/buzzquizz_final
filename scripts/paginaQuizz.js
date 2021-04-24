let imagemCapa = document.querySelector(".imagem-capa")
let perguntas = document.querySelector(".perguntas");
let armazenarPerguntas = "";
let armazenarAlternativas = [];
let contadorPontos = 0;


function renderizarQuizz (quizSelecionado) {
    window.scrollTo(0, 0)

    imagemCapa.innerHTML =
        `<img src="${quizSelecionado.image}" alt="imagem de capa do quizz">
        <h1>${quizSelecionado.title}</h1>`

    for (i=0 ; i<quizSelecionado.questions.length ; i++) {

        for (j=0 ; j<quizSelecionado.questions[i].answers.length ; j++) {
            armazenarAlternativas.push(`<div id="${quizSelecionado.questions[i].answers[j].isCorrectAnswer}" class="alternativa" onclick="verificarAlternativa(this)">
                <img src="${quizSelecionado.questions[i].answers[j].image}" alt="">
                <h2>${quizSelecionado.questions[i].answers[j].text}</h2>
            </div>`)
        }
        armazenarAlternativas.sort(comparador);
        armazenarPerguntas +=`<div class="pergunta">
                <div class="caixa-pergunta">
                    <h1>${quizSelecionado.questions[i].title}</h1>
                </div>
                <div class="alternativas">
                ${armazenarAlternativas}
                </div>
            </div>`
        armazenarAlternativas = [];
    }
    perguntas.innerHTML = armazenarPerguntas;
    //console.log(quizSelecionado)
}

let arrPerguntas = [];
arrPerguntas = perguntas.children;


function verificarAlternativa (opçãoClicada) {

    let alternativa = document.querySelector(".alternativa");
    let arrAlternativas = [];
    
    arrAlternativas = opçãoClicada.parentNode.children;
    
        for (i=0 ; i<arrAlternativas.length ; i++) {

            arrAlternativas[i].classList.add("apagado");

            arrAlternativas[i].setAttribute("onclick", "");

            if(arrAlternativas[i].id === "true") {
                arrAlternativas[i].classList.add("verde");
                contadorPontos += 1
            } 
            else if(arrAlternativas[i].id === "false") {
                arrAlternativas[i].classList.add("vermelho");
            }
        }

    opçãoClicada.classList.remove("apagado");


    let alternativas = opçãoClicada.parentNode;

    alternativas.parentNode.classList.add("perguntaSelecionada");

    let perguntasSelecionada = document.querySelectorAll(".perguntaSelecionada");

    if(perguntasSelecionada.length === arrPerguntas.length){
        renderizarResultado ();
    }

    //console.log(arrPerguntas);
}


//setInterval (rolarPraPróximaPergunta, 2000);




//function rolarPraPróximaPergunta () {
//    let perguntaNaoSelecionada = document.querySelector(".perguntaNaoSelecionada");
//    perguntaNaoSelecionada.scrollIntoView()
//}

function comparador() { 
	return Math.random() - 0.5; 
}

function renderizarResultado () {
    let resultado = document.querySelector(".resultado");
    let nivelObtido = "";

    for (let i=1 ; i<quizSelecionado.levels.length ; i++) {
        if(contadorPontos < quizSelecionado.levels[i].minValue) {
            nivelObtido = quizSelecionado.levels[i-1];
        }
        else {
            nivelObtido = quizSelecionado.levels[i];
        }
    }

let porcentagem = (contadorPontos/arrPerguntas.length)*100;

    resultado.innerHTML = 
    `<div class="caixa-branca">
        <div class="caixa-vermelha">
            <h1>${porcentagem}% de acerto: ${nivelObtido.title}</h1>
        </div>
        <div class="foto-texto">
            <img src="${nivelObtido.image}">
            <h2>${nivelObtido.text}</h2>
        </div>
    </div>
    <div class="resetar-quizz">
        <button>Reiniciar quizz</button>
        <p onclick="recarregarPagina()">Voltar pra home</p>
    </div>
    `
}

function recarregarPagina () {
    window.location.reload()
}