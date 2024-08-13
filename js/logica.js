const laBotonera = document.getElementById("botonera");
const elVisor = document.getElementById("visor");

function getRandomRgbColor() {
    const getRandomValue = () => Math.floor(Math.random() * 256);
    const red = getRandomValue();
    const green = getRandomValue();
    const blue = getRandomValue();
    return `rgb(${red}, ${green}, ${blue})`;
}

const cambiarColor = (evt) => {
    evt.target.style.backgroundColor = getRandomRgbColor();
}

const procesarTecla = (evt) => {
    let codigo = evt.key;
    if (codigo >= 0 && codigo <= 9) { // Es un digito
        elVisor.innerHTML += codigo;
    }
    
}

const copiarNumeroAVisor = (evt) => {
    elVisor.innerHTML += evt.target.innerHTML;
}

document.onkeyup = procesarTecla;
[...Array(10)].forEach((_, i) => {
    const boton = document.createElement("button");
    boton.innerHTML = i;
    boton.onmouseover = cambiarColor;
    boton.onmouseleave = cambiarColor;
    boton.onclick = copiarNumeroAVisor;
    laBotonera.appendChild(boton);
});


