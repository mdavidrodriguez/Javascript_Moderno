const personaje = {
    nombre: "Mateo Rodriguez",
    codeName: "Iron man",
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    dirección: {
        zip: '10880, 90265',
        ubicación: 'Malibu, California'
    },
    'ultima-película': 'Infinity Ward'
};

console.log(personaje);
console.log('Nombre:',personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Lat', personaje.coords.lat);
console.log('Numero de trajes: ', personaje.trajes.length);
console.log('Ultimo trajes: ', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Ultima película :', personaje["ultima-película"]);  


// Mas detalles

delete  personaje.edad;
console.log(personaje);

personaje.casado = true;

// Trabajar el objeto como si fuera un arreglo
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Bloqueo de las propiedades
Object.freeze(personaje);
personaje.dinero = 100000000;
personaje.casado = false;
personaje.dirección.ubicación = 'Costa rica';
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje)
console.log({propiedades,valores});