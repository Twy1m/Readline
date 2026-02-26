const rl = require('readline-sync')


const Cilindro = require('./models/Cilindro')
const Cone = require('./models/Cone')
const Cubo = require('./models/Cubo')


let opcao = 0

do{
    console.log('____________________________________')
    console.log('|__________ 1 - Cilindro ___________|')
    console.log('|__________ 2 - Cone     ___________|')
    console.log('|__________ 3 - Cubo     ___________|')
    console.log('|__________ 0 - Sair     ___________|')
    console.log('|___________________________________|')

    opcao = rl.questionInt('Qual opcao voce deseja? - ')
    if(opcao !== 0){
        switch(opcao){
            //Cilindro
            case 1:
    
            let valor1 = rl.questionInt('Qual e o valor do raio do cilindro: ')
            let valor2 = rl.questionInt('Qual e o valor da altura do cilindro: ')
    
            let cilindro = new Cilindro(valor1,valor2)
    
            let areaCilindroB = cilindro.calcAreaB()
            console.log('A area do cilidro e: ',areaCilindroB.toFixed(2))
    
            let volumeCilindro = cilindro.calcVolume()
            console.log('O volume do cilindro e: ',volumeCilindro.toFixed(2))
            
            break
               
            //Cone
    
            case 2:
    
            let valor3 = rl.questionInt('Qual e o valor do raio do cone: ')
            let valor4 = rl.questionInt('Qual e o valor da altura do cone: ')
    
            let cone = new Cone(valor3,valor4)
    
            let areaCone = cone.calcAreaB()
            console.log('A area do Cone e: ', areaCone.toFixed(2))

            let geratriz = cone.calcGeratriz()
            console.log('A geratriz do Cone e: ',geratriz.toFixed(2))

            let areaL = cone.calcAreaL()
            console.log('A area lateral do Cone e: ', areaL.toFixed(2))
            
            let areaT = cone.calcAreaT()
            console.log('A area total do Cone e: ', areaT.toFixed(2))
            
            let volumeCone = cone.calcVolume()
            console.log('O volume do Cone e: ',volumeCone.toFixed(2))
    
            break
    
            //Cubo
    
            case 3:
    
            let valor5 = rl.questionInt('Qual e o valor do lado do quadrado: ')
            let cubo = new Cubo(valor5)
    
            let areaCubo = cubo.calcArea()
            console.log('A area do Cubo e: ', areaCubo.toFixed(2))
    
            let volumeCubo = cubo.calcVolume()
            console.log('O volume do Cubo e: ',volumeCubo.toFixed(2))
            break

        }
    }


}while(opcao !== 0)

console.log('Fim de programa')