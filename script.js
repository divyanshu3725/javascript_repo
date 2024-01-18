// ---------
// W3 SCHOOL
// ---------
// DATA TYPES
// let a = 1;
// let b = true;
// let c = 'string';
// let d = function(){
//     console.log("Hi");
// };
// let e = {};
// let f = [];
// let g = new Date();
// console.log(a, typeof(a));
// console.log(b, typeof(b));
// console.log(c, typeof(c));
// console.log(d, typeof(d));
// console.log(e, typeof(e));
// console.log(f, typeof(f));
// console.log(g, typeof(g));

// ------------------
// NAMASTE JAVASCRIPT
// ------------------

// EXECUTION CONTEXT
// Everything in JavaScript occurs inside an execution context
// It has two components: memory and code 
// memory compoent: variables and functions are stored here as key-value pairs
// code component: here code is executed one line at a time
// memory compoent is also called varialbe environment
// code component is also called thread of execution

// JAVASCRIPT IS SYNCHRONOUS SINGLE THREADED LANGUAGE
// synchronous means code is executed one command at a time
// single threaded means javascript can go to next line only when the previous line's execution has been completed

// HOW JAVASCRIPT WORKS
// var n = 2;
// function square(num)
// {
//     var ans = num*num;
//     return ans;
// };
// var square2 = square(n);
// var square4 = square(4);
// console.log(square2);
// console.log(square4);
// e xecution context is created in two phases
// first phase is the memory phase or the memory creation phase
// in this phase memory is allocated to all variables and functions
// variables are assigned memory and undefined is stored in it
// functions are assigned memory and the code of the function is stored in it
// second phase is the code execution phase
// in this phase code is executed one by one
// when first line is encountered 2 is assigned to the variable n
// when second line is encountered nothing is done (function has been assinged memory and it's code has been stored inside that memory)
// then var square2 = square(2); is encountered
// now this is a function call
// whenever a function is called a new execution context is created
// now in this function execution context, memory will be assigned to the variable ans and num, undefined will be stored in them
// the code execution part of the function execution context starts, now the passed argument will be assigned to the num (parameter) and the computed value num*num will be assinged to the varialbe ans
// then we encounter the return function
// so this function execution context is deleted
// now we are back to the global execution context
// now 4 will be assigned to the varialbe square2
// now we will encounter the staement var square4 = square(4)
// and now things will repeat
// when every line of the global execution context has been executed, the GEC will be deleted

// CALLSTACK
// javascript uses a callstack to manage execution contexts
// first the GEC enters the callstack
// if a function is encountered, a FEC is created and is put into callstack 
// when EC has been done, it moves out of the call stack 
// call stack maintains the order of execution of the execution contexts
// callstack is also known as 
// - execution context stack
// - program stack
// - control stack
// - runtime stack
// - machine stack

// HOISTING
getName();
console.log(a);
var a = 2;
function getName(){
    console.log("Nmaste London");
};