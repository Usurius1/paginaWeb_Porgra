const arregloDeBotones = document.querySelectorAll("button");
const numeroHtml = document.querySelector(".flex>h2");

let numeroReal = 0;
numeroHtml.innerText = numeroReal;


function Sumar (sumador){
    numeroReal += sumador;
    numeroHtml.innerText = numeroReal;

}



arregloDeBotones.forEach((boton)=> {
    boton.addEventListener('click',(evento) => {
        let numero = Number (evento.target.innerText);
        Sumar(numero);
            // console.log(numero);
    })
})