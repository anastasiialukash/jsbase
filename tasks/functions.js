import bigDecimal from 'js-big-decimal';

export const setAllToUpperCase = (str) => {
  return str.split(' ')
    .map((word) => word.split('')[0].toUpperCase() + word.slice(1))
    .join(' ');
}

export const getArrayStrLength = (arr) => {
  const strings = arr.filter((str) => typeof str === 'string' && str.length !== 0);
  return strings.map((str) => str.length); 
}

export const getNumberOfVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  str.replaceAll(' ', '').split('').map((letter) => {
    if (vowels.includes(letter)) {
      count ++; 
    }
  })
  return count;
}

export const createUser = (role, name) => {
  return {
    role: role,
    name: name,
  }
}

export const getLetterCount = (str) => {
  let count = 1;
  let result = '';

  str.split('').forEach((letter, index) => {
        if (letter === str[index + 1]) {
            count ++;
        } else {
            result = result + count + letter;
            count = 1;
        }
    });
  return result;
}

export const getNumberOfEvenAndOdd = (arr) => {
  let evenCount = 0;
  let oddCount = 0;

  arr.forEach((num) => {
    if (typeof num === 'number') {
      num % 2 === 0 ? evenCount++ : oddCount++;
    }
  })

  return `even: ${evenCount}, odd: ${oddCount}`;
}

export const convertMoney = (currency, amount) => {
  const us = 0.027;
  const eur = 0.026;
  switch (currency) {
    case 'US': 
      return (amount * us).toFixed(2);
    case 'EUR':
      return (amount * eur).toFixed(2);
  }
}

export const getStingWithWhiteSpaces = (str) => {
  return str.replaceAll(' ', '').split('').join(' ');
}

export const getSeconds = (years) => {
  const secondsInYear = 31536000;
  return years * secondsInYear;
}

export const trimString = (str, numberOfSymbols) => {
  return str.substring(0, numberOfSymbols);
}