document.getElementById('playButton').addEventListener('click', function() {
    const balas = [0, 0, 0, 0, 0, 1];
    balas.sort(() => Math.random() - 0.5);  // Mezclar las balas

    const resultado = balas[Math.floor(Math.random() * balas.length)];

    const resultadoText = document.getElementById('resultado');
    resultadoText.textContent = "Mezclando balas....";

    // Cambia el botón para mostrar que el juego está en curso
    const playButton = document.getElementById('playButton');
    playButton.disabled = true;
    playButton.textContent = "Jugando...";

    // Animación del revólver
    const revolverImg = document.querySelector('.revolver-img');
    revolverImg.style.transform = 'rotate(360deg)';

    setTimeout(() => {
        if (resultado === 1) {
            resultadoText.textContent = "PUM ¡Estas Muerto!";
            resultadoText.style.color = 'red';
            document.getElementById('gunshotSound').play();
        } else {
            resultadoText.textContent = "¡SOBREVIVISTE!";
            resultadoText.style.color = 'green';
            document.getElementById('clickSound').play();
        }
        // Restablece el botón para permitir jugar de nuevo
        playButton.disabled = false;
        playButton.textContent = "Jugar";
        revolverImg.style.transform = 'rotate(0deg)';
    }, 2000);  // Simula el tiempo de mezcla
});
