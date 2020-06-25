/*
// Triple add function
function tripleAdd(num1) {
    console.log(num1)
    return function (num2) {
        return function (num3) {
            console.log(num1 + num2 + num3);
        }
    }
}

tripleAdd(10)(20)(30);


// Output of below code

for(var i=0;i<4;i++){
   setTimeout(() => {
       console.log('i value '+i);
   }, 1000);
}


// Find the length of the function
function addNum(a,b,c){
    var sum= a+b;
    return sum;
}

console.log(addNum.length)



// IIFE --> Immediate invoking function expression

(function addNum(num1){
    console.log(num1+5);
})(5);



// Write a function for closures concept. Access variables from outer function variable and global variable.

const globalVariable= 'global var';

function outerFunc(param1){
    const variable= 'var one';

    function innerFunc(param2){
        const variable2= 'var two';

        console.log('globalVariable:', globalVariable);
        console.log('variable1', variable);
        console.log('variable2', variable2);
        console.log('param1', param1);
        console.log('param2', param2);
    }

    innerFunc('param one');
}

outerFunc('param two');


// Write the output of below code

(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

  

  // Write the output of below code
  function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log('function 1', foo1());
console.log('function 2', foo2());


// Write the output of below code
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);



// "this" keyword sample example

var person= {
    name: "Surya",
    age: "20",
    company: "IBM",
    getData: function(){
        return this.name+' age is '+this.age
    }
}

console.log(person.name);
console.log(person.getData());

// Hoisting for functions

console.log(addNum(5));   //---->   Will get output as "addNum is not a function"

var addNum= function(num1){
    return num1+5;
}

// Write the output of below code

var myCar = {
    color: "blue",
    logColor: function(){
        var self= this;
        console.log("In logColor- this.color "+this.color);
        console.log("In logColor- self.color "+self.color);
     (function(){
         console.log("In IIFE - this.color "+ this.color);
         console.log("In IIFE -self.color "+ self.color);
     })()
    }
}

myCar.logColor();

// Write the output of code

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));



console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

/* Explanation: 

Example 1: 1 + "2" + "2" Outputs: "122" Explanation: The first operation to be performed in 1 + "2". 
Since one of the operands ("2") is a string, JavaScript assumes it needs to perform string concatenation and 
therefore converts the type of 1 to "1", 1 + "2" yields "12". Then, "12" + "2" yields "122".

Example 2: 1 + +"2" + "2" Outputs: "32" Explanation: Based on order of operations, 
the first operation to be performed is +"2" (the extra + before the first "2" is treated 
as a unary operator). Thus, JavaScript converts the type of "2" to numeric and then applies the 
unary + sign to it (i.e., treats it as a positive number). As a result, the next operation is 
now 1 + 2 which of course yields 3. But then, we have an operation between a number and a 
string (i.e., 3 and "2"), so once again JavaScript converts the type of the numeric value to a
 string and performs string concatenation, yielding "32".

Example 3: 1 + -"1" + "2" Outputs: "02" Explanation: The explanation here is identical to the prior example, 
except the unary operator is - rather than +. So "1" becomes 1, which then becomes -1 when the - is applied, 
which is then added to 1 yielding 0, which is then converted to a string and concatenated with the final "2"
 operand, yielding "02".

Example 4: +"1" + "1" + "2" Outputs: "112" Explanation: Although the first "1" operand is typecast to 
a numeric value based on the unary + operator that precedes it, it is then immediately converted 
back to a string when it is concatenated with the second "1" operand, which is then concatenated with the 
final "2" operand, yielding the string "112".

Example 5: "A" - "B" + "2" Outputs: "NaN2" Explanation: Since the - operator can not be applied to strings,
 and since neither "A" nor "B" can be converted to numeric values, "A" - "B" yields NaN whichis then 
 concatenated with the string "2" to yield “NaN2”.

Example 6: "A" - "B" + 2 Outputs: NaN Explanation: As exlained in the previous example, "A" - "B" yields NaN. 
But any operator applied to NaN with any other numeric operand will still yield NaN.


// Write the output of below code

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);



// Write the output of below code

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

/**
 Explanation
 --------------------------------------------
The first console.log prints undefined because we are extracting the method from the hero object,
so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where 
the _name property does not exist.One way to fix the stoleSecretIdentity() 
function is as follows:
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);


 // Write the output of below code
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

// Write the output of below code
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));


// Write the output of below code
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

/* Explanation
--------------------------------------------------
The output of this code will be 456 (not 123).
The reason for this is as follows: When setting an object property, JavaScript will implicitly 
stringify the parameter value. In this case, since b and c are both objects, they will both be 
converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and 
can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or 
referencing a[b]. 

// How do you clone an object
var obj= {a: 12, b: 20,c: {d:20, e:40}};
var objClone= Object.assign({},obj);
console.log(objClone);
obj.c.d= 45;
console.log(objClone);


// How do you add an element in the bigining of an array and end of the arry
const arr= [1,2,4,5];
arr.push('end');
arr.unshift('strt');
console.log(arr);

// Write the output of below code
console.log(typeof undefined == typeof NULL);

//  The expression will be evaluated to true, since NULL will be treated as any other undefined variable.
//  Note: JavaScript is case-sensitive and here we are using NULL instead of null.

// Write the output of below code
var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();


// usage of 'undefined' data type
function foo(){
    undefined= "john";          // bad idea
    console.log(undefined);
}

foo();


'use strict';
function foo(){
   var undefined= "john";         // Type error will come
    console.log(undefined);
}

foo();


// But if you declare like "var undefined" in strict or non-strict mode, you will get out put as "john"
'use strict';
function foo(){
   var undefined= "john";         // Type error will come
    console.log(undefined);
}

foo();

// Write the output of below code
var a = 2 / 'num';   // will get 'NaN'
console.log(typeof a === "number");


// Write the output of below code
var a= 2/ 'num';
console.log(a == NaN);
console.log(a === NaN);


// Find the length of below code
var arr= [];
arr[0]= "car";
console.log(arr.length);   // length is 1
arr["two"]= "bus";
console.log(arr.length);   // length is 1

/*arrays are numerically indexed (as you’d expect), but the tricky thingis that 
they also are objects that can have string keys/propertiesadded to them 
(but which don’t count toward the length of the array):

// Find the length of below code
var arr= [];
arr["3"]= "three";
console.log(arr.length);

/* if string is base10 number , then it will consider key as numeric 

// Find the output of below code
var a= 2/ "one";
console.log(window.isNaN(a));  // true


// Find the output of below code
var a= "foo";
console.log(window.isNaN(a));  // true

/* Clearly, "foo" is literally not a number, but it’s definitely not the NaN value either! 
This bug has been in JS since the very beginning (over 19 years of ouch).


// Are two NaN's are equal ? 
var a= 5 / "foo";   // NaN
var b= 5 / "foo";   // NaN

console.log(a == b);


//  About positive infinity and negative infinity
var a = 1 / 0;
var b = -1 / 0;
console.log(a);
console.log(b);

// Max numbers
var a= Number.MAX_VALUE;
console.log(a);            // 1.7976931348623157e+308

console.log(a+a);   // Infinity

var maxnum= a+ Math.pow(2, 970);
console.log(maxnum);               // Infinity

var maxnum2=  Math.pow(2, 969);
console.log(maxnum2);            // 1.7976931348623157e+308

*/