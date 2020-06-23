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

*/

// Hoisting for functions

console.log(addNum(5));   //---->   Will get output as "addNum is not a function"

var addNum= function(num1){
    return num1+5;
}

