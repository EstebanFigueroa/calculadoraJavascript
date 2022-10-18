class Display {
    constructor(displayAnterior, displayActual) {
        this.displayActual = displayActual;
        this.displayAnterior = displayAnterior;
        this.calculador = new Calculadora();
        this.valorActual = "";
        this.valorAnterior = "";
    }
    agregarNumero(numero){
        this.valorActual = numero;
        this.imprimirValores();
    }
    imprimirValores(){        
        this.displayActual.textContent = this.valorActual;
        this.displayAnterior.textContent = this.valorAnterior;
       
    }
    
}


