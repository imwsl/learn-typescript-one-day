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

/// interface
///
/// define types
///

interface Point {
    x: number;
    y: number;
    z?:number;
}

let pt: Point = {x: 1, y: 2, z: 1}
console.log(`pt.x -> ${pt.x} pt.y -> ${pt.y} pt.z -> ${pt.z}`)

class NewPoint implements Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
	this.x = x;
	this.y = y;
    }

    public getPoint(): object {
	return {
	    x: this.x,
	    y: this.y,
	}
    }
}

const p = new NewPoint(3, 4)
const p1 = p.getPoint()
//console.log(`p1.x -> ${p1.x} p1.y -> ${p1.y}`)
//console.log(p1.x) // WHY

/// interface & interface
///
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

class Rectangle implements Square {
    color:string;
    sideLength: number;
    constructor(color: string, sideLength: number) {
	this.color = color;
	this.sideLength = sideLength;
    }

    public printAll(): void {
	console.log(`color ${this.color} sidelength ${this.sideLength}`)
    }
}

/// type
/// 定义一个新的类型

type myType = string | number | boolean
const foo: myType = "Hello World!!!"

/// type defined a function

type hello = (msg:string) => void

/// type defined a object
type WebSite = {
    url:string;
    title:string;
}

// namespace
//

namespace Validator {

    let name = "Validator";

    export getName = function() {
	return name
    }
}

console.log(Validator.name)
