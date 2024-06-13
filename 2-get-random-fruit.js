const frutas = ["Manzana", "Banana", "Pera", "Naranja", "Uva", "Melón", "Sandía", "Piña", "Kiwi", "Fresa",
    "Cereza", "Ciruela", "Mango", "Limón", "Mandarina", "Granada", "Higo", "Dátil", "Albaricoque", "Melocotón"];

// importa el módulo "utils.js" y usa el método getRandomElementFromArray adecuadamente

const random = require("./mis-utilidades/utils");


for (let i=0; i<3; i++){
    console.log(random.getRandomElementFromArray(frutas));
}