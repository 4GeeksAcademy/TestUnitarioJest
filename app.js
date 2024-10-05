//Esta es mi funcion que suma dos numeros
//const rest = (a,b) =>{ 
  //  return a-b;
//}

//Solo un registro en consola para nosotros
//console.log(rest(7,3))

//Exportar la funcion para usarla en otros archivos 
//(similar a la palabra clave "export" cuando se usa webpack)
//module.exports = { rest };


//One euro is:
let oneEuroIs= {
    "JPY": 156.5, //japan
    "USD": 1.07,
    "GBP": 0.87, //british pound
}

const fromDollarToYen = (dolares) =>{
    return (dolares/oneEuroIs.USD)*oneEuroIs.JPY;
}

const fromEuroToDollar = (euro) =>{
    return (euro/oneEuroIs.GBP)*oneEuroIs.USD;
}

const fromYanToPound = (yen) =>{
    return (yen/oneEuroIs.GBP)*oneEuroIs.GBP;
}

console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(1));
console.log(fromYanToPound(1));