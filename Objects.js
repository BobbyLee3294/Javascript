// JavaScript source code
//defining a object and its properties
//the literal notation
var objectName={
    "propertyName1":"Some value",
    "propertyName2":"Another value",
    "propertyName3":"value"
};
//accessing the properties using the dot notation
var prop1value=objectName.propertyName1;
//using the bracket notation
//keep in mind that when accessing with brackets remember to use quotes for the property name
var prop2value=objectName["propertyName2"];
//accessing the properties using other varibles 
//this can be very helpful for looking up properties
var propName="propertyName1";
//take notice here that quotes are not used here because we are using the VALUE of the variable, not the name
var prop2val=objectName[propertyName2];
//updating object properties
objectName.propertyName1="Some other value"; //dot or bracket notation works here
objectName.propertyName4 = "A new value"; //you can also add properties this way 
delete objectName.propertyName3; //you can delete properties as well dot or bracket works here
//the object constructor by default has no methods or properties unless added within the parameters or in the lines to follow
var objectName2=new Object();
objectName2.propertyName1 = "property";
//defining a method
objectName.methodName = function (newProperty) {
    objectName.propertyName1 = newProperty;
};
objectName.methodName();
//custom constructors
function customObject(propertyA, propertyB) {
    this.propertyA = propertyA;
    this.propertyB = propertyB;
    //you can add new properties that aren't defined in the parameters above
    //these properties will always have this value assigned unless changed later on
    this.propertyC = "another string";
    //defining a method in the constructor
    this.functionName = function () {
        //insert code
    };
};
//creating a new object
//the keyword new is like making a copy of the custom constructor
var Variable = new customObject("string", "number");
//calling the method which is the same as calling a function
objectName.methodName();
