const Manager = require("../lib/Manager");

// Create sample data for all of the tests
const sampleManager = {
    fullName: 'Chris',
    empId: 4,
    email: 'chris@test.com',
    officeNum: 10
};
// Destructure the sampleManager object to use the variables individually.
const { fullName, empId, email, officeNum } = sampleManager;

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an Manager object when called with the 'new' keyword", () => {
            const obj = new Manager(fullName, empId, email, officeNum);

            expect(obj instanceof Manager).toEqual(true);
        });

        it("should inherit 'fullName' from the super class when created", () => {
            const obj = new Manager(fullName, empId, email, officeNum);

            expect(obj.fullName).toEqual(fullName);
        });

        it("should inherit 'empId'from the super class when created", () => {
            const obj = new Manager(fullName, empId, email, officeNum);

            expect(obj.empId).toEqual(empId);
        });

        it("should inherit 'email' from the super class when created", () => {
            const obj = new Manager(fullName, empId, email, officeNum);

            expect(obj.email).toEqual(email);
        });
        it("should set 'officeNum' equal to the fifth argument when created", () => {
            const obj = new Manager(fullName, empId, email, officeNum);

            expect(obj.officeNum).toEqual(officeNum);
        });
    });

    describe("getName", () => {
        it("should return the 'fullName' property of the new Manager object", () => {
            const obj = new Manager(fullName, empId, email, officeNum);
        
            expect(obj.getName()).toEqual(fullName);
        });
    });

    describe("getId", () => {
        it("should return the 'empId' property of the new Manager object", () => {
            const obj = new Manager(fullName, empId, email, officeNum);
        
            expect(obj.getId()).toEqual(empId);
        });
    });

    describe("getEmail", () => {
        it("should return the 'email' property of the new Manager object", () => {
            const obj = new Manager(fullName, empId, email, officeNum);
        
            expect(obj.getEmail()).toEqual(email);
        });
    });

    describe("getRole", () => {
        it("should return the 'role' property of the new Manager object", () => {
            const obj = new Manager(fullName, empId, email, officeNum);

            expect(obj.getRole()).toEqual('Manager');
        });
    });
});
