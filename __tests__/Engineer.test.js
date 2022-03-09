const Engineer = require("../lib/Engineer");

// Create sample data for all of the tests
const sampleEngineer = {
    fullName: 'Chris',
    empId: 2,
    email: 'chris@test.com',
    github: 'Cleave13'
};
// Destructure the sampleEngineer object to use the variables individually.
const { fullName, empId, email, github } = sampleEngineer;

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an Engineer object when called with the 'new' keyword", () => {
            const obj = new Engineer(fullName, empId, email, github);

            expect(obj instanceof Engineer).toEqual(true);
        });

        it("should inherit 'fullName' from the super class when created", () => {
            const obj = new Engineer(fullName, empId, email, github);

            expect(obj.fullName).toEqual(fullName);
        });

        it("should inherit 'empId'from the super class when created", () => {
            const obj = new Engineer(fullName, empId, email, github);

            expect(obj.empId).toEqual(empId);
        });

        it("should inherit 'email' from the super class when created", () => {
            const obj = new Engineer(fullName, empId, email, github);

            expect(obj.email).toEqual(email);
        });
        it("should set 'github' equal to the fifth argument when created", () => {
            const obj = new Engineer(fullName, empId, email, github);

            expect(obj.github).toEqual(github);
        });
    });

    describe("getName", () => {
        it("should return the 'fullName' property of the new Engineer object", () => {
            const obj = new Engineer(fullName, empId, email, github);
        
            expect(obj.getName()).toEqual(fullName);
        });
    });

    describe("getId", () => {
        it("should return the 'empId' property of the new Engineer object", () => {
            const obj = new Engineer(fullName, empId, email, github);
        
            expect(obj.getId()).toEqual(empId);
        });
    });

    describe("getEmail", () => {
        it("should return the 'email' property of the new Engineer object", () => {
            const obj = new Engineer(fullName, empId, email, github);
        
            expect(obj.getEmail()).toEqual(email);
        });
    });

    describe("getRole", () => {
        it("should return the 'role' property of the new Engineer object", () => {
            const obj = new Engineer(fullName, empId, email, github);

            expect(obj.getRole()).toEqual('Engineer');
        });
    });

    describe("getGithub", () => {
        it("should return the 'github' property of the new Engineer object", () => {
            const obj = new Engineer(fullName, empId, email, github);

            expect(obj.getGithub()).toEqual(github);
        });
    });
});
