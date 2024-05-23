#! /usr/bin/env node
import inquirer from "inquirer";
class bankAccount {
    accountNum;
    balance;
    constructor(accNum, bal) {
        this.accountNum = accNum,
            this.balance = bal;
    }
    withdraw(ammount) {
        if (this.balance >= ammount) {
            this.balance -= ammount;
            console.log(`Withdrawal of ${ammount} successfull.\nRemaing balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient Balance!");
        }
    }
    deposit(amount) {
        if (amount > 500) {
            amount -= 0.50;
            console.log("An additional 0.50 will be charged will be charged for amount greater than 500");
        }
        this.balance += amount;
        console.log(`Deposit of ${amount} successfull.\nRemaining balance is ${this.balance}`);
    }
    checkBalance() {
        console.log(`Current balance: ${this.balance}`);
    }
}
class customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    account;
    constructor(fName, lName, gen, ag, mob, acc) {
        this.firstName = fName,
            this.lastName = lName,
            this.gender = gen,
            this.age = ag,
            this.mobileNumber = mob;
        this.account = acc;
    }
}
const accounts = [
    new bankAccount(48572, 10000),
    new bankAccount(39206, 1000000),
    new bankAccount(54917, 1000000),
    new bankAccount(67431, 100000000),
    new bankAccount(83014, 10000000000)
];
const customers = [
    new customer("Ahmed", "Yaqoob", "Male", 19, 55522345, accounts[0]),
    new customer("Ali", "Khan", "Female", 45, 44457699876, accounts[1]),
    new customer("Fatima", "Munir", "Female", 34, 3337896543, accounts[2]),
    new customer("Maab", "Jamal", "Female", 34, 3337896543, accounts[3]),
    new customer("Ammar", "Akhtar", "Female", 34, 3337896543, accounts[4])
];
async function service() {
    do {
        const accountNumberInput = await inquirer.prompt({
            name: "accountNumber",
            type: "number",
            message: "Enter your account number: "
        });
        const customer = customers.find(customer => customer.account.accountNum === accountNumberInput.accountNumber);
        if (customer) {
            console.log(`Welcome ${customer.firstName} ${customer.lastName}`);
            const ans = await inquirer.prompt([{
                    name: "select",
                    type: "list",
                    message: "What would you like to do?",
                    choices: ["Deposit", "Withdraw", "Check Balance", "Exit"]
                }]);
            switch (ans.select) {
                case "Deposit":
                    const depositAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount you would like to deposit: "
                    });
                    customer.account.deposit(depositAmount.amount);
                    break;
                case "Withdraw":
                    const withdrawAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount you would like to withdraw: "
                    });
                    customer.account.withdraw(withdrawAmount.amount);
                    break;
                case "Check Balance":
                    customer.account.checkBalance();
                    break;
                case "Exit":
                    console.log("You have successfully logged out...");
                    return;
            }
        }
        else {
            console.log("Invalid account number! Please try again.");
        }
    } while (true);
}
service();
