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

function displayBalance(account){
    let currentBalance = account.currentBalance;
    $("#balance").text(currentBalance);
}

$(document).ready(function(){
    let account;
    $("#formOne").submit(function(event){
        event.preventDefault();
        const name = $("#name").val();
        const initialDeposit = parseInt($("#initial-deposit").val());
        account = new BankAccount(name, initialDeposit);
        displayBalance(account);
    });
    $("#formTwo").submit(function(event){
        event.preventDefault();
        let deposit = parseInt($("#deposit").val());
        let withdrawal = parseInt($("#withdrawal").val());
        if(withdrawal){
            account.withdraw(withdrawal);
        }
        if(deposit){
            account.deposit(deposit);
        }
        displayBalance(account);
    });
});