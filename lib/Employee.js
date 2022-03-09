class Employee {
    constructor(fullName, empId, email) {
        this.fullName = fullName;
        this.empId = empId;
        this.email = email;
        this.role = 'Employee';
    }

    getName() {
        return this.fullName;
    }

    getId() {
        return this.empId;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;