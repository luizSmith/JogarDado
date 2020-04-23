class Dado{
    constructor(lados = 6,valMenor = 1,intervalo = 1,nPorLado = 1, valMaior = undefined) {
        this.lados = Math.abs(lados);           // numero de lados    
        this.valMenor = Math.abs(valMenor);     // menor valor do dado
        this.intervalo = Math.abs(intervalo);   // intervalo entre cada valor
        this.nPorLado = Math.abs(nPorLado);     // quantidade de numeros por lado
        this.valMaior = valMaior;               // define o valor máximo de cada lado
    }

    //Retorna o valor que vai ter em cada lado
    //return int ou Array;
    ValorRando() {
        this.valMenor - 1;

        if (this.valMaior === undefined) {
            this.valMaior = 0;
            // trazer p valor de cada lado
            for (var i = 1; i <= this.lados; i++) {
                // cada valor do lado
                for (var j = 1; j <= this.nPorLado; j++) {                
                    this.valMaior += this.intervalo;
                }
            }
        }

        // Não precisa retornar mais de um valor
        if (this.nPorLado == 1) {
            return Math.floor(Math.random() * this.valMaior / this.valMenor) * this.intervalo + this.valMenor;
        }

        var valores = [];
        for (i = 0; i < this.nPorLado; i++) {
            valores[i] = Math.floor(Math.random() * this.valMaior / this.valMenor) * this.intervalo + this.valMenor;
        }

        return valores;
    }

    // simula o rolar do dado quantas vezes necessárias
    // Param: int vezes
    // Return: Array;
    Rolar(vezes = 1) {

        if (vezes == 1) {
            return this.ValorRando();
        }

        var resposta = [];
        for (var i = 0; i < vezes; i++) {
            resposta[i] = this.ValorRando();
        }

        return resposta;        
    }
}

var d = new Dado();

console.log(d.Rolar());