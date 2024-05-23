#! /usr/bin/env node
import inquirer from "inquirer";
const studentID = Math.floor(Math.random() * 10000) + 10000;
let myBalance = 0;
const welcome = await inquirer.prompt([
    {
        name: "studentInfo",
        type: "input",
        message: "Enter Your name",
    },
    {
        name: "courses",
        type: "list",
        message: "Please choose a course from the following",
        choices: ["HTML", "Typescript", "Javascript", "MS Office", "Amazon course"],
    }
]);
const courseFees = {
    "HTML": 1500,
    "Typescript": 2000,
    "Javascript": 2500,
    "MS Office": 3000,
    "Amazon course": 4000,
};
console.log(`Your selected course: ${welcome.courses} and the price is: ${courseFees[welcome.courses]}.`);
console.log(`Your balance is ${myBalance}.`);
const paymentMethod = await inquirer.prompt([
    {
        name: "paymentMethods",
        type: "list",
        message: "Please choose a payment method.",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "payment",
        type: "input",
        message: "Enter the amount."
    }
]);
if (paymentMethod.payment == courseFees[welcome.courses]) {
    console.log("Congratulations You have successfully enrolled.");
    myBalance += courseFees[welcome.courses];
    console.log(`Your new balance is ${myBalance}`);
}
else if (paymentMethod.payment > courseFees[welcome.courses]) {
    const remainingBalance = paymentMethod.payment - courseFees[welcome.courses];
    console.log(`Your remaining balance is ${remainingBalance}`);
}
else if (paymentMethod.payment < courseFees[welcome.courses]) {
    console.log("Insufficient amount.");
}
const finalStep = await inquirer.prompt([
    {
        name: "lastStep",
        type: "list",
        message: "What would you like to view next?",
        choices: ["View Status", "Exit"]
    }
]);
if (finalStep.lastStep == "View Status") {
    console.log(`Your name: ${welcome.studentInfo}`);
    console.log(`Your Student ID: ${studentID}`);
    console.log(`Your selected course: ${welcome.courses}`);
    console.log(`Your account balance is: ${myBalance}`);
}
else {
    console.log(`You have successfully logged out.`);
}
