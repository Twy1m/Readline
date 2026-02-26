class Cone{
    constructor(raio, altura){
        this.raio = raio 
        this.altura = altura
        this.geratriz = 0
    }

    calcAreaB(){
        return Math.PI * this.raio * this.raio
    }

    calcGeratriz(){
        this.geratriz = Math.sqrt((this.altura* this.altura) + (this.raio**2))
        return this.geratriz
    }
    calcAreaL(){
        return Math.PI * this.raio * this.calcGeratriz()
    }
    calcAreaT(){
        return Math.PI * this.raio  * (this.calcGeratriz() + this.raio)
    }
    calcVolume(){
        return (1/3) * this.calcAreaB() * this.altura
    }
}

module.exports = Cone   