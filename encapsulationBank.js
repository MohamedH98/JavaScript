class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }
  // These are the public interfaces of our objects
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoad(val) {
    const rand = Math.floor(Math.random() * 100) + 1;
    return rand >= 50 ? true : false;
  }
  requestLoan(val) {
    if (this._approveLoad(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    } else {
      console.log(`Loan rejected`);
    }
  }
}
