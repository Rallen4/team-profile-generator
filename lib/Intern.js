// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

module.exports = class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        // console.log(this.role)
        return "Intern";
    };

    getSchool() {
        console.log(this.school)
        return this.school
    }
}