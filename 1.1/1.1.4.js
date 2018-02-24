"use strict";
let str=prompt("Enter Sentence");
let arr=str.split(' ');
console.log(arr);
let maxlen=(arr[0].length);


for(let i=1;i<arr.length;i++){
    if(maxlen<arr[i].length)
        maxlen=arr[i].length;
}
console.log(maxlen);