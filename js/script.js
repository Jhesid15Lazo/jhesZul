const fechaReferencia = new Date('2023-09-07T19:30:00')

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
  const dia = document.getElementById("dia");
  const hora = document.getElementById("hora");
  const minuto = document.getElementById("minuto");
  const segundo = document.getElementById("segundo");
  dia.textContent = `${dias}`;
  hora.textContent = `${horas}`;
  minuto.textContent = `${minutos}`;
  segundo.textContent = `${segundos}`;
}
// Actualizar el conteo de tiempo cada segundo
setInterval(actualizarConteoDeTiempo, 1000);
// Inicialmente, muestra el conteo de tiempo
actualizarConteoDeTiempo();
