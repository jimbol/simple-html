class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} speaks.`)
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} says "Meow".`)
  }
}

const drCat = new Cat("Dr. Cat");
drCat.speak();

console.log()
