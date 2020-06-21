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


/***********************************************************************************************/
// Output of below code

for(var i=0;i<4;i++){
   setTimeout(() => {
       console.log('i value '+i);
   }, 3000);
}