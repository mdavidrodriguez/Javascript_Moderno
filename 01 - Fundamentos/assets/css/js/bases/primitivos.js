let nombre = "Peter Parker";
console.log(nombre);

//No se puede volver a declarar la variable con let
nombre = "Ben Parker";
console.log(nombre);

nombre = "Tia may";
console.log(nombre);
nombre = `Tia may`;
// console.log(nombre);

console.log(typeof nombre);
nombre = 123;
console.log(typeof nombre);

let esMarvel = true;
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);

edad = 33.001;
console.log(typeof edad);

let superPoderDeSpiderMan;
console.log(typeof superPoderDeSpiderMan); // -> la variable no se ha declarado

let soyNull = null;
console.log(typeof soyNull);

let symbo1 = Symbol("a");
let symbo2 = Symbol("b");

console.log(typeof symbo1);

console.log(symbo1 === symbo2);
