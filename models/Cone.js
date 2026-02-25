class Cone{
    constructor(raio, altura){
        this.raio = raio 
        this.altura = altura
    }

    calcArea(){
        return Math.PI * this.raio**2
    }
    calcVolume(){
        return (1/3) * this.calcArea() * this.altura
    }
}

module.exports = Cone