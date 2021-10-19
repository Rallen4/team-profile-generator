const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./util/generateHtml");
const fs = require("fs");
const path = require("path");
const outputDirectory = path.resolve(__dirname, "output");
const outputPath = path.join(outputDirectory, "team.html");

const team = [];

// function userQuestions() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         message: "Select type of team member to add.",
//         name: "selections",
//         choices: [
//           "Add Intern",
//           "Add Manager",
//           "Add Engineer",
//           "No team members left to add",
//         ],
//       },
//     ])
//     .then((ans) => {
//       switch (ans.selections) {
//         case "Add Intern":
//           console.log("Intern added!");
//           addIntern();
//           break;

//         case "Add Manager":
//           console.log("Manager added!");
//           addManager();
//           break;

//         case "Add Engineer":
//           console.log("Engineer added!");
//           addEngineer();
//           break;

//         case "No team members left to add":
//           console.log("Team building complete!");
//           console.log(`${team}`);
//           console.log(team[0]);
//           // team.forEach((team) => {
//             console.log(team.role + " role");
//           });
//           generateHTML();
//           break;

//         default:
//           console.log("See ya!");
//           break;
//       }
//     });
// }

function addManager() {
    inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
      console.log(name);
      const man = new Manager(name, id, email, officeNumber);
      team.push(man);
      console.log(team);
      console.log(team.role);
      userQuestions();
    });
}

function addEngineer() {
    inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "officeNumber"
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
      console.log(name);
      const eng = new Engineer(name, id, email, officeNumber);
      team.push(eng);
      console.log(team);
      console.log(team.role);
      userQuestions();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "Which school did you graduate from?",
        name: "school",
      },
    ])
    .then(({ name, id, email, school }) => {
      console.log(name);
      const int = new Intern(name, id, email, school);
      team.push(int);
      console.log(team);
      console.log(team.role);
      userQuestions();
    });
}

function userQuestions() {
  inquirer.prompt([
    {
      type: "list",
      message: "Who would you like to add to your team?",
      choices: ["Engineer", "Intern", "Manager", "Nobody else"],
      name: "build"
    }

  ]).then(ans=> {
    switch(ans.build) {
      case "Manager":
      addManager();
      break;

      case "Engineer":
      addEngineer();
      break;

      case "Intern":
      addIntern();
      break;

      default:
      buildTeam();
      break;
    }

  })
    
}

function buildTeam() {
  console.log(team);
  fs.writeFileSync(outputPath, generateHTML(team), "utf-8")
}

userQuestions();
// .then(ans)
// fs.writeFile(`index(${team}).html`, generateHTML);

