class Display {
    constructor(displayActual, displayAnterior) {
        this.displayActual = displayActual;
        this.displayAnterior = displayAnterior;
        this.calculador = new Calculadora();
        this.valorActual = "";
        this.valorAnterior = "";
    }
    agregarNumero(numero){
        this.numeroActual = numero
    }
}

