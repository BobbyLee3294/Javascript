// JavaScript source code

//defining a object and its properties
var objectName = new Object();
//the object constructor by default has no methods or properties unless added afterward
objectName.propertyName = "property";
//defining a method
objectName.methodName = function (newProperty) {
    objectName.propertyName = newProperty;
};
objectName.methodName();
//custom constructors
function customObject(propertyA, propertyB) {
    this.propertyA = propertyA;
    this.propertyB = propertyB;
    //you can add new properties that aren't defined in the parameters above
    //these properties will always have this value assigned unless changed elsewhere
    this.propertyC = "another string";
    //defining a method in the constructor
    this.functionName = function () {
        //insert code
    };
};
//creating a new object
var Variable = new customObject("string", "number");
//calling the method which is the same as calling a function
objectName.methodName();