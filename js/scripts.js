function BankAccount(name, initialDeposit) {
    this.name = name;
    this.initialDeposit = initialDeposit;
    this.currentBalance = initialDeposit;
}
BankAccount.prototype.getBalance = function(){
    return this.currentBalance;
}

BankAccount.prototype.withdraw = function(amount) {
    this.currentBalance = this.currentBalance-amount;
}

BankAccount.prototype.deposit = function(amount) {
    this.currentBalance = this.currentBalance + amount;
}