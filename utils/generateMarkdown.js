// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  licenseBadge = license
  if(license == "MIT"){
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if(licenseBadge == "APACHE 2.0"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if(licenseBadge == "GPL 3.0"){
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }else if (licenseBadge == "BSD 3"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }else{
    licenseBadge = ""
  }
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  licenseLink = license
  if(license == "MIT"){
    licenseLink = "https://opensource.org/licenses/MIT"
  }else if(license == "APACHE 2.0"){
    licenseLink = "https://opensource.org/licenses/Apache-2.0"
  }else if(license == "GPL 3.0"){
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
  }else if (license == "BSD 3"){
    licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
  }else{
    licenseLink = ""
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseSection = ""
  if(license == "None"){
    licenseSection = ""
  }else{
    licenseSection = `This project is licensed under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {fileName, description, installInstructions, usageInformation, contributionGuidelines, testInstructions, license, githubUsername, email} = data

  renderLicenseBadge(license)
  renderLicenseLink(license)
  renderLicenseSection(license)



  return `# ${fileName}

${licenseBadge}

## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
## Installation

${installInstructions}

## Usage

${usageInformation}

## License

${licenseSection}

${licenseLink}

## Contributions

${contributionGuidelines}

## Test Instructions

To run tests, run the following command: 


> ${testInstructions}


## Questions

https://github.com/${githubUsername}

For questions or business inquirys, please contact me through email: ${email}
`;
}

module.exports = generateMarkdown;
