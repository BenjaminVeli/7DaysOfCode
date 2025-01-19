let secretNumber = Math.floor(Math.random() * 11); // Genera un número aleatorio entre 0 y 10.
let attemps = 3;  // Número de intentos disponibles.

// Función que inicia el juego
function guessTheNumber() {
    let userGuess;

    // Bucle para que el jugador solo tenga 3 intentos
    for (let i = 0; i < attemps; i++) {
        userGuess = parseInt(prompt("Adivina el número entre 0 y 10:"));

        // Se verifica si el jugador adivinó correctamente
        if (userGuess === secretNumber) {
            alert("!Felicidades, adivinaste el número!");
            return; // Se acaba el juego si se adivina correctamente
        } else {
            // Si no se acertó, te avisa cúantos intentos te quedan
            alert(`Incorrecto. Te quedan ${attemps - i - 1} intentos.`);
        }
    }

    alert(`Lo siento, no adivinaste el número ${secretNumber}.`);
}

guessTheNumber();