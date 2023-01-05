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
  }
};

const userGreeting = getGreeting('superAdmin');
console.log(userGreeting);
