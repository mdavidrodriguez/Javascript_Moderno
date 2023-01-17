//

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

// Referencias del html
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const btnNuevo = document.querySelector("#btnNuevo");

let puntosJugador = 0,
  puntosComputadora = 0;

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

const puntosHtml = document.querySelectorAll("small");

// Esta función crea una nueva baraja
const crearDeck = () => {
  for (let i = 2; i <= 10; i++)
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  // console.log(deck);
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

crearDeck();

// Esta función me permite tomar una carta

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};

// pedirCarta()

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHtml[1].innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png" alt="" />
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; // 3H, JD
    imgCarta.classList.add("carta");
    divCartasComputadora.append(imgCarta);
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana:(");
    } else if (puntosMinimos > 21) {
      alert("La computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("computadora gana");
    }
  }, 10);
};

// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  console.log(puntosJugador);
  puntosHtml[0].innerText = puntosJugador;

  // <img class="carta" src="assets/cartas/2C.png" alt="" />
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; // 3H, JD
  imgCarta.classList.add("carta");
  divCartasJugador.append(imgCarta);

  // Puntos
  if (puntosJugador > 21) {
    console.warn("Lo siento mucho perdiste");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    console.warn("21 genial");
    btnPedir.disabled = true;
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador);
});

// Todo:Borrar
btnNuevo.addEventListener("click", () => {
  console.clear();
  deck = [];
  deck = crearDeck();
  puntosJugador = 0;
  puntosComputadora = 0;
  puntosHtml[0].innerText = 0;
  puntosHtml[1].innerText = 0;

  divCartasComputadora.innerHTML = "";
  divCartasJugador.innerHTML = "";

  btnPedir.disabled = false;
  btnDetener.disabled = false;
});
