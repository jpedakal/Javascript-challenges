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

*/

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