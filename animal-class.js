// Simple class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} speaks.`)
  }
}

// Extend a class
class Cat extends Animal {
  type = 'CAT' // public field
  #mySecretField = 'Shhhh' // private field
  speak() {
    // Secret field can be accessed within the class
    console.log(this.#mySecretField);
    console.log(`${this.name} says "Meow".`)
  }
}


// Using classes
// Create with the "new" keyword
const drCat = new Cat("Dr. Cat");

drCat.speak();
console.log(drCat.type);

// Secret field cannot be accessed outside the class
// console.log(drCat.#mySecretField);
