/* Equality and Strict equality */
/*var x = "4", y = 4;
if (x == y){
    console.log("They are equal")
}
else{
    console.log("They are not equal");
}

if (x === y){
    console.log("They are strictly equal");
}
else{
    console.log("They are not strictly equal");
}
*/
/* false : false, null, 0, undefined, NaN, "" */
/* true : true, any-string, 1, -1, any-non-zero-number */
/* To return object { must be right after "return" keyword and not in next line */
/* Default values : variable-name = variable-name || default-value; because undefined is false */

/* Object */
/* var x = {firstName: "John", lastName: "Wicked"};
console.log(x); */

/* Object Within an Object */
/* var company = new Object();
company.name = "WickedTech";
console.log(company);
company.CEO = new Object();
company.CEO.firstName = "Harry";
company.CEO.lastName = "Wapyer";
console.log(company); 
console.log(company["name"];    

Why the [] notation
company["Stock Price:"] = 110 ;     */

/* Functions can have properties */
/* Primitives are passed by value and Objects by reference */

/*
var a = {x:7};
var b = a;
b.x = 8;
console.log(b);
console.log(a);
*/

/* this pointer points to the object created */
/*function Circle(radius){    /* constructor name starts with capital to indicate */
    /*this.radius = radius;   /* No return value */
    /*this.getArea = function(){ return Math.PI*Math.pow(this.radius, 2); };
}   */

/* Prototype doesnt come inside, otherwise it gets overwrited everytime object created */
/*Circle.prototype.getArea = 
    function(){
        return Math.PI*Math.pow(this.radius, 2);
    };

var c = new Circle(10);
console.log(c);
console.log(c.getArea());
*/

/*function multiplier(mult){
    var func = function factor(x){
        return mult*x;
    };
    return func;
}

var a = multiplier(10);
console.log(a(10)); */


//var names = {Name : "Rahul", Second: "Java", Third: "Snake"};

//for(prop in names){
//    console.log(prop + ": " + names[prop]);
//}


//var names = ["hey", "There"];

//for(var x in names){
  //  console.log(names[x]);
//}