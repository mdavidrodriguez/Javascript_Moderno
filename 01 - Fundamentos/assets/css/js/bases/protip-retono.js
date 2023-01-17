// function crearPersona(nombre,apellido){
//     return {
//         nombre,apellido}
// }

const crearPersona = (nombre, apellido) => ({nombre,apellido});   //Retorna como un objeto


const persona = crearPersona("Mateo", "Rodriguez");
console.log(persona);

function imprimeArgumento (){
    console.log(arguments);
}

const imprimeArgumento2 =( edad, ...args ) =>{
    // console.log({edad, args});
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumento2(10,true, 'Mateo', 'Rodriguez');
console.log({casado, vivo, nombre, saludo});

const {apellido: Nuevoapellido} = crearPersona('Mateo', 'Rodriguez');
console.log({Nuevoapellido});

const tony = {
    nombre: "Tony Stark",
    codeName: "Iron man",
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//     console.log('Nombre', personaje.nombre);
//     console.log('Codename',personaje.codeName);
//     console.log('vivo',personaje.vivo);
//     console.log('edad',personaje.edad);
//     console.log('trajes',personaje.trajes);
    
// }



const imprimePropiedades = ({nombre,codename,vivo,edad = 15,trajes}) => {
       console.log({nombre});
       console.log({codename});
       console.log({vivo});
       console.log({edad});
       console.log({trajes});
}

imprimePropiedades(tony);
