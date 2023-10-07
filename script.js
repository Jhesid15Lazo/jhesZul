const message = document.getElementById("message");

document.addEventListener("click", () => {
  message.style.display = "block";
  message.style.position = "fixed";
  message.style.zIndex = 10;

  setTimeout(() => {
    message.style.display = "none";
    message.style.position = "none";
  }, 2000);
});
// Fecha de referencia: 7 de septiembre de 2023
const fechaReferencia = new Date("2023-09-07");

function calcularDiferenciaDeTiempo() {
  const ahora = new Date();
  const diferencia = -(fechaReferencia - ahora);

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  return { dias, horas, minutos, segundos };
}

function actualizarConteoDeTiempo() {
  const { dias, horas, minutos, segundos } = calcularDiferenciaDeTiempo();
  const tiempoElement = document.getElementById("tiempo");

  tiempoElement.textContent = `${dias} días, ${horas} horas , ${minutos} minutos y ${segundos} segundos`;
}

// Actualizar el conteo de tiempo cada segundo
setInterval(actualizarConteoDeTiempo, 1000);

// Inicialmente, muestra el conteo de tiempo
actualizarConteoDeTiempo();

const corazon = document.getElementById("corazon");

corazon.addEventListener("click", () => {
  corazon.classList.add("latir");
  setTimeout(() => {
    corazon.classList.remove("latir");
  }, 100000);
});
