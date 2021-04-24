let tituloQuizz = document.querySelector(".titulo-quizz").value;
let urlImgQuizz = document.querySelector(".url-img-quizz").value;
let qtddPerguntas;
let qtddNiveis;


const todosOsDados = {};

function validarTitulo (){
    tituloQuizz = document.querySelector(".titulo-quizz").value;

    if (tituloQuizz.length >= 20 && tituloQuizz.length<=65){
    } else {
        return false;
    }
}

function isValidURL(url) {
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  }

function validarQtddPerguntas (){
    qtddPerguntas = parseInt(document.querySelector(".qtdd-perguntas").value);
    
    if (qtddPerguntas>=3){
        return true;
    } else {
        return false;
    }
}

function validarQtddNiveis (){
    qtddNiveis = document.querySelector(".qtdd-niveis").value;
    
    if (qtddNiveis>=2){
        return true;
    } else {
        return false;
    }
}


function enviarDados(){
    urlImgQuizz = document.querySelector(".url-img-quizz").value;
   
    const titulo = validarTitulo ();
    const url = isValidURL(urlImgQuizz);
    const perguntas = validarQtddPerguntas ();
    const niveis = validarQtddNiveis();
    
      
    if (titulo !== false && url !== false && perguntas !== false && niveis !== false){
        mudarPaginaUm ();
        renderizarPerguntas ();
    } else {
        alert("Você preencheu algum campo errado!")
    }
}


//enviarDados();

function mudarPaginaUm (){
    const formularioTelaInicio = document.querySelector(".formulario-tela-inicio");
    formularioTelaInicio.classList.add("escondido");

    const formularioTelaPerguntas = document.querySelector(".formulario-tela-perguntas");
    formularioTelaPerguntas.classList.remove("escondido");
}

function renderizarPerguntas (){
    qtddPerguntas = parseInt(document.querySelector(".qtdd-perguntas").value);

    const caixaComTodasPerguntas = document.querySelector(".container-perguntas");
    caixaComTodasPerguntas.innerHTML = `
    <div onclick="toggleBotaoPergunta(this, 1)" class="botao-pergunta botao-pergunta1 escondido">
        <h2>Pergunta 1</h2>
        <ion-icon name="balloon-outline"></ion-icon>
    </div>

    <div class="bloco-edicao edicao-pergunta-1 editando-agora">
        <h2>Pergunta 1</h2>
        <div class="formulario">
            <input type="text" class="texto-pergunta1" placeholder="Texto da pergunta">
            <input type="text" class="cor-de-fundo-pergunta1" placeholder="Cor de fundo da pergunta">
        </div>

        <h2>Resposta correta</h2>
        <div class="formulario">
            <input type="text" class="resposta-correta" placeholder="Resposta correta">
            <input type="url" class="img-resposta-correta" placeholder="URL da imagem">
        </div>

        <h2>Respostas incorretas</h2>
        <div class="formulario formulario-incorretas">
            <input type="text" class="resposta-incorreta1" placeholder="Resposta incorreta 1">
            <input type="url" class="url-incorreta1" placeholder="URL da imagem 1">
        </div>

        <div class="formulario formulario-incorretas">
            <input type="text" class="resposta-incorreta2" placeholder="Resposta incorreta 2">
            <input type="url" class="url-incorreta2" placeholder="URL da imagem 2">
        </div>

        <div class="formulario formulario-incorretas">
            <input type="text" class="resposta-incorreta3" placeholder="Resposta incorreta 3">
            <input type="url" class="url-incorreta3" placeholder="URL da imagem 3">
        </div>
    </div>
    `;

    for (let i = 2; i < qtddPerguntas + 1; i++){
        caixaComTodasPerguntas.innerHTML += `
        <div onclick="toggleBotaoPergunta(this, ${i})" class="botao-pergunta botao-pergunta${i}">
                <h2>Pergunta ${i}</h2>
                <ion-icon name="balloon-outline"></ion-icon>
            </div>

            <div class="bloco-edicao edicao-pergunta-${i} escondido">
                <h2>Pergunta ${i}</h2>
                <div class="formulario">
                    <input type="text" class="texto-pergunta${i}" placeholder="Texto da pergunta">
                    <input type="text" class="cor-de-fundo-pergunta${i}" placeholder="Cor de fundo da pergunta">
                </div>

                <h2>Resposta correta</h2>
                <div class="formulario">
                    <input type="text" class="resposta-correta" placeholder="Resposta correta">
                    <input type="url" class="img-resposta-correta" placeholder="URL da imagem">
                </div>

                <h2>Respostas incorretas</h2>
                <div class="formulario formulario-incorretas">
                    <input type="text" class="resposta-incorreta1" placeholder="Resposta incorreta 1">
                    <input type="url" class="url-incorreta1" placeholder="URL da imagem 1">
                </div>

                <div class="formulario formulario-incorretas">
                    <input type="text" class="resposta-incorreta2" placeholder="Resposta incorreta 2">
                    <input type="url" class="url-incorreta2" placeholder="URL da imagem 2">
                </div>

                <div class="formulario formulario-incorretas">
                    <input type="text" class="resposta-incorreta3" placeholder="Resposta incorreta 3">
                    <input type="url" class="url-incorreta3" placeholder="URL da imagem 3">
                </div>
            </div>
    `}
}

