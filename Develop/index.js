// Packages
const fs = require('fs');
const inquirer = require('inquirer');

// Function prompts user with questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please input a description.');
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to install your project? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter installation steps');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How should your project be used? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please describe the usage.')
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license for your project. (Required)',
            choices: ['MIT', 'Apache', 'Mozilla-Public'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please choose a license');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'licenseDesc',
            message: 'What license did you choose and why? (Required)',
            validate: licenseDescInput => {
                if (licenseDescInput) {
                    return true;
                } else {
                    console.log('Please provide a description for your license choice.');
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Give directions to reach out to you concerning questions. (Required)',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please enter directions to reach out for questions.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email.');
                    return false;
                }
            }
        }
    ]);
}

// Function writes README file
function writeToFile(data) {
    fs.writeFile('../README.md', data, err => {
        return;
    });
}

// Markdown Template for the README file
function generatePage(readmeData) {
    console.log(readmeData);
    return `
# ${readmeData.title}

## Licensing 
[![license](https://img.shields.io/badge/license-${readmeData.license}-blue)](https://shields.io)

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

- Github: ${readmeData.github}
- Email: ${readmeData.email}

## License

${readmeData.licenseDesc}
    `
}

// Series of functions that execute on start
promptUser()
    .then(readmeData => {
        return generatePage(readmeData)
    })
    .then(readmeText => {
        return writeToFile(readmeText)
    })
