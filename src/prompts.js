const role = 'Manager';
const prompts = {
    employee: [
        {
            type: 'input',
            message: 'Enter the member\'s name:',
            name: 'memberName',
        },
        {
            type: 'input',
            message: 'Enter the member\'s employee ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter the member\'s email address:',
            name: 'email',
        }
    ],
    manager: [
        {
            type: 'input',
            message: 'Enter the member\'s office number:',
            name: 'office',
        }
    ],
    engineer: [
        {
            type: 'input',
            message: 'Enter the member\'s github username:',
            name: 'github',
        }
    ],
    intern: [
        {
            type: 'input',
            message: 'Enter the name of the member\'s school:',
            name: 'school',
        }
    ],
    cont: [
        {
            type: 'list',
            message: 'Select another type of team member to add:',
            choices: ['Engineer', 'Intern', 'I\'m finished building my team'],
            name: 'type',
        }
    ]
}

module.exports = { prompts, role };