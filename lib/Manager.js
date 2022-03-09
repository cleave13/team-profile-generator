const Employee = require('./Employee');

class Manager extends Employee {
    constructor(fullName, empId, email, officeNum) {
        super(fullName, empId, email)
        this.role = 'Manager';
        this.officeNum = officeNum;
    }
}

module.exports = Manager;