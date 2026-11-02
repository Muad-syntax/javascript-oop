function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function(name){
        console.info(`Hello ${name}, My name is ${this.firstName}`)
    }
}

function Manager(firstName, lastName){
    this.lastName = lastName;
    Employee.call(this, firstName);
}

const name1 = new Manager("Ahmad", "Maliki")
console.info(name1)