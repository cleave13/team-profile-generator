const Intern = require("../lib/Intern");

// Create sample data for all of the tests
const sampleIntern = {
    fullName: 'Chris',
    empId: 3,
    email: 'chris@test.com',
    school: 'University of Colorado'
};
// Destructure the sampleIntern object to use the variables individually.
const { fullName, empId, email, school } = sampleIntern;

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an Intern object when called with the 'new' keyword", () => {
            const obj = new Intern(fullName, empId, email, school);

            expect(obj instanceof Intern).toEqual(true);
        });

        it("should inherit 'fullName' from the super class when created", () => {
            const obj = new Intern(fullName, empId, email, school);

            expect(obj.fullName).toEqual(fullName);
        });

        it("should inherit 'empId'from the super class when created", () => {
            const obj = new Intern(fullName, empId, email, school);

            expect(obj.empId).toEqual(empId);
        });

        it("should inherit 'email' from the super class when created", () => {
            const obj = new Intern(fullName, empId, email, school);

            expect(obj.email).toEqual(email);
        });
        it("should set 'school' equal to the fifth argument when created", () => {
            const obj = new Intern(fullName, empId, email, school);

            expect(obj.school).toEqual(school);
        });
    });

    describe("getName", () => {
        it("should return the 'fullName' property of the new Intern object", () => {
            const obj = new Intern(fullName, empId, email, school);
        
            expect(obj.getName()).toEqual(fullName);
        });
    });

    describe("getId", () => {
        it("should return the 'empId' property of the new Intern object", () => {
            const obj = new Intern(fullName, empId, email, school);
        
            expect(obj.getId()).toEqual(empId);
        });
    });

    describe("getEmail", () => {
        it("should return the 'email' property of the new Intern object", () => {
            const obj = new Intern(fullName, empId, email, school);
        
            expect(obj.getEmail()).toEqual(email);
        });
    });

    describe("getRole", () => {
        it("should return the 'role' property of the new Intern object", () => {
            const obj = new Intern(fullName, empId, email, school);

            expect(obj.getRole()).toEqual('Intern');
        });
    });

    describe("getSchool", () => {
        it("should return the 'school' property of the new Intern object", () => {
            const obj = new Intern(fullName, empId, email, school);

            expect(obj.getSchool()).toEqual(school);
        });
    });
});
