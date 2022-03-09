const Employee = require("../lib/Employee");

// Create sample data for all of the tests
const sampleEmployee = {
    fullName: 'Chris',
    empId: 1,
    email: 'chris@test.com'
};
// Destructure the sampleEmployee object to use the variables individually.
const { fullName, empId, email } = sampleEmployee;

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an Employee object when called with the 'new' keyword", () => {
            const obj = new Employee(fullName, empId, email);

            expect(obj instanceof Employee).toEqual(true);
        });

        it("should set 'fullName' equal to the first argument when created", () => {
            const obj = new Employee(fullName, empId, email);

            expect(obj.fullName).toEqual(fullName);
        });

        it("should set 'empId' equal to the second argument when created", () => {
            const obj = new Employee(fullName, empId, email);

            expect(obj.empId).toEqual(empId);
        });

        it("should set 'email' equal to the third argument when created", () => {
            const obj = new Employee(fullName, empId, email);

            expect(obj.email).toEqual(email);
        });
    });

    describe("getName", () => {
        it("should return the 'fullName' property of the new Employee object", () => {
            const obj = new Employee(fullName, empId, email);
        
            expect(obj.getName()).toEqual(fullName);
        });
    });

    describe("getId", () => {
        it("should return the 'empId' property of the new Employee object", () => {
            const obj = new Employee(fullName, empId, email);
        
            expect(obj.getId()).toEqual(empId);
        });
    });

    describe("getEmail", () => {
        it("should return the 'email' property of the new Employee object", () => {
            const obj = new Employee(fullName, empId, email);
        
            expect(obj.getEmail()).toEqual(email);
        });
    });

    describe("getRole", () => {
        it("should return the 'role' property of the new Employee object", () => {
            const obj = new Employee(fullName, empId, email);

            expect(obj.getRole()).toEqual('Employee');
        });
    });
});
