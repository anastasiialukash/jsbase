export const capitalizeSecondWord = (str) => {
  const words = str.split(' ');
  return `${words[0]} ${words[1].toUpperCase()}`;
}

export const logAll = (str) => {
  const symbols = str.split('');
  const loggedTypes = [];
  for(let i = 0; i < symbols.length; i++) {
    const parsed = parseInt(symbols[i]);
    if(isNaN(parsed)) {
       loggedTypes.push(typeof symbols[i]);
    } else {
      loggedTypes.push(typeof parsed);
    }
  }
  return loggedTypes.join(',');
}

export const isEvenOrOdd = () => {
  for(let i = 3; i <= 13; i++) {
    const parity = i % 2 === 0 ? 'even' : 'odd';
    console.log(`${i} is ${parity}`);
  }
}

export const isEvenOrOddWithWhile = () => {
  let i = 3;
  while (i <= 13) {
    const parity = i % 2 === 0 ? 'even' : 'odd';
    console.log(`${i} is ${parity}`);
    i++;
  }
}