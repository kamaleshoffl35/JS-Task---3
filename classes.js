//Create a Person class with name and age properties, and a method introduce() that prints a greeting message.//

class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduce() {
        console.log(`Hi i am ${this.name} I am ${this.age}`)
    }
}
let person1 = new person("kamalesh", "21")
person1.introduce()

//Create a Car class with properties brand, model, and year, and a method displayInfo().//

class car{
    constructor(brand,model,year){
        this.brand = brand
        this.model = model
        this.year = year
    }

    displayInfo(){
        console.log(`cars : ${this.brand}  ${this.model} year : ${this.year}`)
    }
}
let details = new car('Rolls','Royce', 2022)

details.displayInfo()

//Calculate the area of Rectangle//

class Rectangle{
    constructor(width,height){
        this.width = width
        this.height = height
    }
    area(){
        console.log(`area : ${this.height * this.width}`)
    }

}
const result = new Rectangle(5,6)
result.area()

// Create a Student class with properties name and marks, and a method getGrade() that returns the grade based on marks.//

class student{
    constructor(name,marks){
        this.name = name
        this.marks = marks
    }
    getGrade(){
        if(this.marks >= 80)
            return "A"
        if(this.marks >= 70)
            return "B"
        if(this.marks >= 60)
            return "C"

    }
}
let student1 = new student('Kamalesh','95')
console.log(`${student1.name} Grade : ${student1.getGrade()}`)

//Create an Animal class and extend it to Dog and Cat classes, each having its own method like bark() or meow().//

class Animal{
    constructor(name){
        this.name = name
    }
    eat()
    {
        console.log(`${this.name} is eating`)
    }
}
class dog extends Animal{
    bark()
    {
        console.log(`${this.name} is barking`)
    }
}
class cat extends Animal{
    meow()
    {
        console.log(`${this.name} is meow`)
    }
}
const dog1 = new dog('Buddy')
dog1.bark()
dog1.eat()

////
