const botonesJugada = document.querySelectorAll('.boton-jugada');
const resultadosDiv = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario'); // Corrected variable name
const contadorOrdenador = document.getElementById('contador-ordenador');

let scoreUsuario = 0;
let scoreOrdenador = 0;

botonesJugada.forEach(boton => {
  boton.addEventListener('click', function() {
    const jugadaUsuario = boton.getAttribute('data-jugada');
    const jugadaOrdenador = generarJugadaAleatoria();
    const resultado = compararJugadas(jugadaUsuario, jugadaOrdenador);
    mostrarResultado(resultado, jugadaUsuario, jugadaOrdenador);
    actualizarPuntuaciones(resultado);
  });
});

function generarJugadaAleatoria() {
  const opciones = ['piedra', 'papel', 'tijera'];
  const randomIndex = Math.floor(Math.random() * 3);
  return opciones[randomIndex];
}

function compararJugadas(jugadaUsuario, jugadaOrdenador) {
  if (jugadaUsuario === jugadaOrdenador) {
    return 'Empate';
  } else if (
    (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
    (jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
    (jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
  ) {
    return 'Gana Jugador';
  } else {
    return 'Gana Ordenador';
  }
}

function mostrarResultado(resultado, jugadaUsuario, jugadaOrdenador) {
  const resultadoTexto = `Elegiste ${jugadaUsuario}, la máquina ${jugadaOrdenador}. ${resultado}`;
  resultadosDiv.textContent = resultadoTexto; // Display the result text
}

function actualizarPuntuaciones(resultado) {
  if (resultado === 'Gana Jugador') {
    scoreUsuario++;
  } else if (resultado === 'Gana Ordenador') {
    scoreOrdenador++;
  }

  contadorUsuario.textContent = `Tus puntos: ${scoreUsuario}`;
  contadorOrdenador.textContent = `Puntos de la máquina: ${scoreOrdenador}`;
}

