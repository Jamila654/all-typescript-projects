#! /usr/bin/env node

import inquirer from "inquirer";

let score = 0
const info = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Your Name"
    }
])
console.log(`Welcome to the Quiz ${info.name}!\nYour score is ${score}.\nThis quiz consists of 10 multiple choice questions.You get 10 points for each correct answer.There is no deduction of points for wrong answers.`)

const question1 = await inquirer.prompt([
    {
        name: "que1",
        type: "list",
        message: "What is the capital of France?",
        choices: ["London","Paris","Berlin","Rome"]
    }
])
if(question1.que1 == "Paris"){
    console.log("Correct Answer!")
    score += 10
}else{
    console.log("Incorrect Answer")
}
let question2 = await inquirer.prompt([
    {
        name: "que2",
        type: "list",
        message: "What is the largest planet in our solar system?",
        choices: ["Earth","Venus","Jupiter","Mars"]
    }
])
if(question2.que2 == "Jupiter"){
    console.log("Correct Answer")
    score += 10
}else{
    console.log("Incorrect Answer")
}
let question3 = await inquirer.prompt([
    {
        name: "que3",
        type: "list",
        message: "Who wrote Romeo and Juliet?",
        choices: ["William Shakespeare","Charles Dickens","Jane Austen","Mark Twain"]
    }
])
if(question3.que3 == "William Shakespeare"){
    console.log("Correct Answer")
    score += 10
}else{
    console.log("Incorrect Answer")
}
let question4 = await inquirer.prompt([
    {
        name: "que4",
        type: "list",
        message: "What is the chemical symbol for water?",
        choices:["H2O","CO2","NaCl","O2"]
    }
])
if(question4.que4 == "H2O"){
    console.log("Correct Answer")
    score += 10
}else{
    console.log("Incorrect Answer")
}
let question5 = await inquirer.prompt([
    {
        name: "que5",
        type: "list",
        message: "What is the capital of Japan?",
        choices: ["Beijing","Tokyo","Seoul","Bangkok"]
    }
])
if(question5.que5 == "Tokyo"){
    console.log("Correct Answer")
    score += 10
}else{
    console.log("Incorrect Answer")
}
let question6 = await inquirer.prompt([
    {
        name: "que6",
        type: "list",
        message: "How many continents are there in the world?",
        choices: [5,6,7,8] 
    }
])
if(question6.que6 == 7){
    console.log("Correct Answer")
    score += 10
}else{
    console.log("Incorrect Answer")
}
let question7 = await inquirer.prompt([
    {
        name: "que7",
        type: "list",
        message: "What is the largest mammal?",
        choices: ["Elephant","Giraffe","Blue whale","Hippopotamus"]
    }
])
if(question7.que7 == "Blue whale"){
    console.log("Correct Answer")
    score += 10
}else{
    console.log("Incorrect Answer")
}
let question8 = await inquirer.prompt([
    {
        name: "que8",
        type: "list",
        message: "Which planet is known as the Red Planet?",
        choices: ["Venus","Mars","Jupiter","Saturn"]
    }
])
if(question8.que8 == "Mars"){
    console.log("Correct Answer")
    score += 10
}else{
    console.log("Incorrect Answer")
}
let question9 = await inquirer.prompt([
    {
        name: "que9",
        type: "list",
        message: "What is the chemical symbol for gold?",
        choices: ["Au","Ag","Fe","Hg"]
    }
])
if(question9.que9 == "Au"){
    console.log("Correct Answer")
    score += 10
}else{
    console.log("Incorrect Answer")
}
let question10 = await inquirer.prompt([
    {
        name: "que10",
        type: "list",
        message: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci","Vincent van Gogh","Pablo Picasso","Michelangelo"]
    }
])
if(question10.que10 =="Leonardo da Vinci"){
    console.log("Correct Answer")
    score += 10
}else{
    console.log("Incorrect Answer")
}

console.log(`Your total score is ${score}!`)