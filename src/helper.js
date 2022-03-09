const helper = {
    employeePrompts: [
        {
            type: 'input',
            message: 'Enter the ' + role + '\'s name:',
            name: 'roleName',
        },
        {
            type: 'input',
            message: 'Enter the ' + role + '\'s employee ID:',
            name: 'empId',
        },
        {
            type: 'input',
            message: 'Enter the ' + role + '\'s email address:',
            name: 'email',
        }
    ],
    managerPrompts: [
        {
            type: 'input',
            message: 'Enter the ' + role + '\'s office number:',
            name: 'officeNum',
        }
    ],
    engineerPrompts: [
        {
            type: 'input',
            message: 'Enter the ' + role + '\'s github username:',
            name: 'github',
        }
    ],
    internPrompts: [
        {
            type: 'input',
            message: 'Enter the name of the ' + role + '\'s school:',
            name: 'school',
        }
    ],
    continuePrompts: [
        {
            type: 'list',
            message: 'Select another type of team member to add:',
            choices: ['Engineer', 'Intern', 'I\'m finished building my team'],
            name: 'type',
        }
    ]
}

module.exports.role = role;
module.exports = helper;