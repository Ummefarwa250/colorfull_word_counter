#! /usr/bin/env node
import inquirer from  "inquirer";
import chalk from "chalk";

//display a colorful welcome message
console.log(chalk.yellow("\n \t Welcome to code with farwa - Word Counter \n \t"));

//prompt the user to enter the sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message:" Enter your Sentence to count the wrods: ",
    }
]);

//triming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");

//analysis of user input sentence

console.log (chalk.bold("-Sentence Words:"));
console.log(words);
console.log (chalk.italic(`\n -Word Count: ${words.length}`));