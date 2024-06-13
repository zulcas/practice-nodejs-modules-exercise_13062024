
/**
 * Obtiene un elemento aleatorio de un array.
 * @param {Array} arr - El array del cual obtener el elemento.
 * @returns {*} Un elemento aleatorio del array.
 */
function getRandomElementFromArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('El argumento debe ser un array');
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

module.exports.getRandomElementFromArray = getRandomElementFromArray;

function getAvgFromArray(arr){
    //arr = [1, 2, 3];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let result = sum/arr.length;
    return result;
}



module.exports.getAvgFromArray = getAvgFromArray;