// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of your project: '
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who are the contributors of this project?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Instructions to use the project: '
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['', '', '', '', '', '', '']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('../readme.md', data, err => {
        console.log('Error');
        return;
    })
}

function generatePage(readmeData) {
    return `
# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

## Credits

List your collaborators, if any, with links to their GitHub profiles.

## License

The last section of a high-quality README file is the license. 
    `
}

promptUser()
.then(readmeData => {
    return generatePage(readmeData)
})
.then(readmeHTML => {
    return writeToFile(readmeHTML)
})
// .then(pageHTML => {
//     return writeToFile(pageHTML)
// })
