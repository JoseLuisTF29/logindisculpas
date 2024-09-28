document.getElementById('revealMessage').addEventListener('click', function() {
    const secretMessage = document.getElementById('secretMessage');
    const funnyMessage = document.getElementById('funnyMessage');
    const body = document.getElementById('body');

    if (secretMessage.classList.contains('hidden')) {
        // Cambiar el mensaje por la broma
        funnyMessage.textContent = "¡Mentira! Solo las mujeres se disculpan.";
        
        // Cambiar el fondo por llamas
        body.style.backgroundImage = "url('https://espanol.livingwaters.com/wp-content/uploads/2021/11/es-eficaz-la-predicacion-del-fuego-del-infierno-1080x675.jpg')"; // Cambia esta URL por la imagen de llamas que desees.
        body.style.backgroundSize = "cover"; // Para cubrir toda la pantalla

        // Mostrar el mensaje
        secretMessage.classList.remove('hidden');
        this.textContent = "Cerrar Mensaje Secreto";
    } else {
        // Revertir el fondo original (rosas)
        body.style.backgroundImage = "url('https://media.istockphoto.com/id/174655938/es/foto/fondo-de-rosas.jpg?b=1&s=612x612&w=0&k=20&c=s4DAxk24ltN3FUK-tvA2jd9B0oLugBL-6ozMjs40qJg=')"; // Vuelve a la imagen original de rosas.

        // Ocultar el mensaje secreto
        secretMessage.classList.add('hidden');
        this.textContent = "Abrir Mensaje Secreto";
    }
});

// Función para crear rosas cayendo
function createFallingRoses() {
    const rosesContainer = document.querySelector('.falling-roses');
    for (let i = 0; i < 10; i++) { // Ajusta la cantidad de rosas
        const rose = document.createElement('img');
        rose.src = 'https://i.pinimg.com/736x/59/a7/37/59a7370451c44b6d3fd8ec28b7d58863.jpg'; // Cambia la URL por la de tu imagen de rosa
        rose.className = 'rose';
        rose.style.left = Math.random() * 100 + 'vw'; // Posición aleatoria
        rose.style.animationDuration = Math.random() * 5 + 3 + 's'; // Duración aleatoria
        rosesContainer.appendChild(rose);

        // Elimina la rosa después de que ha caído
        rose.addEventListener('animationend', () => {
            rose.remove();
        });
    }
}

// Crea rosas cayendo cada segundo
setInterval(createFallingRoses, 1000);
