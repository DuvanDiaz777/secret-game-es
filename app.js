let numeroSecreto = 0;
let intentos = 0;
let numeroSorteados = [];
let maxNum = 10;

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(numeroSecreto);
  if (numeroUsuario === numeroSecreto) {
    insertarTexto(
      "p",
      `Felicitaciones!, Acertaste el numero en ${intentos} ${
        intentos > 1 ? "intentos" : "intento"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      insertarTexto("p", `El numero secreto es menor que ${numeroUsuario}`);
    } else {
      insertarTexto("p", `El numero secreto es mayor que ${numeroUsuario}`);
    }
    intentos++;
    cleanBox();
  }

  return;
}

function cleanBox() {
  document.querySelector("#valorUsuario").value = "";
}

function insertarTexto(elemento, texto) {
  let item = document.querySelector(elemento);
  item.innerHTML = texto;
}

function generarNumSecreto() {
  let numeroGenerado = Math.floor(Math.random() * maxNum) + 1;
  console.log(numeroGenerado);
  console.log(numeroSorteados);
  if (numeroSorteados.length == maxNum) {
    insertarTexto("p", "Ya se han sorteado todos los elementos");
  } else {
    //si el numero generado esta
    if (numeroSorteados.includes(numeroGenerado)) {
      return generarNumSecreto();
    } else {
      numeroSorteados.push(numeroGenerado);
    }
    return numeroGenerado;
  }
}

function initGame() {
  insertarTexto("h1", "Juegos del numero secreto!");
  insertarTexto("p", `Ingresa un numero del 1 al ${maxNum}:`);
  numeroSecreto = generarNumSecreto();
  intentos = 1;
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

function resetGame() {
  initGame();
  cleanBox();
}

initGame();
