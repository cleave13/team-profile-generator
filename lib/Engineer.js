const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(fullName, empId, email, github) {
        super(fullName, empId, email)
        this.role = 'Engineer';
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;