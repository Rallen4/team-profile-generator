// TODO: Write code to define and export the Employee clas
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getEmployee() {
        console.log(this.name);
        return this.name
    }
}

