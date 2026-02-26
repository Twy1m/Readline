class Cilindro{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }

    calcAreaB(){
        return Math.PI * this.raio**2
    }

    calcVolume(){
        return this.altura * this.calcAreaB()
    }
}
module.exports = Cilindro