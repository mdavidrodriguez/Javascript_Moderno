// // Arreglos 
// // const arr = new Array(10);
// const arr = [];  // Arreglo vació
// console.log(arr);

let videoJuegos = ['Mario 3 ', 'Megaman', 'Chromo trigger'];
console.log({videoJuegos});

// Accediendo a un elemento de un arreglo
console.log(videoJuegos[0]);


// Forma de declarar arreglos sin generar errores
let arregloCosas = [
    true, 
    123,
    'Mateo',
    1 + 2,
    function(){},
    () =>{},
    {a: 1},
    ['x', 'megaman', 'zero', 'Dr Light', [
        'Dr. Wiily',
        'Woodman'
    ]]
];

console.log(arregloCosas[7][4][1]); //Accediendo a un elemento de un arreglo dentro de otro arreglo
