// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input

const questions = [
    {
        message: "Enter project title: ",
        type: "input",
        name: "fileName"
    },
    {
        message: "Enter description: ",
        type: "input",
        name: "description"
    },
    {
        message: "Enter installation instructions: ",
        type: "input",
        name: "installInstructions"
    },
    {
        message: "Enter usage information: ",
        type: "input",
        name: "usageInformation"
    },
    {
        message: "Enter contribution guidelines: ",
        type: "input",
        name: "contributionGuidelines"
    },
    {
        message: "Enter test instructions: ",
        type: "input",
        name: "testInstructions"
    },
    {
        message: "Choose license: ",
        type: "list",
        name: "license",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        message: "Enter github username: ",
        type: "input",
        name: "githubUsername"
    },
    {
        message: "Enter email: ",
        type: "input",
        name: "email"
    },
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers)=>{
        fileName = answers.fileName
        writeToFile(fileName, answers)
    })
}

// Function call to initialize app
init();
