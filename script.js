



let quadradinhos = document.querySelectorAll("div")

function MudarCor(event){
    event.target.style.backgroundColor = "yellow";
}
for( let quadradinho of quadradinhos){
    quadradinho.onclick = MudarCor;
}