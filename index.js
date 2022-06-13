// Import
const inquirer = require('inquirer');

// Variables
var managerQuestions = ['What is the manager\'s name?', 'What is the manager\'s employee ID?', 'What is the manager\'s email address?', 'What is the manager\'s office number?'];
var engineerQuestions = ['What is the engineer\'s name?', 'What is the engineer\'s employee ID?', 'What is the engineer\'s email address?', 'What is the engineer\'s Github link?'];
var internQuestions = ['What is the intern\'s name?', 'What is the intern\'s employee ID?', 'What is the intern\'s email address?', 'What is the intern\'s school?'];

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

// var htmlEmployeeCard = `
// <div class="flex">
//         <div class = 'employeeCard flex'>
//             <div class = 'cardTop flex'>
//                 <h1>${employeeName}</h1>
//                 <h2>${employeeRole}</h2>
//             </div>
//             <div class = 'cardBottom flex'>
//                 <p>ID: ${employeeID}</p>
//                 <p>E-mail: ${employeeEmail}</p>
//                 <p>${employeeInfo}</p>
//             </div>
//         </div>
//     </div>
// `

// Functions
function createHTML(data) {
    fs.writeFile(filename, data, (err) =>
      err ? console.log(err) : console.log('Congratulations, your HTML file was successfully created')
    );
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
}

function engineerFunction(){
  inquirer
  .prompt([
    {
        type: 'input',
        name: 'managerName',
        message: engineerQuestions[0],
    },
    {
      type: 'input',
      name: 'managerID',
      message: engineerQuestions[1],
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: engineerQuestions[2],
    },
    {
      type: 'input',
      name: 'managerOffice',
      message: engineerQuestions[3],
    }
 ])
}

function internFunction(){
  inquirer
  .prompt([
    {
        type: 'input',
        name: 'managerName',
        message: internQuestions[0],
    },
    {
      type: 'input',
      name: 'managerID',
      message: internQuestions[1],
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: internQuestions[2],
    },
    {
      type: 'input',
      name: 'managerOffice',
      message: internQuestions[3],
    }
 ])
}


// engineerFunction();
// internFunction();
// init();