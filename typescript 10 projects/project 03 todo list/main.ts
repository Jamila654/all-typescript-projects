#! /usr/bin/env node
import inquirer from "inquirer";


async function getTodos(){
    const todoList = []
    while(true){
        const todos = await inquirer.prompt([
            {
                name: "mytodos",
                type: "input",
                message: "What are your todos?"
            },
            {
                name: "addMore",
                type: "confirm",
                message: "Do you want to add more?",
                
            }
        ])
        todoList.push(todos.mytodos)
        console.log(todoList)
        if(!todos.addMore){
            break
        }

    }
}


getTodos()
