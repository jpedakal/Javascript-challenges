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
for (var i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log('i value ' + i);
    }, 1000);
}


// Find the length of the function
function addNum(a, b, c) {
    var sum = a + b;
    return sum;
}
console.log(addNum.length)



// IIFE --> Immediate invoking function expression
(function addNum(num1) {
    console.log(num1 + 5);
})(5);



// Write a function for closures concept. Access variables from outer function variable and global variable.
const globalVariable = 'global var';

function outerFunc(param1) {
    const variable = 'var one';

    function innerFunc(param2) {
        const variable2 = 'var two';

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
(function () {
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));


// Write the output of below code
function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return
    {
        bar: "hello"
    };
}
console.log('function 1', foo1());
console.log('function 2', foo2());


// Write the output of below code
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

/*
Simply put, the representations for 0.1 and 0.2 in binary floatingpoint are not exact, 
so when they are added, the result is not exactly0.3. It’s really close, 0.30000000000000004, 
but if yourcomparison fails, “close” is irrelevant


// "this" keyword sample example
var person = {
    name: "Surya",
    age: "20",
    company: "IBM",
    getData: function () {
        return this.name + ' age is ' + this.age
    }
}
console.log(person.name);
console.log(person.getData());


// Hoisting for functions
console.log(addNum(5));   //---->   Will get output as "addNum is not a function"

var addNum = function (num1) {
    return num1 + 5;
}


// Write the output of below code
var myCar = {
    color: "blue",
    logColor: function () {
        var self = this;
        console.log("In logColor- this.color " + this.color);
        console.log("In logColor- self.color " + self.color);
        (function () {
            console.log("In IIFE - this.color " + this.color);
            console.log("In IIFE -self.color " + self.color);
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


// Write the output of code
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);

/* Explanation:
------------------------------------------------------------------------------------------------------
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
------------------------------------------------------------------------------------------------------



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
 -------------------------------------------------------------------------------------------------------
The first console.log prints undefined because we are extracting the method from the hero object,
so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where
the _name property does not exist.One way to fix the stoleSecretIdentity()
function is as follows:
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
-------------------------------------------------------------------------------------------------------



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
------------------------------------------------------------------------------------------------------
The output of this code will be 456 (not 123).
The reason for this is as follows: When setting an object property, JavaScript will implicitly
stringify the parameter value. In this case, since b and c are both objects, they will both be
converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and
can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or
referencing a[b].
--------------------------------------------------------------------------------------------------------


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

/* Explanation
-----------------------------------------------------------------------------------------------------
 The expression will be evaluated to true, since NULL will be treated as any other undefined variable.
  Note: JavaScript is case-sensitive and here we are using NULL instead of null.
----------------------------------------------------------------------------------------------------


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

/* Explanation
-------------------------------------------------------------------------------------------------------
arrays are numerically indexed (as you’d expect), but the tricky thingis that
they also are objects that can have string keys/propertiesadded to them
(but which don’t count toward the length of the array):
----------------------------------------------------------------------------------------------------------


// Find the length of below code
var arr= [];
arr["3"]= "three";
console.log(arr.length);

/*
------------------------------------------------------------------------------------------------------
if string is base10 number , then it will consider key as numeric
------------------------------------------------------------------------------------------------------


// Find the output of below code
var a= 2/ "one";
console.log(window.isNaN(a));  // true

// Find the output of below code
var a= "foo";
console.log(window.isNaN(a));  // true

/*
------------------------------------------------------------------------------------------------------
Clearly, "foo" is literally not a number, but it’s definitely not the NaN value either!
This bug has been in JS since the very beginning (over 19 years of ouch).
------------------------------------------------------------------------------------------------------

// Are two NaN's are equal ?
var a= 5 / "foo";   // NaN
var b= 5 / "foo";   // NaN

console.log(a == b);


// About positive infinity and negative infinity
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


// Samples about infinity
console.log(Infinity/Infinity);  // NaN
console.log(10000/ Infinity); // 0
console.log(-100000/ Infinity); // -0
console.log(Infinity/100);  // Infinity
console.log(10000/ -Infinity); // -0
console.log(0/ -3);  // -0
console.log(0 * -3); // -0


var a= 0/-3;
console.log(JSON.stringify(a));


// Find the output of below code
var a = [ 1, "2", [3] ];
console.log(a[2][0]);


// String concat
var str= "jaya";
var strconcat= str.concat("krishna");
console.log(strconcat);

// Array concat
var arr= ["j","a","y","a"];
var arr1= arr.concat(["k","r","i","s","h","n","a"]);
console.log(arr1);

// Find the output of below code
console.log(0.3 === (0.4-0.1));

// String objects
var a= new String("welcome");
console.log(a);
console.log(typeof a);    //object
console.log(a instanceof String);


// Find the output of below code
var a= Object.prototype.toString.call([1,2,3]);
console.log(a); // [object Array]

var b= Object.prototype.toString.call("welcome");
console.log(b); // [object String]

var c= Object.prototype.toString.call(/regex-literal/i);
console.log(c); // [object RegExp]

var d= Object.prototype.toString.call(null);
console.log(d); // [object Null]

var e= Object.prototype.toString.call(undefined);
console.log(e.toString()); // [object Undefined]

var f= Object.prototype.toString.call(true);
console.log(f); // [object Boolean]

// Find the output of code
var str= "abc";
var b= new String(str);
var c= Object(b);
console.log(c);  // [String: 'abc']


// Find the output of code
var a = new String("abc");
var b = new Number(42);
var c = new Boolean(true);

console.log(a.valueOf()); // "abc"
console.log(b.valueOf()); // 42
console.log(c.valueOf()); // true

/**
 ---------------------------------------------------------------------------------------------------
 If you have an object wrapper and you want to get the underlyingprimitive value out,
 you can use the valueOf() method
 ---------------------------------------------------------------------------------------------------

// Array creation
var a = new Array(1, 2, 3);
//   OR
var a = Array(1, 2, 3);  // You can omnit "new" keyword infront of Array

console.log(a);


// Find the output of code
var arr = new Array(1);
var b = [undefined, undefined, undefined];
var c = [];
c.length = 3;

console.log(arr);
console.log(b);
console.log(c);

// How to create an array with undefined values (not just “empty slots”)
var a= Array.apply(null, {length: 3});
console.log(a);   // [undefined, undefined, undefined]

/*
----------------------------------------------------------------------------------------------------
The first argument is a this object binding (covered in the this &Object Prototypes title in this
series), which we don’t care about here, so we set itto null. The second argument is supposed to
be an array (or somethinglike an array—aka an “array-like object”). The contents of this“array” are
“spread” out as arguments to the function in question
----------------------------------------------------------------------------------------------------

// Object creations
 var c= new Object();
 c.name= "jaya";
 console.log(c);

var c= {name: "jaya"};
console.log(c);

//function expression
var e = new Function("a", "return a*2;");
console.log(e(2));

var f = function (a) { return a * 5 };
console.log(f(4));

// Find the output of below code
console.log(Date());      //  "Tue Jun 30 2020 09:48:59 GMT+0530 (India Standard Time)"
console.log(new Date()); // 2020-06-30T04:18:59.978Z
console.log(Date.now()); // 1593490820753 --> ES5 format

function foo(x){
    if(!x){
        throw new Error("x value not provided");
    }
}
foo(7);

/*
--------------------------------------------------------------------------------------------------
 Converting a value from one type to another is often called “typecasting,” when done explicitly,
 and “coercion” when done implicitly(forced by the rules of how a value is used).
 -------------------------------------------------------------------------------------------------
 
 var a= 56;
 var b= a+ "";          // implicit coercion
 var c= String(a);      // explicit coercion
 

// Find the output of below code
var a = [1, 2, 3];
console.log(typeof a.toString());

// Find the output of below code
console.log(JSON.stringify(undefined));    // undefined
console.log(JSON.stringify(function(){}));    // undefined
console.log(JSON.stringify([1,undefined,function(){},4]));    // [1, null, null, 4]
console.log(JSON.stringify({a: 4, b: function(){}}));     // "{"a":4}"

// Find the output of below code
var obj= {};

var a= {
    b: 42,
    c: obj,
    d: function(){}
}

obj.e= a;
//console.log(a);  // { b: 42, c: { e: [Circular] }, d: [Function: d] }
//JSON.stringify(a);  // will get an error "TypeError: Converting circular structure to JSON"

a.toJSON= function(){
    return {b: this.b}
}

console.log(JSON.stringify(a)); // "{"b":42}"


// find the output of below code
var object= 435;
console.log(object.toJSON);

// Find the output of below code
console.log('1');
setTimeout(function () {
    console.log('2');
}, 1);

setTimeout(function () {
    console.log('3');
}, 10);

setTimeout(function () {
    console.log('4');
}, 0);
console.log('5');

//Find the output of below code
var a = { b: 42 };
var b = { b: 43 };

console.log(a < b);
/*
a < b is also false, because a becomes [object Object] and b becomes [object Object], 
and so clearly a is not lexicographicallyless than b.

// Find the output of below code
var a = { b: 42 };
var b = { b: 43 };

console.log(a == b);     // false
console.log(a <= b);     // true
console.log(a >= b);     // true

/*
Because the spec says for a <= b, it will actually evaluate b < afirst, and then negate that 
result. Since b < a is also false, theresult of a <= b is true.

//Find the output of below code
function foo(){
    a= a+1;
    console.log(a);
}

foo();      // output will be NaN
var a=1;


//Find the output of below code
function foo() {
    a = a + 1;
    console.log(a);
}
var a = 1;
foo();      // output will be 2


// Find the output of below code
var a = 20;
var b = a++;

console.log(a); // 21
console.log(b); // 20

/* 
The expression a++ has two separate behaviors. First, it returns the current value of a,
which is 42 (which then gets assigned to b).But next, it changes the value of a itself,
incrementing it by one:

//Find the output of code
var a=20;
var b= ++a;
console.log(a); // 21
console.log(b); // 21


var a = 42, b;
b = ( a++, a );

console.log(a);  // 43
console.log(b);  // 43

/*
The expression a++, a means that the second a statement expression gets evaluated after 
the after side effects of the a++ expression,which means it returns the 43 value for 
assignment to b.


// Find the output of below code
var a, b, c;
a = b = c = 42;
console.log(a);  // 42
console.log(b);  // 42
console.log(c);  // 42


// Find the output of below code in strict mode
'use strict';

var a = b = 42;    // ReferenceError: b is not defined
console.log(a);
console.log(b);


// Find the vowels in string
function allVowels(str) {
    var matches;

    if (str) {
        matches = str.match(/[aeiou]/g);
        if (matches) {
            console.log(matches);
        }
    }
}

allVowels('hello world');  //  ['e', 'o', 'o']

// ( OR )  //

function allVowels(str) {
    var matches;

    if (str && (matches = str.match(/[aeiou]/g))) {
        console.log(matches);
    }
}

allVowels('hello world');  //  ['e', 'o', 'o']

// labled block of code
foo: for (var i = 0; i < 9; i++) {
    if (i > 6) {
       continue foo;
    }
    console.log(i)
}

// non-labled block of code
function foo(){
    bar: {
        console.log('Hello');
        break bar;
        console.log('second Hello');
    }
    console.log('world');
}

foo();  // Hello world

// Find the output of below code
console.log([] + {});    // [object Object]
console.log({} + []);    // [object Object]

// Find the output of below code
function getData() {

    return {
        a: 42,
        b: 'foo'
    }
}

const { a, b } = getData();

console.log(a, b); // 42 'foo'

// Find the output of below code
function foo({ a, b, c }) {
    console.log(c, b, a);
}

foo({ a: [1, 2, 3], b: 34, c: 'foo' });  // foo 34 [1,2,3]

// Find the output of below code
let a = 1;

if (a > 12) {
    console.log('a is greater');
} else {
    if (a === 10) {
        console.log('a is equal');
    }
    else {
        console.log('a is lesser');
    }
}

(OR)

let a = 1;

if (a > 12) {
    console.log('a is greater');
} else if (a === 10) {
    console.log('a is equal');
}
else {
    console.log('a is lesser');

}
*/
// Find the output 