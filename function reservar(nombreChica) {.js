function reservar(nombreChica) {
    alert(`Has reservado con ${nombreChica}. ¡Te esperamos!`);
}

document.getElementById('form-reserva').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const chica = document.getElementById('chica').value;
    const fecha = document.getElementById('fecha').value;
    alert(`${nombre}, has reservado con ${chica} para el ${fecha}.`);
});