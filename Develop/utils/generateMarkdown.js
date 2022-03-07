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
  //licensing info missing 
  return `# ${data.title}

  <a href="https://img.shields.io/badge/License-${data.license}-brightgreen"><img src="https://img.shields.io/badge/License-${data.license}-brightgreen"></a>

  ### Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test Instructions](#test-instructions)
  - [Contact Information](#contact-information)


  ### Installation
  ${data.install}


  ### Usage
  ${data.usage}


  ### License
  This project is licensed under ${data.license}


  ### Contribution
  ${data.contributors}


  ### Test-Instructions
  ${data.test}

  ### Contact-Information
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
  `;
}

module.exports = generateMarkdown;
