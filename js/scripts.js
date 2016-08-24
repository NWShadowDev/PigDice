//business logic
function Player1 (initial, name) {
  this.balance = initial;
  this.name = name;
}

function Player2 (initial, name) {
  this.balance = initial;
  this.name = name;
}

BankAccount.prototype.hold = function(amount) {
  this.balance += amount;
}

BankAccount.prototype.loseturn = function(amount) {
  this.balance = 0;
}
//user interface logic
