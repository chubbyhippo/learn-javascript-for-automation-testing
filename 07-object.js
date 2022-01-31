let person = {
    firstname: "John", lastName: "Shepard", fullname: function () {
        console.log(this.firstname + " " + this.lastName);
    },
}

console.log(person);
person.gender = "male"
console.log(person);
for (let personKey in person) {
    console.log(personKey);
    console.log(person[personKey]);
}

person.fullname();

class Person {
    firstname;
    lastname;

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let newPerson = new Person()
console.log(newPerson);
console.log(newPerson);
Person.prototype.age = 22

console.log(Person.prototype);
