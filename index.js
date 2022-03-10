// GLOBAL VARIABLES
// import inquirer package and standard node.js file system
const inquirer = require('inquirer');
const fs = require('fs');

// import custom classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import inquirer prompts from helper.js file
const helper = require('./src/helper')
let role = helper.role;
console.log(role);

// FUNCTIONS
function setPrompts(role){
    
    let prompts = [];
    console.log(role);

    if(role === 'Manager') {
        prompts = helper.prompts.employeePrompts.concat(helper.prompts.managerPrompts, helper.prompts.continuePrompts);
    } 
    
    else if (role === 'Engineer') {
        prompts = helper.prompts.employeePrompts.concat(helper.prompts.engineerPrompts, helper.prompts.continuePrompts);
    } 
    
    else if (role === 'Intern') {
        prompts = helper.prompts.employeePrompts.concat(helper.prompts.internPrompts, helper.prompts.continuePrompts);
    }

    console.log(prompts);
    return prompts;
}

function runPrompts() {
    inquirer
        .prompt(setPrompts(role))
        .then((data) => {
            console.log(data);
            if(!data.type.includes('finish')) {
                role = data.type;
                runPrompts(role);
            }
            // const filename = 'index.html';
            // const {} = data;

            // let licensePath = ''
            // const content = ``

            // fs.writeFile(filename, content, (err) =>
            //     err ? console.log(err) : console.log('Success!')
            // );
        });
}

// LOGIC
runPrompts();
