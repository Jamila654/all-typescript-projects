#! /usr/bin/env node

import inquirer from "inquirer";

let Convertion: any= {
    "PKR":{
        "PKR": 1,
        "USD": 0.0035825600974456347,
        "GBP": 0.002825577124127603,
        "MYR": 0.017114495978093447,
        "SAR": 0.013421017313112333
    },
    "USD":{
        "USD": 1,
        "PKR": 279.13,
        "GBP": 0.7874015748031495,
        "MYR": 4.761904761904762,
        "SAR": 3.7037037037037033
    },
    "GBP":{
        "GBP": 1,
        "USD": 1.27,
        "PKR": 353.91,
        "MYR": 5.88235294117647,
        "SAR": 4.761904761904762
    },
    "MYR":{
        "MYR": 1,
        "GBP": 0.17,
        "USD": 0.21,
        "PKR": 58.43,
        "SAR": 0.78125,
    },
    "SAR":{
        "SAR": 1,
        "PKR": 74.51,
        "MYR": 1.28,
        "GBP": 0.21,
        "USD": 0.27
    }

}

const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Please choose a currency that you would like to convert.",
        choices: ["PKR", "USD", "GBP", "MYR","SAR"]
    },
    {
        type: "list",
        name: "to",
        message: "Now choose a currency that you want.",
        choices: ["PKR", "USD", "GBP", "MYR", "SAR"]
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter your amount."
    }
])

if(answer.from && answer.to && answer.amount){
    let result = Convertion[answer.from][answer.to] * answer.amount
    console.log(`Your convertion from ${answer.from} to ${answer.to} is ${result}.`)

}else{
    console.log("Invalid inputs")
}