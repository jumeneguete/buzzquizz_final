function publicar (){
    //pagar o titulo
    //pegar a url
    var perguntas = montarPerguntas();
    console.log(perguntas);
}

function montarPerguntas(){
    var elementos = document.querySelector(".container-perguntas");
    //pegar todas as caixinhas de pergunta

    var perguntas = [];

    for(var i = 0; i < elementos.length; i++){  //pra cada elemento desse quero gerar um objeto
        var pergunta = montarEstruturaPergunta(elementos[i]);
        perguntas.push(pergunta);
    }
        return perguntas;
}

function montarEstruturaPergunta(elemento){
    return{
                title: elemento.querySelector(".texto-pergunta").value,
                color: elemento.querySelector(".cor-de-fundo-pergunta").value,
                answers: [
                    {
                        text: elemento.querySelector(".resposta-correta").value,
                        image: elemento.querySelector(".img-resposta-correta").value,
                        isCorrectAnswer: true
                    },
                    {
                        text: elemento.querySelector(".resposta-incorreta1").value,
                        image: elemento.querySelector(".url-incorreta1").value,
                        isCorrectAnswer: false
                    },
                    {
                        text: elemento.querySelector(".resposta-incorreta2").value,
                        image: elemento.querySelector(".url-incorreta2").value,
                        isCorrectAnswer: false
                    },
                    {
                        text: elemento.querySelector(".resposta-incorreta3").value,
                        image: elemento.querySelector(".url-incorreta3").value,
                        isCorrectAnswer: false
                    }
                ]
            } 
    };

//questions: [
		//{
			//title: "Título da pergunta 1",
			//color: "#123456",
			//answers: [
				//{
					//text: "Texto da resposta 1",
					//image: "https://http.cat/411.jpg",
					//isCorrectAnswer: true
				//},
				//{
					//text: "Texto da resposta 2",
					//image: "https://http.cat/412.jpg",
					//isCorrectAnswer: false
				//}
			//]









//FORMATO PARA ENVIAR PARA O SERVIDOR
//UMA ARRAY DE OBJETOS!!!!!
//{
	//title: "Título do quizz",       vão fora
	//image: "https://http.cat/411.jpg",
	//questions: [
		//{
			//title: "Título da pergunta 1",
			//color: "#123456",
			//answers: [
				//{
					//text: "Texto da resposta 1",
					//image: "https://http.cat/411.jpg",
					//isCorrectAnswer: true
				//},
				//{
					//text: "Texto da resposta 2",
					//image: "https://http.cat/412.jpg",
					//isCorrectAnswer: false
				//}
			//]
		//},