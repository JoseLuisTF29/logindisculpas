document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar las credenciales
    if (email === "tequieromucho@alessia.lamejorprima" && password === "miprimafavorita") {
        // Redirigir a la tarjeta de disculpas
        window.location.href = "index.html";
    } else {
        // Mostrar mensaje de error
        document.getElementById('errorMessage').textContent = "Credenciales incorrectas.";
        document.getElementById('errorMessage').classList.remove('hidden');
    }
});
