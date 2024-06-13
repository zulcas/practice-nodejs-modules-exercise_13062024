/** Leer README */

function getAvgFromArray(arr){
    //arr = [1, 2, 3];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let result = sum/arr.length;
    return result;
}

