//Importar la funcion sum del archivo app.js
const{sum} = require('./app.js');

//Comienza tu primera prueba

test('adds 14+9 to equal 23', () =>{
//Dentro de la prueba llamamos a nuestra funcion sum con 2 numeros 
let total = sum(14,9);

//Esperamos que la suma de esos 2 numeros sea 23 
expect(total).toBe(23);

});