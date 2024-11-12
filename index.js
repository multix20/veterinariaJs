const { registrar, leer } = require('./operaciones');

// Obtener argumentos de la línea de comandos
const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

if (operacion === "registrar") {
    if (nombre && edad && tipo && color && enfermedad) {
        registrar(nombre, edad, tipo, color, enfermedad);
    } else {
        console.log("Por favor, ingresa todos los datos: nombre, edad, tipo, color, enfermedad.");
    }
} else if (operacion === "leer") {
    leer();
} else {
    console.log("Operación no válida. Usa 'registrar' o 'leer'.");
}
    