class Pet {
    constructor(name, age, toy, food) {
        this.name = name;
        this.age = age;
        this.toy = toy;
        this.food = food;
    }
    play() {
        return `${this.name} is playing with ${this.toy}`;
    }
    eat() {
        return `${this.name} is eating ${food}`;
    }
}

class Cat extends Pet {
    constructor(name, age, toy, food, livesRemaining) {
        super(name, age, toy, food);
        this.livesRemaining = livesRemaining;
    }
    meow() {
        return 'MEOWWWW!!';
    }
}

class Dog extends Pet {
    constructor(name, age, toy, food, isGoodBoy) {
        super(name, age, toy, food);
        this.isGoodBoy = isGoodBoy;
    }
    bark() {
        return 'BARK!!!'
    }
}

const luna = new Cat('luna', 1, 'cotton', 'catnip', 8);
const milo = new Dog('milo', 4, 'tail', 'sausages', false);
