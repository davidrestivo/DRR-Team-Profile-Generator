const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "davidrestivo";
    const employeeInstance = new Engineer("David", 2, "davidrestivo27@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "JamesLJenks";
    const employeeInstance = new Engineer("David", 2, "davidrestivo27@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("David", 2, "davidrestivo27@gmail.com", "davidrestivo");
    expect(employeeInstance.getRole()).toBe(returnValue);
});