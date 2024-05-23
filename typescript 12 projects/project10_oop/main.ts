#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome to GIAIC Portal")

class registration{
    name: any;
    email: any;
    password: any;
    constructor(n:string,e:any,p:any){
        this.name = n,
        this.email = e,
        this.password = p
    }
    
}

const register = await inquirer.prompt([
    {
        name: "signUp",
        type: "list",
        message: "What would you like to do?",
        choices: ["Sign Up","Exit"]
    }
])
if(register.signUp == "Exit"){
    console.log("Hope to see you soon!")
    process.exit()
}else{
    const answers = await inquirer.prompt([
                {
                    name: "userName",
                    type: "input",
                    message: "Please enter your name"
                },
                {
                    name: "userEmail",
                    type: "input",
                    message: "Please enter your email"
                },
                {
                    name: "userPassword",
                    type: "input",
                    message: "Please make a strong password"
                }
        
            ])
            console.log("Congratulations! You are now a GIAIC student.")
            const userInfo = new registration(answers.userName,answers.userEmail,answers.userPassword)
            console.log(`Here are your details.\nYour username: ${userInfo.name}\nYour email: ${userInfo.email}\nYour password: ${userInfo.password}`)
            console.log("Please remember your details!Thank You.")
            process.exit()

}



