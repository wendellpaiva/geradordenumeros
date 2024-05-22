let saida = document.getElementById("resultado");
let x = Math.floor((Math.random() * 100 ) + 1);  

function gerar() {
    let x = Math.floor((Math.random() * 100 ) + 1);
    resultado.innerHTML = `<p>Pensei agora no número : ${x}`;
}

function limpar() {
    resultado.innerHTML = null;     
}