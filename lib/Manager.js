// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

module.exports = class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        // console.log(this.role)
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
