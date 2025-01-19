// Función para preguntar y validar la respuesta
function askQuestion(question, validOptions) {
    let answer;
    do {
        answer = prompt(question).toLowerCase(); // Convertimos la respuesta a minúsculas
        if (!validOptions.includes(answer)) {
            alert(`Por favor, elige una opción válida: ${validOptions.join(" o ")}.`);
        }
    } while (!validOptions.includes(answer));
    return answer;
}

// Empezamos el juego con la pregunta inicial
let area = askQuestion("¿Quieres seguir en el área de FrontEnd o BackEnd?", ["frontend", "backend"]);

let technology;
if (area === "frontend") {
    technology = askQuestion("¿Quieres aprender React o Vue?", ["react", "vue"]);
    alert(`¡Genial! Has elegido el área de FrontEnd y aprenderás ${technology}.`);
} else {
    technology = askQuestion("¿Quieres aprender C# o Java?", ["c#", "java"]);
    alert(`¡Perfecto! Has elegido el área de BackEnd y aprenderás ${technology}.`);
}

// Preguntamos si el usuario quiere especializarse o ser FullStack
let nextStep = askQuestion("¿Quieres especializarte en esta área o convertirte en Fullstack? (escribe 'Especializarme' o 'FullStack')", ["especializarme", "fullstack"]);

if (nextStep === "especializarme") {
    alert(`¡Excelente elección! Seguirás especializándote en ${technology}.`);
} else {
    alert("¡Impresionante! Te convertirás en un desarrollador FullStack.");
}

// Preguntamos si hay más tecnologías que le gustaría aprender
let moreTechnologies;
do {
    moreTechnologies = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe el nombre o 'ok' para salir.").toLowerCase();
    if (moreTechnologies !== "ok") {
        alert(`¡Interesante! Aprender ${moreTechnologies} puede ser muy útil.`);
    }
} while (moreTechnologies !== "ok");

alert("¡Gracias por participar en este ejercicio! ¡Mucho éxito en tu aprendizaje!");
