const dia = 1; // 0: domingo... 1:lunes....
const horaActual = 10;

let horaApertura;
let mensaje; // Esta Abierto, Esta cerrado, hoy abrimos a las xx
// if(dia === 0 || dia === 6){
//     if([0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }


horaApertura =([0,6].includes(dia)) ? 9: 11;
// if(horaActual >= horaApertura){
//     mensaje = 'esta abierto';
// }else{
//     mensaje = `esta cerrado, hoy abrimos a las  ${ horaApertura }` ;
// }

mensaje = (horaActual >= horaApertura) ? 'Esta abierto ' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura,mensaje});

