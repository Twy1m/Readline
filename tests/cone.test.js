const Cone = require('../models/Cone')

describe('teste', ()=>{

    let r = 2
    let h = 2
    test('teste unitario da area da base', ()=>{
        const cone = new Cone(r,h)
        const resultado = 12.566
        expect(cone.calcAreaB()).toBeCloseTo(resultado, 2)
    })
    test('teste unitario da geratriz', ()=>{
        const cone = new Cone(r,h)
        const resultado = 2.828
        expect(cone.calcGeratriz()).toBeCloseTo(resultado, 2)
    })
    test('teste unitario da area lateral', ()=>{
        const cone = new Cone(r,h)
        const resultado = 17.771
        expect(cone.calcAreaL()).toBeCloseTo(resultado, 2)
    })
    test('teste unitario da area total', ()=>{
        const cone = new Cone(r,h)
        const resultado = 30.338
        expect(cone.calcAreaT()).toBeCloseTo(resultado, 2)
    })
    test('teste unitario do voluem', ()=>{
        const cone = new Cone(r,h)
        const resultado = 8.377
        expect(cone.calcVolume()).toBeCloseTo(resultado, 2)
    })
})

 