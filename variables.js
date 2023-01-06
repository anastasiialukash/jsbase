const getGreeting = (level) => {
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

//console.log(getGreeting('superAdmin'));

const getGreetingTwo = (level) => {
  const greeting = 'Hello, ';
  const userToGreet = level === 'user' ? 'user' : (level === 'admin' ? 'admin' : (level === 'superAdmin' ? 'super admin' : (level === 'unauthorized' ? 'unknown user' : 'sorry, I cannot identify your role')));
  return `${greeting} ${userToGreet}!`;
}

//console.log(getGreetingTwo('sdoisdofs'));

const getGreetingThree = (level) => {
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

//console.log(getGreetingThree('fgdfgdfgdf'));