function toggleBotaoPergunta (botaoPerguntaAtual, i){
    
    //i = numero da pergunta atual
    
    const edicaoDaPerguntaAnterior = document.querySelector(".bloco-edicao.editando-agora");
    edicaoDaPerguntaAnterior.classList.add("escondido");
    edicaoDaPerguntaAnterior.classList.remove("editando-agora");

    const botaoPerguntaAnterior = document.querySelector(".botao-pergunta.escondido");
    botaoPerguntaAnterior.classList.remove("escondido");

    botaoPerguntaAtual.classList.add("escondido");

    const edicaoDaPerguntaAtual = document.querySelector(`.edicao-pergunta-${i}`);
    edicaoDaPerguntaAtual.classList.remove("escondido");
    edicaoDaPerguntaAtual.classList.add("editando-agora");    
}

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

function enviarPerguntas(){

    const textoPergunta = validarTextoPergunta();
    const corPergunta = validarCorPergunta ();
    const UrlERespostaErrada = validarRespostasEUrlIncorretas();
    const urlImgCorreta = validarUrlImagemCorreta ();
    const respostaCorreta = validarRespostaCorreto ();

    if(textoPergunta !== false && corPergunta !== false && respostaCorreta !== false && urlImgCorreta !== false && UrlERespostaErrada !== false){
        mudarPaginaDois ();
        renderizarNiveis ();
    } else {
        alert("Você preencheu algum campo errado!")
    }

    publicar();

}

function validarTextoPergunta (){
    qtddPerguntas = parseInt(document.querySelector(".qtdd-perguntas").value);
    

    for (let i = 1; i<= qtddPerguntas; i++){

        const textoPergunta = document.querySelector(`.texto-pergunta${i}`).value;

        if (textoPergunta.length >= 20){
            return true;
        } else {
            return false;
        }
    }
}


function validarCorPergunta (){

    for (let i =1; i<= qtddPerguntas; i++){
        const corPergunta = document.querySelector(`.cor-de-fundo-pergunta${i}`).value;

        if (corPergunta.length !== 7){
            return false;
        }

        for (let j=0; j< corPergunta.length; j++) {

            if (corPergunta[0] !== "#"){
                return false;
            } else if (j !== 0 && (corPergunta[i] > 9 || corPergunta[i] !== "A" || corPergunta[i] !== "B" || corPergunta[i] !== "C" || corPergunta[i] !== "D" || corPergunta[i] !== "E" || corPergunta[i] !== "F")){
                return false;
            } else {
                return true;
            }
        }
    }
}

