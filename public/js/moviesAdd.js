window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let colors = ["red", "blue", "green", "pink", "purple"];

    let color = 0

    titulo.addEventListener("mouseover", () => {
        titulo.style.color = colors[color];
        color++;
        color > 4 ? color = 0 : null;
    })


    let estadoSecreto = 0
    let inputTitulo = document.getElementById("titulo");

    inputTitulo.addEventListener("keypress", (e) => {
        console.log(e.key)
        if (e.key == "s") {
            estadoSecreto++
        }else if(estadoSecreto == 1 && e.key == "e"){
            estadoSecreto++
        }else if(estadoSecreto == 2 && e.key == "c"){
            estadoSecreto++
        }else if(estadoSecreto == 3 && e.key == "r"){
            estadoSecreto++
        }else if(estadoSecreto == 4 && e.key == "e"){
            estadoSecreto++
        }else if(estadoSecreto == 5 && e.key == "t"){
            estadoSecreto++
        }else if(estadoSecreto == 6 && e.key == "o"){
            estadoSecreto = 0;
            alert("SECREO MAGICO");
        }else{
            estadoSecreto = 0
        }
        console.log(estadoSecreto)
    })
}