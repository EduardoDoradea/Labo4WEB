
function ordenar(arr) {
    const nuevoArray = [...arr]
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}

//Pasando el arreglo con numeros desordenados a la funcion para que pueda devolvermelos de forma ordenada 
console.log(ordenar([14,23,99,874,93,12]));

function esPar(num) {
    return num % 2 === 0;
}

console.log(esImpar(7));

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada){
    let altura = 0;
    let dias = 0;
    while(altura < alturaDeseada){
        altura += velocidadCrecimiento;
        dias++;
        if(altura >= alturaDeseada){
            return dias;
        }
        altura -= velocidadDecrecimiento;
    }
    return dias;
}
//Pasando los datos a la funcion para que me diga el dia que se tarda en crecer mi planta
console.log(calcularDiasCrecimiento(3,5,4));

