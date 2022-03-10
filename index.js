// GLOBAL VARIABLES
// import inquirer package and standard node.js file system
const inquirer = require('inquirer');
const fs = require('fs');

// import custom classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import inquirer prompts from prompts.js file
const promptFile = require('./src/prompts')
const template = require('./src/template')

// define global variables used by the application
let role = promptFile.role;
const { employee, manager, engineer, intern, cont } = promptFile.prompts
const team = [];

// FUNCTIONS DECLARATIONS
function setPrompts(role){
    
    let prompts = [];

    switch (role) {
        case 'Manager':
            prompts = employee.concat(manager, cont);
            break;

        case 'Engineer':
            prompts = employee.concat(engineer, cont);
            break;
        
        case 'Intern':
            prompts = employee.concat(intern, cont);
            break;
    
        default:
            break;
    }

    return prompts;
}

function buildDocument(team) {
    let content = template.docStart;
    for (let i = 0; i < team.length; i++) {
        const member = team[i];
        if(member instanceof Manager) {
            content = content + template.managerCard(member)
        } else if(member instanceof Engineer) {
            content = content + template.engineerCard(member)
        } else if(member instanceof Intern) {
            content = content + template.internCard(member)
        }
    }
    content = content + template.docEnd;

    return content
}

function runPrompts() {
    inquirer
        .prompt(setPrompts(role))
        .then((data) => {
            const { memberName, id, email, office, github, school, type } = data
            switch (role) {
                case 'Manager':
                    member = new Manager(memberName, id, email, office);
                    break;
        
                case 'Engineer':
                    member = new Engineer(memberName, id, email, github);
                    break;
                
                case 'Intern':
                    member = new Intern(memberName, id, email, school);
                    break;
            
                default:
                    break;
            };
            team.push(member);
            console.log(team);

            if(!type.includes('finish')) {
                role = type;
                runPrompts(role);
            } else {
                const html = buildDocument(team);
                const filename = './dist/index.html';

                fs.writeFile(filename, html, (err) =>
                    err ? console.log(err) : console.log('Success!')
                );
            }
            
        });
}

// LOGIC
runPrompts();
