// Mas sobre los arreglos
// Propiedades de los arreglos

let juegos = ['Zelda', 'Mario', 'Gta V', 'Tomb Raider'];
console.log(juegos.length);  //Largo de los elementos

let primero = juegos[2 -2];
let ultimo = juegos[juegos.length - 1]; //Trucos para el ultimo elemento
console.log({ultimo, primero});

// Iteración del arreglo
juegos.forEach((elemento, indice, arr) => {
    console.log({elemento,indice,arr})
})

let nuevaLongitud =  juegos.push('F-Zero');
// console.log(juegos.length);
console.log(juegos);

juegos.unshift('Mortal Combat');  // Insertar elemento al inicio del arreglo
console.log(juegos);

//BOrrar un elemento del arreglo
let juegoborrado = juegos.pop();
console.log(juegoborrado.length);
console.log(juegos);

// Borrar de una posición en especifico
// let pos = 1;
let juegosBorrados = juegos.splice(1, 2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Tomb Raider');  //Buscar con indexOf un elemento en la posición del arreglo
console.log(metroidIndex);

