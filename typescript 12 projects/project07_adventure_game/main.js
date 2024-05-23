#! /usr/bin/env node
import inquirer from "inquirer";
let lives = 2;
console.log("Welcome to the Escape or die game!");
let newPlayer = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Your Name",
    }
]);
console.log(`Your name: ${newPlayer.name}`);
console.log("You have 3 lives.");
console.log("You wake up in a dark, abondend mansion. Your mission is to escape from here.");
while (lives >= 0) {
    let gameBegins = await inquirer.prompt([
        {
            name: "firstStep",
            type: "list",
            message: "Choose one of the 3 options.",
            choices: ["Go Left", "Go Right", "Go Straight"]
        },
        {
            name: "secondChoice",
            type: "list",
            message: "This leads you to 2 staircases one up and one down.Choose one of the 2 options: ",
            choices: ["Go up", "Go down"],
            when(gameBegins) {
                return gameBegins.firstStep == "Go Right";
            }
        },
        {
            name: "scndChoice",
            type: "list",
            message: "This leads you to 2 doors. Choose one of the 2 doors: ",
            choices: ["Right", "Left"],
            when(gameBegins) {
                return gameBegins.firstStep == "Go Straight";
            }
        }
    ]);
    if (gameBegins.firstStep == "Go Left") {
        console.log("Incoming Arrows!");
        console.log("You are dead.");
        console.log(`You have ${lives} lives remaining.`);
    }
    else if (gameBegins.secondChoice == "Go up") {
        console.log("You are attacked by zombies!");
        console.log("You are dead.");
        console.log(`You have ${lives} lives remaining.`);
    }
    else if (gameBegins.secondChoice == "Go down") {
        console.log("You see a gate which leads you out of the mansion!");
        console.log("You win!");
        break;
    }
    else if (gameBegins.scndChoice == "Right") {
        console.log("This door leads you out of the mansion!");
        console.log("You win");
        break;
    }
    else if (gameBegins.scndChoice == "Left") {
        console.log("You are attacked by aliens!");
        console.log("You are dead.");
        console.log(`You have ${lives} lives remaining.`);
    }
    lives--;
}
