// 1- Math.floor
// 2- Math.ceil
// 3- Math.round

function configurar() {
    let confirmarBtn = document.getElementById('confirmarBtn')
    if(confirmarBtn instanceof HTMLButtonElement){
        confirmarBtn.addEventListener('click', () =>{
            verificarNum();
        })
    }
}

function verificarNum() {
    let numInput = document.getElementById('numInput')
    if(numInput instanceof HTMLInputElement) {
        let num1 = Math.floor(parseFloat(numInput.value));
        let num2 = Math.ceil(parseFloat(numInput.value));
        let num3 = Math.round(parseFloat(numInput.value));
        saida(num1, num2, num3);
    }
}

function saida(texto1, texto2, texto3) {
    let saida1 = document.getElementById('saida1')
    if(saida1 instanceof HTMLParagraphElement){
        saida1.textContent = String(texto1,);
    }
    let saida2 = document.getElementById('saida2')
    if(saida2 instanceof HTMLParagraphElement){
        saida2.textContent = String(texto2);
    }
    let saida3 = document.getElementById('saida3')
    if(saida3 instanceof HTMLParagraphElement){
        saida3.textContent = String(texto3);
    }
}

document.addEventListener('DOMContentLoaded', configurar);


