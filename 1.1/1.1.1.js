"use strict" ;
let y = new Date
let year=y.getFullYear();
var counter=40;
 
	while(counter>0){
		if((year%400===0)||(year%4===0) && (year%100!=0)){
			console.log(year);
			year++;
			counter--;
		}
		else
			year++;
	}