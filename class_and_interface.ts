//class_and_interface.ts
// 类和接口

class Dog {
    public name: string
    private age: number
    public static pb_name: string = "Dog 23"
    private static pr_action:string = "Run run...."

    constructor(name: string, age: number) {
	this.name = name
	this.age = age
    }

    public getAge(): number {
	return this.age
    }
}

const d = new Dog('Mark', 23)
console.log(d.getAge())
console.log(Dog.pb_name)

// 类的继承
class Animal {
    move() {
	console.log('this animal is moving....')
    }
}

class Cat extends Animal {
    bark() {
	console.log('Meow Meow....')
    }
}

const cat = new Cat()
cat.bark()
cat.move()

// protected, private, readonly, super
//
class Person {
    protected name: string
    protected age: number
    constructor(name: string, age: number) {
	this.name = name
	this.age = age
    }
}

class Employee extends Person {
    private readonly initial: string = 'abc'
    private readonly department: string
    constructor(name: string, department: string) {
	super(name, 1)
	this.department = department
    }

    public getElevatorPitch() {
	return `Hello, My name is ${this.name} and I work in ${this.department}`
    }

    public getAge() {
	return this.age
    }
}

let howard = new Employee("Howard", "Sales")
console.log(howard.getElevatorPitch())
