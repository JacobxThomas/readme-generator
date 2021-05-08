const inquirer = require("inquirer");
const axios = require("axios");


// user input questions //
var userInput = await inquirer.prompt([
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
        name: "test",
        message: "What are the steps required to run a test?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Enter the GitHub usernames of contributors",
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
]);

// user input variables //
const projectTittle = userInput.title;
const projectDescription = userInput.description;
const projectInstallation = userInput.installation;
const projectInstructions = userInput.instructions;
const projectTest = userInput.test;
const projectLicense = userInput.license;
const contributorUserNames = userInput.contributors;
const tests = userInput.tests;

// github Data variables //
const gitResponse = await axios.get(`https://api.github.com/users/${gitUsername}`);
const gitData = gitResponse.data;
const gitName = gitData.login;
const gitEmail = gitData.email;
const gitlocation = gitData.location;
const gitUrl = gitData.html_url;
const gitProfileImage = gitData.avatar_url;
