// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//Require markdownjs file for page generation
const generatePage = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  // using inquirer to prompt questions to user
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is your project name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description of your project!");
          return false;
        }
      },
    },
    {
      // Takes user input via checkbox using spacebar to add choice and up and down keys to move down list
      type: "checkbox",
      message: "Licensing Options",
      name: "license",
      choices: [
        "None",
        "Apache2.0",
        "GNU Public v3.0",
        "MIT",
        "Boost Software 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public 2.0",
        "GNU Affero General Public v3.0",
        "GNU General Public v2.0",
        "GNU Lesser General Public v2.1",
        "Mozilla Public 2.0",
        "the Unilicense",
      ],
    },
    {   
      type: "input",
      name: "install",
      message: "What are the steps required to install your project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter steps required to install your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this app?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a usage description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test",
    },
    {
      type: "input",
      name: "contributors",
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ]);
};

// TODO: Create a function to write README file
//create filename
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// TODO: Create a function to initialize app
// function call to initialize program
questions()
// getting user answers 
.then(answers => {
    return generatePage(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})


// Function call to initialize app
//init();
