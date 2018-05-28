var divs = [];
var divsClasseUm = [];
var divsClasseDois = [];
var divsClasseTres = [];

var cliquouUm = false;
var cliquouDois = false;
var cliquouTres = false;

var resposta;
var listaResposta = [];

iniciarComponenetes();
carregarListas();
addEvento(divsClasseUm);
addEvento(divsClasseDois);
addEvento(divsClasseTres);

function iniciarComponenetes(){
    let botao = document.getElementById("reiniciar");
    botao.addEventListener("click", limparTela );
    
    botao = document.getElementById("resposta");
    botao.addEventListener("click", calcularResposta );
}

function limparTela(){
    location.reload();
}

function calcularResposta(){
    if( cliquouUm === true && cliquouDois === true && cliquouTres === true ){
        for (let i = 0; i < listaResposta.length; i++) {
            listaResposta[i] = listaResposta[i].substring(0,4);
        }
        if( listaResposta[0] === listaResposta[1] || listaResposta[0] === listaResposta[2]){
            resposta = listaResposta[0];
        }else if( listaResposta[1] === listaResposta[2] ){
            resposta = listaResposta[1];
        }else{
            resposta = listaResposta[0];
        }
        
        document.getElementById("titulo").textContent =  RESULTS_MAP[resposta].title + ": ";
        document.getElementById("resultado").textContent = RESULTS_MAP[resposta].contents;
    }else{
        alert("Selecione os três tipos para poder ver a resposta !!");
    }
}

function addEvento(lista){
    for( let i = 0; i < lista.length; i++ ){
        lista[i].addEventListener("click", function (){
            for (let j = 0; j < lista.length; j++) {
                lista[j].querySelector("img.checkbox").src = "imagens/unchecked.png";
                lista[j].querySelector("img.checkbox").style.background = "#f4f4f4";
                lista[j].querySelector("img.checkbox").style.opacity = "0.6";
            }

            lista[i].querySelector("img.checkbox").src = "imagens/checked.png";
            lista[i].querySelector("img.checkbox").style.background = "#cfe3ff";
            lista[i].querySelector("img.checkbox").style.opacity = "1";

            verificarClique(
                lista[i].getAttribute("data-question-id"),
                lista[i].getAttribute("data-choice-id")
            );
        } );
    }
}

function verificarClique(classe, escolha){
    if( classe === "um" ){
        cliquouUm = true;
        listaResposta[0] = escolha;
    }else if( classe === "dois"){
        cliquouDois = true;
        listaResposta[1] = escolha;
    }else if( classe === "tres" ){
        cliquouTres = true;
        listaResposta[2] = escolha;
    }
    if (cliquouUm === true && cliquouDois === true && cliquouTres === true) {
        bloquearElementos();
    }
}

function bloquearElementos(){
    for(let i = 0; i < divs.length; i++){
        let clone = divs[i].cloneNode(true);
        divs[i].parentNode.replaceChild(clone, divs[i] );
    }
}

function carregarListas(){
    divs = document.querySelectorAll("div");
    let aux;
    for( let i = 1; i < divs.length; i++){
        aux = divs[i].getAttribute("data-question-id");
        if( aux === "um" ){
           divsClasseUm = divsClasseUm.concat( [divs[i]] );
        }else if( aux === "dois" ){
            divsClasseDois = divsClasseDois.concat( [divs[i]] );
        }else if( aux === "tres" ){
            divsClasseTres = divsClasseTres.concat( [divs[i]] );
        }
    }
}