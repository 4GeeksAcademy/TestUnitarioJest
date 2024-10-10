//Importar la funcion sum del archivo app.js
//const{rest} = require('./app.js');

//Comienza tu primera prueba

//test('adds 14-9 to equal 5', () =>{
//Dentro de la prueba llamamos a nuestra funcion sum con 2 numeros 
//let total = rest(14,9);

//Esperamos que la suma de esos 2 numeros sea 23 
//expect(total).toBe(5);

//});

const {fromDollarToYen, fromEuroToDollar, fromYanToPound} = require('./app.js');

test('Converts 1 dollar to yen', () => {
    const yen = fromDollarToYen(1);
    // Este es el valor esperado 
    const expectedYen = 146.26168224299064; 
    expect(yen).toBeCloseTo(expectedYen);
});

test('Converts 1 euro to dollars', () => {
    const dollars = fromEuroToDollar(1);
    // Este es el valor esperado 
    const expectedDollars = 1.2298850574712643; 
    expect(dollars).toBeCloseTo(expectedDollars);
});

test('Converts 1 yen to pounds', () => {
    const pounds = fromYanToPound(1);
    // Este es el valor esperado 
    const expectedPounds = 1.0; 
    expect(pounds).toBeCloseTo(expectedPounds);
});
