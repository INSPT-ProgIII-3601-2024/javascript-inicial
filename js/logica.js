const laBotonera = document.getElementById("botonera");


[...Array(10)].forEach((_, i) => {
    const boton = document.createElement("button");
    boton.innerHTML = i;
    laBotonera.appendChild(boton);
});

["Rojo", "Verde", "Azul"].forEach( (elem, i, array) => {
    console.log(elem, i, array);
} )
