"use strict";
let n=prompt("Enter a number to print table");

if(typeof(n==='number') && n>1){
    for(let i=1;i<=10;i++){
        console.log(n+'*'+i+'='+n*i);
    }
}
else
    alert("invalid input! Please enter a number");
    