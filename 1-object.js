'use strict';

function userFactory1(name, email, city) { 
  return { name,  email, city };
}

const userFactory2 = (name,email, city) => ({ 
  name,  email, city 
});


const user1 = userFactory1('Dima', 'dimdim@gmail.com', 'Kiev');
console.log(user1);

const user2 = userFactory2('Dima', 'dimdim@gmail.com', 'Kiev');
console.log(user2);

