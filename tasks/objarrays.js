export const getRichestUserWithoutFriends = (array) => {
  let highestAmount = 0;
  let richestName = '';
  
  array.forEach((el) => {
    const balance = parseInt(el.balance.substring(0, el.balance.length - 1));
   
    if (highestAmount < balance) {
      highestAmount = balance;
      richestName = el.name;
    }
  });

  return richestName;
}

export const sortUsers = (array) => {
  const names = [];
    array.reduce((acc, current) => {
        names.push(current.name);
        return acc;
    }, []);
  
    return names.sort();
}

export const joinedBalance = (array) => {
  return array.reduce((acc, current) => {
        const balance = parseInt(current.balance.substring(0, current.balance.length - 1));
        acc = acc + balance;
        return acc;
    }, 0);
}

export const deleteUser = (array, userName) => {
  array.forEach((el) => {
        if (el.name === userName) {
            const index = array.indexOf(el);
            array.splice(index, 1);
        }
    });
  
    return array;
}

export const addUserAfter = (array, userToAddAfter, userToAdd) => {
  array.forEach((el) => {
        if (el.name === userToAddAfter) {
            const index = array.indexOf(el);
            array.splice(index + 1, 0, userToAdd);
        }
    });

    return array;
}

export const addUserToEnd = (array, userToAdd) => {
  array.splice(array.length, 0, userToAdd);
  return array;
}

export const getUniqueUsers = (array) => {
  const allUsers = array.flatMap(({ name, balance, friends }) => [{name, balance}, ...friends]);

  const userNames = new Set(allUsers.map(user => user.name));

  return userNames;
}

export const getUsersWithGivenBalance = (array, limitBalance) => {
  const users = [];
  array.reduce((acc, current) => {
    const currentUserBalance = parseInt(current.balance.substring(0, current.balance.length - 1));
    
    if(currentUserBalance > limitBalance) {
      users.push(current);
    }
  }, []);
  return users; 
}

export const getRichestUserWithFriends = (array) => {
  let highestAmount = 0;
  let richestName = '';

  const allUsers = array.flatMap(({ name, balance, friends }) => [{name, balance}, ...friends]);
  
  allUsers.forEach((el) => {
    const balance = parseInt(el.balance.substring(0, el.balance.length - 1));
   
    if (highestAmount < balance) {
      highestAmount = balance;
      richestName = el.name;
    }
  });

  return richestName;
}

export const getUsersWithMutualFriends = (array) => { 
  const allFriends = array.flatMap(({ friends }) => [...friends]).flatMap(( { name }) => [name]).sort();
  
  let usersWithSeveralFriends = [];
  for (let i = 0; i < allFriends.length - 1; i++) {
    if (allFriends[i + 1] === allFriends[i]) {
      usersWithSeveralFriends.push(allFriends[i]);
    }
  }

  const usersWithMutualFriends = []
  array.forEach((el) => {
    const userFriends = el.friends; 
    for (let friend of userFriends) {
      if(usersWithSeveralFriends.includes(friend.name) && !usersWithMutualFriends.includes(el.name)) {
        usersWithMutualFriends.push(el.name);
      }
    }
  });

  return usersWithMutualFriends;
}

export const isEqualArrays = (arr1, arr2) => {
  return (arr1.length == arr2.length) && arr1.every((element, index) => element === arr2[index]);
}

export const isPalindrome = (str) => {
  const reversedStr = str.toLowerCase().split('').reverse().join('').replaceAll(' ', '');
  return reversedStr === str.toLowerCase().replaceAll(' ', ''); 
}

export const getGenders = (arr) => {
  return new Set(arr.map(({ gender }) => gender));
}

export const getHeroesWithMaxFilms = (arr) => {
  let maxNumberOfFilms = 0;

  arr.map(({ name, films }) => {
    const numberOfFilms = films.length;
    if (numberOfFilms > maxNumberOfFilms) {
      maxNumberOfFilms = numberOfFilms;
    }
  });

  return arr.filter(({ films }) => films.length === maxNumberOfFilms).map(({ name }) => name);
}

export const getHeroWithMaxWeight = (arr) => {
  let maxWeight = 0;

  arr.map(({ mass }) => {
    const weight = parseInt(mass);
    if (weight > maxWeight) {
      maxWeight = weight;
    }
  });

  return arr.filter(({ mass }) => parseInt(mass) === maxWeight).map(({ name }) => name);
}

export const getFilmsWithAllHeroes = (arr) => {
  const arrayOfFilmArrays = [];
  arr.map(( { films }) => {
    arrayOfFilmArrays.push(films);
  })

  const filmsWithAllHeroes = arrayOfFilmArrays.reduce((lastArray, nextArray)=>{
    const intersection = lastArray.filter(x => nextArray.includes(x))
    return intersection
});

  return filmsWithAllHeroes;
}

export const deleteAllEntriesFromArray = (arr) => {
  arr.length = 0;
  return arr;
}