// Import
const inquirer = require('inquirer');

// Variables
var managerQuestions = ['What is the manager\'s name?', 'What is the manager\'s employee ID?', 'What is the manager\'s email address?', 'What is the manager\'s office number?'];
var engineerQuestions = ['What is the engineer\'s name?', 'What is the engineer\'s employee ID?', 'What is the engineer\'s email address?', 'What is the engineer\'s Github link?'];
var internQuestions = ['What is the intern\'s name?', 'What is the intern\'s employee ID?', 'What is the intern\'s email address?', 'What is the intern\'s school?'];

var employeeName = '';
var employeeRole = '';
var employeeID = '';
var employeeEmail = '';
var employeeInfo = '';

var employeeSelection = '';
var newEmployee;

// Classes
class Employee {
  constructor(employeeName, employeeID, employeeEmail){
    this.employeeName = employeeName;
    this.employeeID = employeeID;
    this.employeeEmail = employeeEmail;
  }

  getName(){
    return this.employeeName;
  }
  getID(){
    return this.employeeID;
  }
  getEmail(){
    return this.employeeEmail;
  }
  getRole(){
    return 'Employee';
  }
}

// Sub-Classes
class Manager extends Employee {
  constructor(employeeName, employeeID, employeeEmail, officeNumber){
    super(employeeName, employeeID, employeeEmail);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber(){
    return this.officeNumber;
  }
  getRole(){
    return 'Manager';
  }
}

class Engineer extends Employee {
  constructor(employeeName, employeeID, employeeEmail, github){
    super(employeeName, employeeID, employeeEmail);
    this.github = github;
  }
  getGithub(){
    return this.github
  }
  getRole(){
    return 'Engineer';
  }
}

class Intern extends Employee {
  constructor(employeeName, employeeID, employeeEmail, school){
    super(employeeName, employeeID, employeeEmail);
    this.school = school;
  }
  getSchool(){
    return this.school
  }
  getRole(){
    return 'Intern';
  }
}

// HTML Skeleton
var htmlSkeletonStart = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>

<header>
    <div class='flex' id="headerBox">
        <h1 id="header">My Team</h1>
    </div>
</header>

<body>
`
var htmlSkeletonEnd = `  
</body>

</html>
`
// Functions
function createHTML(data) {
    fs.writeFile(filename, data, (err) =>
      err ? console.log(err) : console.log('Congratulations, your HTML file was successfully created')
    );
}

function appendEmployeeCard() {
  var htmlEmployeeCard = `
<div class="flex">
        <div class = 'employeeCard flex'>
            <div class = 'cardTop flex'>
                <h1>${newEmployee.getName()}</h1>
                <h2>${newEmployee.getRole()}</h2>
            </div>
            <div class = 'cardBottom flex'>
                <p>ID: ${newEmployee.getID()}</p>
                <p>E-mail: ${newEmployee.getEmail()}</p>`
+ appendEmployeeSpecific
`
            </div>
        </div>
    </div>`;

htmlSkeletonStart += htmlEmployeeCard;
}

function appendEmployeeSpecific(){
  if(newEmployee.getRole() == 'Manager'){
    return `
                <p>Office Number: ${newEmployee.getOfficeNumber()}</p>  
`
  }
  else if(newEmployee.getRole() == 'Engineer'){
    return `
                <p>Office Number: ${newEmployee.getGithub()}</p>  
`
  }
  else if(newEmployee.getRole() == 'Intern'){
    return `
    <p>Office Number: ${newEmployee.getSchool()}</p>  
`
  }
}


function managerFunction(){
 inquirer
 .prompt([
    {
        type: 'input',
        name: 'managerName',
        message: managerQuestions[0],
    },
    {
      type: 'input',
      name: 'managerID',
      message: managerQuestions[1],
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: managerQuestions[2],
    },
    {
      type: 'input',
      name: 'managerOffice',
      message: managerQuestions[3],
    }
 ])
 .then((data) => {
  newEmployee = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice);
  appendEmployeeCard();
 })
 
}

function engineerFunction(){
  inquirer
  .prompt([
    {
        type: 'input',
        name: 'engineerName',
        message: engineerQuestions[0],
    },
    {
      type: 'input',
      name: 'engineerID',
      message: engineerQuestions[1],
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: engineerQuestions[2],
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: engineerQuestions[3],
    }
 ])
 .then((data) => {
  newEmployee = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub)
  appendEmployeeCard();
 })
}

function internFunction(){
  inquirer
  .prompt([
    {
        type: 'input',
        name: 'internName',
        message: internQuestions[0],
    },
    {
      type: 'input',
      name: 'internID',
      message: internQuestions[1],
    },
    {
      type: 'input',
      name: 'internEmail',
      message: internQuestions[2],
    },
    {
      type: 'input',
      name: 'internOffice',
      message: internQuestions[3],
    }
 ])
 .then((data) => {
  employeeName = data.internName;
  employeeRole = 'Intern';
  employeeID = data.internID;
  employeeEmail = data.internEmail;
  employeeInfo = data.internOffice;
  appendEmployeeCard();
  console.log(htmlSkeletonStart);
 })
}

function addEmployee(){
  inquirer
  .prompt([
    {
        type: 'list',
        name: 'addEmployeePrompt',
        message: 'Would you like to add an Engineer, Intern, or finish?',
        choices: ['Engineer', 'Intern', 'Finish']
    },
  ])
  .then((data) => {
    employeeSelection = data.addEmployeePrompt;
    if(employeeSelection == 'Engineer'){

    }
    else if (employeeSelection == 'Intern'){

    }
    else {

    }
  })
}

function addAnother(){
  inquirer
  .prompt([
    {
        type: 'list',
        name: 'continue',
        message: 'Would you like to add another',
    }
  ])
}

// function add

// function init(){
//   managerFunction();
//   var employeeType = '';
//   var i = 1;
//   addEmployee();
//   if (employeeSelection = 'Finish'){

//   }
//   while(i = 1) {
//     if(employeeType == 'engineer'){
//       engineerFunction();
//     }
//     else if(employeeType == 'intern'){
//       internFunction();
//     }
  
//   }
// }


managerFunction();
// engineerFunction();
// internFunction();
// init();