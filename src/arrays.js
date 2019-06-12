const getNthElement = (index, array) => {
  if (index < 4) {
    return array[index];
  }
  return array[index - 4];
};

const arrayToCSVString = (array) => {
  return array.join();
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  return array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = array.map(element => {
  });
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].toString()
  }
  return numbers;
};

const uppercaseWordsInArray = (strings) => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].toUpperCase();
  }
  return strings;
};

const reverseWordsInArray = (strings) => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].split('').reverse().join('');
  }
  return strings;
};

const onlyEven = (numbers) => {
  return numbers.filter(number => {
    number % 2 === 0
  })
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
};

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