function validarRespostaCorreto (){

    for (let i = 1; i <= qtddPerguntas; i++){
        const respCorreta = document.querySelector(`.edicao-pergunta-${i} .resposta-correta`).value;
        if(respCorreta !== ""){
            return true;
        } else {
            return false;
        }
    }

}

function validarUrlImagemCorreta (){
    let retorno = true;
    for (let i = 1; i <= qtddPerguntas; i++){
        const urlRespCorreta = document.querySelector(`.edicao-pergunta-${i} .img-resposta-correta`).value
        let url = isValidURL(urlRespCorreta);

        if (url == false){
            return false;
        }
    }
    return retorno;
}

function validarRespostasEUrlIncorretas (){

    for (let i = 1; i <= qtddPerguntas; i++){
        let respostasPreenchidas = [];

        for(let j=1; j <= 3; j++){
            const respostaIncorreta = document.querySelector(`.edicao-pergunta-${i} .resposta-incorreta${j}`).value;
            const urlIncorreta = document.querySelector(`.edicao-pergunta-${i} .url-incorreta${j}`).value;
            let url = isValidURL(urlIncorreta);
            
            if (respostaIncorreta !== "" && url !== false){
                respostasPreenchidas.push(respostaIncorreta);
            } else if ((respostaIncorreta == "" && url !== false) || (respostaIncorreta !== "" && url == false) ){
                return false;
            }
        }        
        
        if (respostasPreenchidas.length == 0){
            return false;
        }
        
    }
}

function mudarPaginaDois (){
    const formularioTelaPerguntas = document.querySelector(".formulario-tela-perguntas");
    formularioTelaPerguntas.classList.add("escondido");

    const formularioTelaNiveis= document.querySelector(".formulario-tela-niveis");
    formularioTelaNiveis.classList.remove("escondido");
}

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

function renderizarNiveis (){

    qtddNiveis = parseInt(document.querySelector(".qtdd-niveis").value);

    const caixaComTodosOsNiveis = document.querySelector(".container-niveis");
    caixaComTodosOsNiveis.innerHTML =`
        <div onclick="toggleBotaoNivel(this, 1)" class="botao-nivel escondido">
            <h2>Nível 1</h2>
            <ion-icon name="balloon-outline"></ion-icon>
        </div>

        <div class="bloco-edicao edicao-nivel-1 editando-niveis-agora">
            <h2>Nível 1</h2>
            <div class="formulario">
                <input type="text" class ="titulo-nivel-1" placeholder="Título do nível" minlength="10">
                <input type="text" class ="porcentagem-nivel-1" placeholder="% de acerto mínima">
                <input type="url" class ="url-nivel-1" placeholder="URL da imagem do nível">
                <textarea class ="descricao-nivel-1" placeholder="Descrição do nível"></textarea>
            </div>
        </div>
    `;

    for (let i = 2; i < qtddNiveis + 1; i++){
        caixaComTodosOsNiveis.innerHTML += `
            <div onclick="toggleBotaoNivel(this, ${i})" class="botao-nivel">
                <h2>Nível ${i}</h2>
                <ion-icon name="balloon-outline"></ion-icon>
            </div>

            <div class="bloco-edicao edicao-nivel-${i} escondido">
                <h2>Nível ${i}</h2>
                <div class="formulario">
                    <input type="text" class ="titulo-nivel-${i}" placeholder="Título do nível" minlength="10">
                    <input type="text" class ="porcentagem-nivel-${i}" placeholder="% de acerto mínima">
                    <input type="url" class ="url-nivel-${i}" placeholder="URL da imagem do nível">
                    <textarea class ="descricao-nivel-${i}" placeholder="Descrição do nível"></textarea>
                </div>
            </div>
         `;}
}


