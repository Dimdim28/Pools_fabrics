'use strict';

class Person {
  constructor(name) {
    this.name = name;
  }
}

const factorify = Category => (...args) => new Category(...args);

// Usage

const p1 = new Person('Ivan');
console.dir({ p1 });

const personFactory = factorify(Person);
const p2 = personFactory('Sergey');
console.dir({ p2 });
