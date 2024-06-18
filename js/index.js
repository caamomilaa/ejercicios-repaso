//EJERCICIOS DE REPASO

// Escribe una función que reciba un número y lo devuelva sumando 2.

const addition = number => {
  return number + 2;
};
const additionResult = addition(5);
console.log(additionResult);

//- Escribe una función que reciba un número y devuelva el doble de ese número.

const multiplication = number => {
  return number * 2;
};
const multiplicationResult = multiplication(5);
console.log(multiplicationResult);

//- Escribe una función que reciba una palabra y devuelva su longitud.

const wordLength = word => {
  return word.length;
};
const wordLengthResult = wordLength('hola');
console.log(wordLengthResult);

//- Escribe una función que reciba una palabra y la imprima en mayúsculas.

const wordUpper = word => {
  return word.toUpperCase();
};
const wordUpperResult = wordUpper('camomila');
console.log(wordUpperResult);

//- Escribe una función que reciba dos palabras e imprima si son iguales o no

const sameWord = (wordA, wordB) => {
  const wordALower = wordA.toLowerCase();
  const wordBLower = wordB.toLowerCase();
  if (wordALower === wordBLower) {
    console.log(`${wordALower} es igual a ${wordBLower}.`);
  } else {
    console.log('No son las mismas palabras.');
  }
};
const sameWordResult = sameWord('perro', 'Casa');

//- Crea una función llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus dígitos.

const sumDigits = number => {
  const numberToString = String(number);
  return Number(numberToString.charAt(0)) + Number(numberToString.charAt(1)) + Number(numberToString.charAt(2));
};
const sumDigitsResult = sumDigits(315);
console.log(sumDigitsResult);

//- Crea una función llamada longestWord que reciba 2 palabras como parámetro y devuelva la palabra más larga.

const longestWord = (wordA, wordB) => {
  if (wordA.length > wordB.length) {
    return wordA;
  } else {
    return wordB;
  }
};
const longestWordResult = longestWord('esternocleidomastoideo', 'casa');
console.log(longestWordResult);

//- Escribe una función llamada getfirstElement que reciba un array y devuelva la primera posición del array.

const getfirstElement = array => {
  return array[0];
};
const getfirstElementResult = getfirstElement([6, 2, 3]);
console.log(getfirstElementResult);

//Escribe una función llamada getArrayElement que reciba un array y una posición y devuelva el valor de esa posición en el array, por ejemplo, si recibe (['a', 'b', 'c'], 2) devolverá 'c'

const getArrayElement = (array, position) => {};
const getArrayElementResult = getArrayElement([['a', 'b', 'c'], 2]);
console.log(getArrayElementResult);
