// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector ("#titulo");
    let saludo = document.querySelector("#saludo") ;
    let span = document.querySelector ("span") ;
    let bienvenida = document.querySelector (".bienvenida");
    let personajes = document.querySelector (".personajes");

    titulo.addEventListener("mouseover", function (){
        let nombre = prompt("COMO TE LLAMAS?")
        console.log(nombre);
        if (nombre) {
            saludo.innerHTML = `BIENVENID@ ${nombre}`
        } else {
            saludo.innerHTML = "BIENVENID@"
        }
        saludo.style.textTransform = "uppercase"
        titulo.style.display = "none" 
        span.style.display = "inline"  
    })

    span.addEventListener("click", function(){
        bienvenida.style.display = "none"
        personajes.style.display = "flex"
    })

    let bart = document.querySelector ("#bart");
    let lisa = document.querySelector ("#lisa");
    let homero = document.querySelector ("#homero");
    let marge = document.querySelector ("#marge");
    let maggie = document.querySelector ("#maggie");
    let milhouse = document.querySelector ("#milhouse");
    let burns = document.querySelector ("#burns");
    let bobPatinio = document.querySelector ("#bobPatinio");
    let flanders = document.querySelector ("#flanders");
    let duffman = document.querySelector ("#duffman");
    let gorgory = document.querySelector ("#gorgory");
    let nelson = document.querySelector ("#nelson");

    bart.addEventListener ("click", function(){})
    
 
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    let boton  ;
 
 
 }) 