'use strict';

class Person {
  constructor(name) {
    this.name = name;
  }

  static factory(name) {
    return new Person(name);
  }
}

const p1 = new Person('Ivan');
console.dir({ p1 });

const p2 = Person.factory('Sergey');
console.dir({ p2 });