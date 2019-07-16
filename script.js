let quadradinhos = document.querySelectorAll("div")

function MudarCor(event){
     event.target.style.backgroundColor = ("")
    event.target.classList.toggle("");
}

for(let quadradinho of quadradinhos){
    quadradinho.onclick = MudarCor;
}

if(event.classList.contains()){
    classList.remove("");
}
else{
    classList.add("");
}


// Criar lista para as cores
// usar os veteros