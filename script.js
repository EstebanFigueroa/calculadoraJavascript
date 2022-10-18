const displayAnterior = document.getElementById("valor-anterior");
const displayActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

const display = new Display(displayAnterior, displayActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton=>{
    boton.addEventListener("click", ()=> display.computar(boton.value))
})


 