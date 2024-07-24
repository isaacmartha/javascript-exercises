function removeFromArray(array, ...valuesToRemove) {
    return array.filter(item => !valuesToRemove.includes(item));
}

// Exemplo de uso
let myArray = [1, 2, 3, 4];
myArray = removeFromArray(myArray, 3);

console.log(myArray); 



// Do not edit below this line
module.exports = removeFromArray;
