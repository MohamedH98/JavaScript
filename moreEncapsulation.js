lass Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  };
  brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  };
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate = function () {
    this.speed += 10;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, at ${this.#charge}% charge`
    );
    return this;
  };
  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo;
    return this;
  };
}

const lucid = new EV("Lucid", 70, 90);
console.log(lucid);
lucid.brake();
lucid.accelerate().brake().chargeBattery(50).accelerate();
