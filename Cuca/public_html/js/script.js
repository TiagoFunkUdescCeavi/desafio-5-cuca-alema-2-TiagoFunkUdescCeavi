var divs = [];
var divsClasseUm = [];
var divsClasseDois = [];
var divsClasseTres = [];

var cliquouUm = false;
var cliquouDois = false;
var cliquouTres = false;

carregarListas();
addEvento(divsClasseUm);
addEvento(divsClasseDois);
addEvento(divsClasseTres);

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

            verificarClique(lista[i].getAttribute("data-question-id"));
        } );
    }
}

function verificarClique(aux){
    if( aux === "um" ){
        cliquouUm = true;
    }else if( aux === "dois"){
        cliquouDois = true;
    }else if( aux === "tres" ){
        cliquouTres = true;
    }
    console.log(aux);
    console.log( cliquouUm   );
    console.log( cliquouDois );
    console.log( cliquouTres );
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