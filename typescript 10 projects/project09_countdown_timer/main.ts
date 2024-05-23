#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const setTimer = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Please enter a number to start the timer in seconds.",
        validate: (userInput)=>{
            if(isNaN(userInput)){
                return "Enter a number only."
            }else if(userInput > 60){
                return "Enter a number less than or equal to 60 only."
            }else{
                return true
            }
        }
    }
])

function startTimer(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val + 1)
    const intervalTime = new Date(intTime)
    console.log("Your timer starts now.")
    setInterval(()=>{
        const currentTime = new Date()
        const timeDiff = differenceInSeconds(intervalTime, currentTime)
        if(timeDiff <= 0){
            console.log(`00:${timeDiff.toString().padStart(2,"0")}`)
            console.log("Timer has expired")
            process.exit()
        }
        console.log(`00:${timeDiff.toString().padStart(2,"0")}`)
    },1000)
}

startTimer(setTimer.userInput)