
class Account {
  // Public fields
  locale = navigator.language;
  // Private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }
  // Public Methods
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoad(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    } else {
      console.log(`Loan rejected`);
    }
  }
  // Private methods
  #approveLoad(val) {
    const rand = Math.floor(Math.random() * 100) + 1;
    return rand >= 50 ? true : false;
  }
}
