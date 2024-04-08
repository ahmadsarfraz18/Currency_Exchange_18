#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlueBright.bold("\n\tWelcome to 'Mahar's' Currency Converter\n"));

let currency_rate: any = {
    "USD": 1,
    "CAD": 1.3,
    "EUR": 0.91,
    "GBP": 0.78,
    "JPY": 0.0066,
    "CNY": 0.15,
    "INR": 74.57,
    "PKR": 277.70,

};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow ("Select your currency to convert from"),
        choices: ["USD", "CAD", "EUR", "GBP", "JPY", "CNY", "INR", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.bgGreen ("Select your currency to convert into"),
        choices: ["USD", "CAD", "EUR", "GBP", "JPY", "CNY", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.bgCyan ("Enter your amount to convert"),
    }
]);

let from_amount = currency_rate[user_answer.from_currency];
let to_amount = currency_rate[user_answer.to_currency];
let amount = user_answer.amount;

// formula of conversion

let base_amount = amount/from_amount ;
let converted_amount = base_amount * to_amount;

console.log (chalk.magenta(`converted amont = ${converted_amount.toFixed(2)}`));
// to control the digits after . for example (234334.452545465) we can use [.toFixed(2,3,4 so on)]


