function createBankAccount(owner, initialBalance) {
  return {
    owner: owner,
    balance: initialBalance,
    transactions: [],

    deposit(amount) {
      
      if (typeof amount !== "number" || Number.isNaN(amount) || amount <= 0) {
        return "Invalid amount";
      }

      const balanceBefore = this.balance;
      this.balance += amount;
      
    
      this.transactions.push({
        type: "deposit",
        amount: amount,
        balanceBefore: balanceBefore,
        balanceAfter: this.balance
      });

      return this.balance;
    },

    withdraw(amount) {
    
      if (typeof amount !== "number" || Number.isNaN(amount) || amount <= 0) {
        return "Invalid amount";
      }

      
      if (amount > this.balance) {
        return "Insufficient balance";
      }

      const balanceBefore = this.balance;
      this.balance -= amount;

      
      this.transactions.push({
        type: "withdraw",
        amount: amount,
        balanceBefore: balanceBefore,
        balanceAfter: this.balance
      });

      return this.balance;
    },

    getLastTransaction() {
      if (this.transactions.length === 0) {
        return "No transactions";
      }
      return this.transactions[this.transactions.length - 1];
    },

    undoLastTransaction() {
      if (this.transactions.length === 0) {
        return "No transactions to undo";
      }
      
      
      const lastTx = this.transactions.pop();
      this.balance = lastTx.balanceBefore;
      
      return this.balance;
    },

    getSummary() {
      return `Owner: ${this.owner} | Balance: ${this.balance} | Transactions: ${this.transactions.length}`;
    }
  };
}

console.log("--- Account 1 (Ahmed) ---");
const account = createBankAccount("Ahmed", 1000);

console.log(account.deposit(200));   
console.log(account.withdraw(300));   
console.log(account.withdraw(2000));  

console.log(account.undoLastTransaction());
console.log(account.undoLastTransaction()); 
console.log(account.undoLastTransaction()); 

console.log(account.deposit(-50));   
console.log(account.deposit("200"));  
console.log(account.deposit(NaN)); 

console.log("\n--- Account 2 (Sara) vs Account 1 (Ahmed) ---");
const account2 = createBankAccount("Sara", 5000);

console.log("Sara deposits 1000:", account2.deposit(1000)); 
console.log("Ahmed's Summary:", account.getSummary()); 
console.log("Sara's Summary:", account2.getSummary()); 