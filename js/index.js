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

//- Crea una función llamada shortestWord que reciba 2 palabras como parámetro y devuelva la palabra más corta.

const shortestWord = (wordA, wordB) => {
  if (wordA.length < wordB.length) {
    return wordA;
  } else {
    return wordB;
  }
};
const shortestWordResult = shortestWord('hola', 'camomila');
console.log(shortestWordResult);

//- Crea una función llamada onlyEven que reciba 3 números e imprima sólo los números pares.
//const onlyEven = (numberA, numberB, numberC) => {
// if (numberA % 2 === 0) {
//  console.log(numberA);
//} if (numberB % 2 === 0) {
//rconsole.log(numberB);
// } if (numberC % 2 === 0) {
// console.log(numberC);
//}
//};
//const onlyEvenResult = onlyEven(2, 3, 4);
//console.log(onlyEvenResult);

const onlyEven = array => {
  for (const number of array) {
    if (number % 2 === 0) {
      return number;
    }
  }
};
const onlyEvenResult = onlyEven([2, 3, 4]);
console.log(onlyEvenResult);

//- Crea una función que reciba un número y devuelva su cuadrado y su cubo. El objeto Math tiene el método pow que sirve para calcular potencias, Math.pow(base, exponente)

const squareAndCube = number => {
  const squareOfNumber = Math.pow(number, 2);
  const cubeOfNumber = Math.pow(number, 3);
  console.log(squareOfNumber, cubeOfNumber);
};
const squareAndCubeResult = squareAndCube(2);

//- Crea una función que reciba una palabra de 5 letras e imprima por consola las 5 letras separadas por comas.

const lettersSeparated = word => {
  console.log(`${word.charAt(0)}, ${word.charAt(1)}, ${word.charAt(2)}, ${word.charAt(3)}, ${word.charAt(4)}`);
};
const lettersSeparatedResult = lettersSeparated('perro');

//- Crea una función que reciba un array de 3 números y lo imprima con los números duplicados, por ejemplo, si recibe [1,2,3] deberá imprimir [1,2,3,1,2,3]

const threeNumbers = array => {
  array.push(array[0], array[1], array[2]);
  console.log(array);
};
const threeNumbersResult = threeNumbers([1, 2, 3]);

//- Crea una función que reciba un array de 5 números y que lo imprima sin el primer y el último valor, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir [2,3,4]

const fiveNumbers = array => {
  array.shift();
  array.pop();
  console.log(array);
};
const fiveNumbersResult = fiveNumbers([1, 2, 3, 4, 5]);

//- Crea una función que reciba un array con 5 letras y que imprima las 5 letras unidas en una sola palabra
const fiveWords = array => {
  console.log(`${array[0]}${array[1]}${array[2]}${array[3]}${array[4]}`);
};
const fiveWordsResult = fiveWords(['p', 'e', 'r', 'r', 'o']);

//- Crea una función llamada longestWordArray que reciba un array con 3 palabras y devuelva la palabra más larga del array.

const longestWordArray = array => {
  if (array[0].length > array[1].length && array[0].length > array[2].length) {
    console.log(array[0]);
  } else if (array[1].length > array[0].length && array[1].length > array[2].length) {
    console.log(array[1]);
  } else {
    console.log(array[2]);
  }
};
const longestWordArrayResult = longestWordArray(['oso', 'parajito', 'ir']);

//- Crea una función que reciba un array con 3 números y un array con 3 letras e imprima los números y las letras intercaladas, por ejemplo, si recibe ([1,2,3],['a','b','c']) deberá imprimir 1,a,2,b,3,c

const numbersAndLetters = (arrayA, arrayB) => {
  console.log(`${arrayA[0]},${arrayB[0]},${arrayA[1]},${arrayB[1]},${arrayA[2]},${arrayB[2]}`);
};
const numbersAndLettersResult = numbersAndLetters([1, 2, 3], ['a', 'b', 'c']);

//- Crea una función que reciba un array con un número impar de elementos e imprima por consola el valor de la posición central, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir 3, pero si recibe [1,2,3] deberá imprimir 2, si el número de elementos no es impar deberá imprimir "el array no es válido"

const oddArray = array => {
  if (array.length % 2 === 0) {
    console.log('el array no es válido');
    return;
  }
  const middleValue = array[Math.floor(array.length / 2)];
  console.log(middleValue);
};
const oddArrayResult = oddArray([1, 2, 3, 4, 5]);

//- Crea una función que reciba una palabra de 5 letras e imprima sólo las vocales, por ejemplo, si recibe "hola" deberá imprimir "oa"

const onlyVowels = word => {
  const vowels = 'aeiou';
  let newSting = '';
  if (vowels.includes(word.charAt(0))) {
    newSting += word.charAt(0);
  }
  if (vowels.includes(word.charAt(1))) {
    newSting += word.charAt(1);
  }
  if (vowels.includes(word.charAt(2))) {
    newSting += word.charAt(2);
  }
  if (vowels.includes(word.charAt(3))) {
    newSting += word.charAt(3);
  }
  if (vowels.includes(word.charAt(4))) {
    newSting += word.charAt(4);
  }
  console.log(newSting);
};
const onlyVowelsResult = onlyVowels('perro');
