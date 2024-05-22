#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
while (condition) {
    let toDos = await inquirer.prompt([{
            name: 'firstquestion',
            type: 'input',
            message: chalk.red('What you want to Add in your todo list?')
        },
        {
            name: 'secondquestion',
            type: 'confirm',
            message: chalk.green('Would you like to add more in your todos?'),
            default: 'true'
        },
    ]);
    todoList.push(toDos.firstquestion);
    condition = (toDos.secondquestion);
    console.log(todoList);
}
