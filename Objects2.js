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
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

//we will use the function to find the difference in age between the alice and billy
//this function will only work if the object has an age property
var diff = ageDifference(alice, billy);
console.log(diff);