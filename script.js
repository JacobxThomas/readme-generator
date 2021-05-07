const inquirer = require("inquirer");

var questions = [  
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a project description",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required for installation?",
    },
    {
        type: "input",
        name: "instructions",
        message: "What are the steps required for use?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Enter the GitHub usernames of contributors",
    },
    {
        type: "input",
        name: "test",
        message: "What are the steps required to run a test?",
    },
    {
        type: "list",
        name: "license",
        message: "Select lincense",
        choices: ["option1", "option2", "option3"],
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "Github link",
        message: "Enter a link to your GitHub", 
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email adress",
    },
    {
        type: "input",
        name: "contact",
        message: "Enter information on how to contact you",
    }
]

