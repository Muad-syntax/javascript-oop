function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.sayHallo = function(name){
        console.info(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`)
    }
}

const name1 = new Person("Ahmad", "Maliki")
name1.sayHallo("Joko")
// console.log(name1)


const name2 = new Person("Maulana", "Ahmad")
name2.sayHallo("Wowo")
// console.log(name2)

