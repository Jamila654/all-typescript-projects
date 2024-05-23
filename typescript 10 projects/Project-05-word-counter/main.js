#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to perform word count."
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`The total words are ${words.length}`);
