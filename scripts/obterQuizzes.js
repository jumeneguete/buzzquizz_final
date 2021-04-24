receberQuizzes();
let quizSelecionado;

function receberQuizzes(){ 
    var requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes');
    requisicao.then(guardarQuizzes);
}
function guardarQuizzes(resposta){
    //console.log(resposta.data);
    todososquizzes = resposta.data;
    renderizarQuizzes();
}
function renderizarQuizzes() {
    window.scrollTo(0, 0)
    var container = document.querySelector(".container-quizzes");
    container.innerHTML = "";

    for(var i = 0; i < todososquizzes.length; i++){
        container.innerHTML += `
        <div class="quizz" onclick="escolherQuizz(this)" id="${todososquizzes[i].id}">
            <img src=${todososquizzes[i].image}>
            <div class="nomeDoQuiz">${todososquizzes[i].title}</div>
        </div>
        `;
    }
} 

function escolherQuizz(selecionado){
    for(let i = 0; i <todososquizzes.length; i++) {
        if(todososquizzes[i].id == selecionado.id) {
            quizSelecionado = todososquizzes[i];
        }
    }
    
renderizarQuizz (quizSelecionado);
carregarPaginaDoQuizzSelecionado();
}

function carregarPaginaDoQuizzSelecionado(){
    const paginainicial = document.querySelector(".pagina-listagem-de-quizzes");
    paginainicial.classList.add("escondido");
}

function carregarPaginaCriarQuizz(){ 
    const paginainicial = document.querySelector(".pagina-listagem-de-quizzes");
    paginainicial.classList.add("escondido"); 

    const paginacriarquizz = document.querySelector(".formulario-tela-inicio");
    paginacriarquizz.classList.remove("escondido");
};