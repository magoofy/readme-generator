// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

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
        name: 'installation',
        message: 'What are the steps to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should your project be used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who are the contributors of this project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['', '', '', '', '', '', '']
    },
    {
        type: 'input',
        name: 'license-desc',
        message: 'What license did you choose and why?'
    },
    {
        type: 'input',
        name: 'question-sec',
        message: 'Give directions to reach out to you concerning questions: '
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
    fs.writeFile('../README.md', data, err => {
        console.log('Error');
        return;
    })
}

function generatePage(readmeData) {
    return `
#${title}

## Description

${Description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Questions

${question-sec}

Github: ${github}
Email: ${email}

## License

${license-desc}
    `
}

promptUser()
.then(readmeData => {
    return generatePage(readmeData)
})
.then(readmeText => {
    return writeToFile(readmeText)
})
