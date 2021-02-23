let arr = ['abc', 'cba', 'bca', 'mjkl', 'lkmj', 'kj'];
let obj = {};

for (let i = 0; i < arr.length; i++) {
    let str = arr[i].split('').sort().join('');

    if (obj[str]) {
        obj[str].push(arr[i])
    } else {
        obj[str] = [];
        obj[str].push(arr[i])
    }
}

const keys= Object.keys(obj);

for(let j=0;j<keys.length;j++){
    if(obj[keys[j]].length >1){
        console.log(obj[keys[j]])
    }
}