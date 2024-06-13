// Leer README
const os = require('os');

let equipo = os.hostname;
let sistemaOperativo = os.version;
let ram = (os.totalmem/(1024**3)).toFixed(1);

console.log('El equipo es: ' + equipo);
console.log('La versión del sistema operativo es: ' + sistemaOperativo);
console.log('La memoria ram total es: ' + ram + "GB")