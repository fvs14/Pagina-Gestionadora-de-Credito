var varboton =document.querySelector(".show-more");
var varcontent = document.getElementById("content");

varboton.addEventListener("click",ocultar);

function ocultar (){
    if(varcontent.className =="open"){   
        varcontent.className ="";
        varboton.innerHTML ="Mostrar Preguntas Frecuentes";
        varboton.style.background="rgb(23, 33, 90);";
    } else {
        varcontent.className ="open";
        varboton.innerHTML ="Preguntas Frecuentes";
        
    }
}