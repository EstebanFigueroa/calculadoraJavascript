class Display {
    constructor(displayAnterior, displayActual) {
        this.displayActual = displayActual;
        this.displayAnterior = displayAnterior;
        this.calculador = new Calculadora();
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoDeOperacion = undefined;
        this.signos = {
            sumar: "+",
            dividir: "/",
            multiplicar: "*",
            restar: "-",            
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
    borrarTodo(){
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoDeOperacion
        this.imprimirValores();
    }
    computar(tipo){
        this.tipoDeOperacion !== "igual" && this.calcular();
        this.tipoDeOperacion=tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual="";
        this.imprimirValores();
    }
    agregarNumero(numero){
        if (numero == "." && this.valorActual.includes(".")){
            return
        }
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores(){        
        this.displayActual.textContent = this.valorActual;
        this.displayAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoDeOperacion] || ""}`;
       
    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        if(isNaN(valorActual) || isNaN(valorAnterior)){
            return
        } this.valorActual = this.calculador[this.tipoDeOperacion](valorAnterior, valorActual)
    }
    
}


