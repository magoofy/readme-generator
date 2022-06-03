// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
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
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license for your project',
            choices: ['', '', '']
        },
        {
            type: 'input',
            name: 'licenseDesc',
            message: 'What license did you choose and why?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Give directions to reach out to you concerning questions:'
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
    ]);
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('../README.md', data, err => {
        console.log('Error');
        console.log(data);
        return;
    });
}

function generatePage(readmeData) {
    console.log(readmeData);
    return `
# ${readmeData.title}

## Description

${readmeData.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)

## Installation

${readmeData.installation}

## Usage

${readmeData.usage}

## Questions

${readmeData.questions}

Github: ${readmeData.github}
Email: ${readmeData.email}

## License

${readmeData.licenseDesc}
    `
}

promptUser()
    .then(readmeData => {
        return generatePage(readmeData)
    })
    .then(readmeText => {
        return writeToFile(readmeText)
    })
