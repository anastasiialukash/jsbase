export const getGreeting = (level) => {
switch (level) {
  case 'user': {
    return 'Hello, user!';
    } 
  case 'admin': {
    return 'Hello, admin!';
    }
  case 'superAdmin': {
    return 'Hello, super admin!';
    }
  case 'unauthorized': {
    return 'Hello, unknown user!';
    }
  default: return `Hello, sorry, I cannot identify your role`;
  }
};

export const getGreetingTwo = (level) => {
  const greeting = 'Hello, ';
  const userToGreet = level === 'user' ? 'user' : (level === 'admin' ? 'admin' : (level === 'superAdmin' ? 'super admin' : (level === 'unauthorized' ? 'unknown user' : 'sorry, I cannot identify your role')));
  return `${greeting} ${userToGreet}!`;
}

export const getGreetingThree = (level) => {
  const greeting = 'Hello, ';
  let userToGreet;
  if (level === 'user') {
    userToGreet = 'user';
  } else if (level === 'admin') {
    userToGreet = 'admin';
  } else if (level === 'superUser') {
    userToGreet = 'super user';
  } else if (level === 'unauthorized') {
    userToGreet = 'unknown user'
  } else {
    userToGreet = 'sorry, I cannot identify your role';
  }
  return `${greeting}${userToGreet}!`;
}

export const isFruitOrVegetable = (name) => {
  switch (name) {
  case 'Apple' :
  case 'Banana':
  case 'Cherry':
  case 'Mango':
    return 'fruit';
  case 'Potato':
  case 'Cabbage': 
  case 'Tomato':
  case 'Carrot':
    return 'vegetable';
  default: return 'Cannot identify, try another one';
  }
}