function enviarNiveis(){
    const tituloNivel = validarTituloNivel();
    const urlNivel = validarUrlNivel();
    const descricaoNivel = validarDescricaoNivel ();
    const porcentagemAcerto  = ValidarPorcentagemNivel ();

    if(tituloNivel !== false &&  urlNivel !== false && descricaoNivel !== false && porcentagemAcerto !== false){
        mudarPaginaFinal ();
        renderizarPaginaFinal(); 
    } else {
        alert("Você preencheu algum campo errado!")
    }
}

function validarTituloNivel (){
    let retorno = true;
    
    for (let i = 1; i<= qtddNiveis; i++){

        const tituloNivel = document.querySelector(`.titulo-nivel-${i}`).value;

        if (tituloNivel.length >= 10){
            retono = true;
        } else {
            return false;
        }
    }
    return retorno;
}

function validarUrlNivel (){
    let retorno = true;
    for (let i = 1; i <= qtddNiveis; i++){
        const urlNivel = document.querySelector(`.edicao-nivel-${i} .url-nivel-${i}`).value
        let url = isValidURL(urlNivel);

        if (url == false){
            return false;
        }
    }
    return retorno;
}

function validarDescricaoNivel (){
    let retorno = true;
    
    for (let i = 1; i<= qtddNiveis; i++){

        const descricaoNivel = document.querySelector(`.edicao-nivel-${i} .descricao-nivel-${i}`).value;

        if (descricaoNivel.length >= 10){
            retono = true;
        } else {
            return false;
        }
    }
    return retorno;
}

function ValidarPorcentagemNivel (){
    let niveis =[];

    for (let i = 1; i<= qtddNiveis; i++){
        const porcentagemNivel = parseInt(document.querySelector(`.edicao-nivel-${i} .porcentagem-nivel-${i}`).value);

        if (porcentagemNivel >= 0 || porcentagemNivel <=100){
            niveis.push(porcentagemNivel);
        } else {
            return false;
        }
    }   

    let soma = 0;
    for (let x = 0; x< niveis.length; x++){
        soma += niveis[x];
    }
    
    let niveisZero = [];

    for (let j = 0; j< niveis.length; j++){
        if (niveis[j] === 0){
            niveisZero.push(niveis[j]);
        }
    }    

      if (niveisZero.length == 1 && soma===100){
        return true;
    } else {
        return false;
    }
}


function toggleBotaoNivel (botaoNivelAtual, i){
    
    //i = numero do nivel atual
    
    const edicaoDoNivelAnterior = document.querySelector(".bloco-edicao.editando-niveis-agora");
    edicaoDoNivelAnterior.classList.add("escondido");
    edicaoDoNivelAnterior.classList.remove("editando-niveis-agora");

    const botaoNivelAnterior = document.querySelector(".botao-nivel.escondido");
    botaoNivelAnterior.classList.remove("escondido");

    botaoNivelAtual.classList.add("escondido");

    const edicaoDoNivelAtual = document.querySelector(`.edicao-nivel-${i}`);
    edicaoDoNivelAtual.classList.remove("escondido");
    edicaoDoNivelAtual.classList.add("editando-niveis-agora");    
}

function mudarPaginaFinal (){
    const formularioTelaNiveis = document.querySelector(".formulario-tela-niveis");
    formularioTelaNiveis.classList.add("escondido");

    const formularioTelaFinal= document.querySelector(".formulario-tela-final");
    formularioTelaFinal.classList.remove("escondido");
}

function renderizarPaginaFinal(){
 
    const imgTituloQuizz = document.querySelector(".formulario-tela-final .capa-do-quizz");
    imgTituloQuizz.innerHTML = `
    <img src="${urlImgQuizz}" alt="capa do quizz">
    <p class="titulo-do-quizz">${tituloQuizz}</p>
    `;
}

// remover .escondido HTML <div class=" pagina-formulario formulario-tela-inicio escondido"> para começar a mexer no formulario

