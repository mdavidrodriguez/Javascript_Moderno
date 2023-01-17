// Primera forma de crear funciones
function saludar (nombre) {  
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1,2];
    // Esto nunca se va a ejecutar
    console.log('Soy un codigo que esta despues del return');
}

// Función anónima
const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

const saludarFlecha = (nombre) =>{
    console.log("Hola Mundo con Flecha " + nombre);
}



const retornoSaludar =  saludar('Mateo',40, true, 'Colombia'); // 1
// console.log(retornoSaludar[0],retornoSaludar[1]);
// saludar2('Mateo R');
// saludarFlecha('Rodriguez');

function sumar (a,b){
    return a + b;
}


// const sumar2 = (a,b) => {
//     return a + b;
// }

const sumar2 = (a,b) =>  a + b;  //Función de flecha optimizada

function getAleatorio () {
    return Math.random();
}

// 

const  getAleatorio2 = () => Math.random();



console.log(sumar2(2,2));

console.log(getAleatorio());
console.log('Flecha aleatorio 2 :>> ', getAleatorio2());

