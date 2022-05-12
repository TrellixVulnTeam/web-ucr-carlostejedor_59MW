/*FORMULARIO CONTACTO*/
const btnEnvio = document.getElementById('enviarCorreo')

btnEnvio.addEventListener('click', function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const ausunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const file = document.getElementById("file").value;
    window.location.href='mailto:pabloesquilache@gmail.com?subjet=envioDesdeFormulario&body=Nombre%20y%20Apellido%3A${nombre}%0Aemail%3A{email}%0AAsunto%3A{asunto}%0AMensaje%3A{mensaje}%0AFile%3A{file}';
});
