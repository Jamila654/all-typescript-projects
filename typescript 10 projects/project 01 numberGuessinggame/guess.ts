#! /usr/bin/env node

import inquirer from "inquirer";

async function playgame(){
    const Maxattempts = 5;
    let attempt = 0;
    const sysNumber = Math.floor(Math.random()*50);
    
    while(attempt <= Maxattempts){
        const answer = await inquirer.prompt([
            {
                type: "number",
                name: "userGuess",
                message: "Please enter a number between 1-50:",
            }]);
            console.log(`${answer.userGuess}: Your Guess number.`)
            
            if(answer.userGuess === sysNumber){
                console.log("Your guess is correct!You win.")
                break

            }else if(answer.userGuess < sysNumber){
                console.log("Too low, try again.")
            }else if(answer.userGuess > sysNumber){
                console.log("Too big, try again")
            }
            attempt ++
            }
            console.log("Sorry You have run out of attempts.")
            }
            

playgame();