// JavaScript source code
//JS will define the prototype for class automatically
function Person(name, age) {
    this.name = name; 
    this.age = age;
}
//everything mentioned in the constructor above is considered to be part of the prototype of Person
//introduce alice
var alice = new Person("Alice", 42);
//anything added to the object afterward is considered to be not be a part of the prototype
alice.speak = function() {
    console.log("Hello! My name is " + Person.name);
}
alice.speak();
// introduce bob
var bob = new Person("Bob", 24);
//so in order for bob "speak", you must tell him how to speak
bob.speak = function() {
    console.log("Hello! My name is " + Person.name)
}
//to help with this, we could change the prototype by using .prototype
Person.prototype.speak = function() {
    console.log("Hello! My name is " + this.name); //now .speak is part of the prototype
}
//whenever there is "X is a Y" relationship with your classes such as this
function Animal(name, numLegs) {//<--y
    this.name = name;
    this.numLegs = numLegs;
    var isAlive = true;//<--have we have a private variable; this can only be accessed within the class
    //you can also have private methods as well
    var giveLife = function () {
        return isAlive;
    };
    this.askPermission = function () {//<--we can use a method that is inside the class to return the value of the private variable/method
        return giveLife;//<--take note that we are returning the method itself not the result, so NO parentheses are needed
    };
}
function Penguin(name) {//<--x
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle Waddle";
}
//you can set the property of x to be a new instance of y like this
Penguin.prototype = new Animal();//<--classWillInherit.prototype = new fromThisClass()
//the Penguin class will inherit the properties and methods from the Animal class
Emperor.prototype = new Penguin();
//if JS encounters something it can't find in the current class's methods or properties,
//its looks up the "prototype chain" to see if it's defined in a class that it inherits from.
//This keeps going upward until it stops all at the top which is Object.prototype.
//By default, all classes inherit directly from the Object class until we change it's prototype.
//all properties of an object are automatically public, meaning that they can be accessed outside of the class
var emperor = new Emperor("Jonny");
console.log(emperor.isAlive) //will return undefined
var methodForLife = emperor.askPermission()
var livingEmperor = emperor.giveLife();
console.log(livingEmperor) //will return undefined
