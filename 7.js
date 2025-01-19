function Calculadora() {
    let operación;

    // Bucle do-while para seguir pidiendo la operación hasta que sea válida
    do {
        operación = prompt("Introduce la operación que deseas realizar: +, -, x, /");

        // Comprobar si la operación es válida
        // Si la operación no es válida, el bucle continuará
        if (operación !== "+" && operación !== "-" && operación !== "x" && operación !== "/") {
            alert("Operación no válida. Por favor, introduce una operación válida.");
        }
    } while (operación !== "+" && operación !== "-" && operación !== "x" && operación !== "/");

    return operación;
}

let número1 = parseFloat(prompt("Introduce el primer número:"));
let número2 = parseFloat(prompt("Introduce el segundo número:"));

let operación = Calculadora();

let resultado;

switch (operación) {
    case "+":
        resultado = número1 + número2;
        break;
    case "-":
        resultado = número1 - número2;
        break;
    case "x":
        resultado = número1 * número2;
        break;
    case "/":
        if (número2 == 0) {
            alert("No se puede dividir entre 0");
        } else {
            resultado = número1 / número2;
        }
        break;
}

if (resultado !== undefined) {
    alert(`El resultado de ${número1} ${operación} ${número2} es: ${resultado}`);
}

