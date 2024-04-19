#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Disply acolorfull Welcome message..
console.log(chalk.bold.cyanBright("\n \t\t My sixth project: 'Word Counter'."));
console.log("=".repeat(60));

//prompt the user to enter a sentence.
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
// Trimming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
//Analysis of user input sentence.
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
