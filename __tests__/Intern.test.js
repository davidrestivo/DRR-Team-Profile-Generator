// My Attempt
const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "SMU";
    const employeeInstance = new Intern("David", 2, "davidrestivo27@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "SMU";
    const employeeInstance = new Intern("David", 2, "davidrestivo27@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("David", 2, "davidrestivo27@gmail.com", "SMU");
    expect(employeeInstance.getRole()).toBe(returnValue);
});