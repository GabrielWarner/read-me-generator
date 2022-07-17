// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {fileName, description, installInstructions, usageInformation, contributionGuidelines, testInstructions, license, githubUsername, email} = data
  return `# ${fileName}
## Description
${description}
## Table of Contents
* Installation
* Usage
* License
* Usage
* License
* Contributions
* Test Instructions
* Questions
## Installation
${installInstructions}
## Usage
${usageInformation}
## License
${license}
## Contributions
${contributionGuidelines}
## Test Instructions
${testInstructions}
## Questions
${githubUsername}
${email}
`;
}

module.exports = generateMarkdown;
