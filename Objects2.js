// JavaScript source code
function Person(name, age) {
    this.name = name;
    this.age = age;
};
//objects are another type of data just like strings and numbers
//objects can be used in creating arrays just like the other types
var family = new Array();
//REMEMBER TO CREATE THE OBJECT WITH THE NEW KEYWORD!!
family[0]=new Person("alice",40);
family[1]=new Person("bob",42);
family[2]=new Person("michelle",8);
family[3]=new Person("timmy",6);
//created a for loop to show that objects work just as well as other types
//here we will access the name property to print out the names stored in the array
var i;
for (i = 0; i < family.length; i++) {
    console.log("Name: " + family[i].name);
};
//you can also use objects as perameters for functions as well
//look at the function below
var ageDifference = function (person1, person2) {
    return person1.age - person1.age;
}
var alice = family[0];
var timmy = family[3];

//we will use the function to find the difference in age between the alice and billy
//this function will only work if the object has an age property
var diff = ageDifference(alice, timmy);
console.log(diff);
//typeof operator will return a string that will tell you the "type of" operand that it is evaluating
//Protip: operands are expressions representing the object or primitive whose type is to be returned
//Protip II: primitives are data that are not objects and have no methods; JS has 6: string,number,boolean,null,undefined,symbol
console.log(typeof family); //should print "array"
console.log(typeof family[0]) //should print "object"
console.log(typeof family[0].age) //should print "number"
console.log(typeof family[0].name) //should print "string"
//hasOwnProperty() method is use to determine whether the object has the specified property
//will return a boolean
family.hasOwnProperty("age"); //should return true
family.hasOwnProperty("address"); //should return false
//a for/in loop can be used to work with the properties in an object
for (var prop in family) {
    console.log(prop);
};
//for/in loops can be used to get the values as well
//REMEMBER THE BRACKET NOTATION
for (var value in family) {
    console.log(value);
}
