const Employee = require('./Employee');

class Intern extends Employee {
    constructor(fullName, empId, email, school) {
        super(fullName, empId, email)
        this.role = 'Intern';
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;