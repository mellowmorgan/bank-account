Describe: BankAccount()
Test: "Should create BankAccount object from constructor with name and initial deposit amount as properties."
Code:
let ba = new BankAccount("Jeff", 8000);
ba.name;
ba.initialDeposit;
Expected Output: "Jeff" 8000

Describe: BankAccount.prototype.getBalance()
Test: "Should return balance."
Code:
ba.getBalance();
Expected Output: 8000

Describe: BankAccount.prototype.withdraw(amount)
Test: "Should allow user to withdraw money from bank account."
Code:
ba.withdraw(500);
ba.getBalance();
Expected Output: 7500

Describe: BankAccount.prototype.deposit(amount)
Test: "Should add amount to currentBalance."
Code:
ba.deposit(2000);
ba.getBalance();
ExpectedOutput: 9500