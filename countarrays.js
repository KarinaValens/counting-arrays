"use strict";
document.addEventListener("DOMContentLoaded", init);


const array = [];
let i = 0;
let result;
//The array is “truncated” so that it never becomes longer than 9.
//The array is logged to the console. The program doesn’t do anything else. 
//You should only need one function, but you might benefit from using the init-loop pattern.
// 1.- Make a program that counts (with a timed delay)
// 2.-Modify the program to insert the counter-value in the beginning of the array
// 3.-Modify the program again, to make sure the array doesn’t get longer than nine items.

function init() {
    if (i < 1000) {
        array.unshift(i++); //point 1 i is the counter point 2 add an array item at the beginning
    }
    if (array.length == 10) {
        array.pop(1); //point 3 the array does not get longer than 9 digits
    }
    console.log(array);
    setTimeout(init, 1000); //point 1 time delay function
}