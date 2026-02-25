const rl = require('readline-sync')


const Cilindro = require('./models/Cilindro')
const Cone = require('./models/Cone')
const Cubo = require('./models/Cubo')




let opcao = 0

do{


    switch(opcao){
        //Cilindro
        case 1:

        let valor1 = rl.questionInt('Qual e o valor do raio do cilindro: ')
        let valor2 = rl.questionInt('Qual e o valor da altura do cilindro: ')

        let cilindro = new Cilindro(valor1,valor2)

        let areaCilindro = cilindro.calcArea()
        console.log('A area do cilidro e: ',areaCilindro)

        let volumeCilindro = cilindro.calcVolume()
        console.log('O volume do cilindro e: ',volumeCilindro)
        
        break
           
        //Cone

        case 2:

        val1 = rl.questionInt('Qual é o valor do raio do cone: ')
        val2 = rl.questionInt('Qual é o valor da altura do cone: ')

        let cone = new Cone(val1,val2)

        let areaCone = cone.calcArea()
        console.log('A area do Cone é: ', areaCone.toFixed(2))

        let volumeCone = cone.calcVolume()
        console.log('O volume do cilindro é: ',volumeCone.toFixed(2))

        break

        //Cubo

        case 3:

        let val1 = rl.questionInt('Qual é o valor do lado do quadrado: ')
        let cubo = new Cubo(val1)

        let areaCubo = cubo.calcArea()
        console.log('A area do Cone é: ', areaCubo)

        let volumeCubo = cubo.calcVolume()
        console.log('O volume do cilindro é: ',volumeCubo)
        break
        
        console.log('____________________________________')
        console.log('|__________ 1 - Cilindro ___________|')
        console.log('|__________ 2 - Cone     ___________|')
        console.log('|__________ 3 - Cubo     ___________|')
        console.log('|___________________________________|')
    }

    opcao = rl.questionInt('Qual opcao voce deseja?')

}while(opcao !== 0)

console.log('Fim de programa')