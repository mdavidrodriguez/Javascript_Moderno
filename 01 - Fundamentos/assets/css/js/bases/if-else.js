let a = 5;

if (a >= 10) {
  //undefined, null, una asignación
  console.log("A es mayor  o igual  10");
} else {
  console.log("A es menor a 10");
}

// console.log("fin de programa");

const hoy = new Date(); // obtener la información del objeto actual de la fecha, hora, dia
let dia = hoy.getDay();
console.log({ dia });

if (dia === 0) {
  console.log("domingo");
} else if (dia ===1) {
    console.log('lunes');

//   if (dia === 1) {
//     console.log("lunes");
//   } else {
//     console.log("No es lunes ni domingo");
//   }
}else if (dia ===2){
    console.log('Martes');
}else{
    console.log('No es lunes,Martes o domingo');
}

// Sin usar If els, o switch, unicamente objetos
dia = 3;  // 0:domingo, 1: lunes

// dia de la semana

const diasletra = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
console.log(diasletra[4]);

// Usando objetos
const diasLetras2 = {
   0: 'domingo', 
   1: 'lunes',
   2: 'martes', 
   3: 'miércoles', 
   4: 'jueves',
   5: 'viernes', 
   6: 'sábado', 
   7: 'domingo'
}
console.log(diasLetras2[10] || 'dia no definido');
