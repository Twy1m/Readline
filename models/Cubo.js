class Cubo{
    constructor(lado){
        this.lado = lado
    }

    calcArea(){
        return this.lado**2
    }

    calcVolume(){
        return this.lado**3
    }
}

module.exports = Cubo