class Cilindro{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }

    calcArea(){
        return Math.PI * this.raio**2
    }

    calcVolume(){
        return this.altura * this.calcArea()
    }
}
module.exports = Cilindro