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
// EXAMPLE 1 
// getName();
// console.log(a);
// var a = 2;
// function getName(){
//     console.log("Nmaste London");
// };
// this won't throw error
// EXAMPLE 2
// getName();
// console.log(a);
// function getName(){
//     console.log("Nmaste London");
// };
// this will throw erro
// undefined and not define are not the same thing
// hoisting is phenomena in javascript by which we can access variables and functions before we have init them we can access them without any error
// EXAMPLE 3
// console.log(a)
// console.log(getName)
// var a = 7;
// function getName(){
//     console.log('namaste javascript');
// };
// the reason behind this behavior is lies in the memory creation phase of EC
// in the memory creation phase varialbe are allocated memory and assigned undefined so we get undefined on console.log(a)
// in the memory creation phase functions are allocated memory and assigned the whole function definition, so we get the whole function definition on console.log(getName)
// console.log(a)
// console.log(getName)
// var a = 7;
// var getName = () => {
//     console.log('namaste javascript');
// };
// now we will get undefine for both logs
// because the getName variable witll be alloted memory but will be assigned undefined (it is handled like a normal variable)
// EXAMPLE FOR UNDERSTANDING THE WORKING OF CALLSTACK AND EXECUTION CONTEXTS
// var x = 7;
// function getName(){
//     console.log("Namaste Javascript");
// };
// getName();
// console.log("Hi");

// HOW FUNCTION WORK IN JS
// EXAMPLE 1 
// var x = 1;
// a();
// b();
// console.log(x);
// function a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);
// }
// inside the EC of a x is 10, doing console.log(x) will make javascript to search for value of x in the local environment, javascript find the value as 10, so 10 is logged
// similarly 100 is logged for console.log(x) of function b
// when these two ECs are deleted, console.log(x) of GEC is executed, value is set to 1, so 1 is logged into the console.

// SHORTEST JAVASCRIPT PROGRAM
// javascript will create the GEC for sure
// whenever javascript progrm is run a GEC is created, a global object is created, and a this keyword is creaetd
// and in the global space this refers to the global object 
// the global object in case of browsers is the window object
// window object contains a lot of functions and variable which can be accessed from anywhere in the code
// global object for different environments is different
// global space: region of code outside any function
// whenever we create a variable or a function in the global space, they are attached to the window object
// EXAMPLE 1
// var a = 2;
// function b(){
//     console.log('hi')
// };
// variables declared with let and const keyword are not attached to the global object
// whenever we use a variable or a function without anything in from of it, javascript engine assumes that the thing we are trying to access is present in the global space
// EXAMPLE 2
// var a = 2;
// function b(){
//     var x = 3;
//     console.log(x);
// };
// b();
// console.log(this.a)
// console.log(x);
// this will throw error

// UNDEFINED
// console.log(a);
// var a = 7;
// console.log(a);
// undefined is a like a placeholder which is assigned to variables at the time of memory creation phase
// undefined remains assigned to varialbes untill the code execution reaches the line where the variable has been initialized
// undefined indicates that some memory has been allocated
// javascript is loosely or weakly typed language
// console.log(a);
// var a = 2;
// console.log(a);
// a = true;
// console.log(a);
// NEVER DO THIS
// a = undefined;
// it is a bad practice

// SCOPE CHAIN
// scope in JavaScript is directly related to lexical environment
// EXAMPLE 1
// function a(){
//     console.log(b);
// };
// var b = 10;
// a();
// javascript will try to find out whether b exists in local memory space (local memory of the function a's execution context) or not
// if it isn't found there javascript will search for it in the 
// EXAMPLE 2
// function a(){
//     c();
//     function c(){
//         console.log(b);
//     };
// };
// var b = 10;
// a();
// EXAMPLE 3
// function a(){
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);
//     };
// };
// a();
// EXAMPLE 4
// function a(){
//     var b = 10;
//     c();
//     function c(){
//     };
// };
// a();
// console.log(b);
// this will throw an error
// scope of a variable is the region in code where that variable is accessible
// whenever an EC is created an LE is also created
// LE is the local memory along with the LE of parent
// parent means lexical parent
// function c is lexically inside function a 
// scope chain is the chain of scopes that javascript engine iterates through in order to find the value of a variable when it is referenced
// EXAMPLE 5 
// function a(){
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);
//     };
// };
// a();

// LET AND CONST
// let and const declarations are hoisted
// EXAMPLE 1
// console.log(b);
// let a = 10;
// var b = 100;
// EXAMPLE 2
// console.log(a);
// let a = 10;
// var b = 100;
// we get an error
// a is hoisted (memory has been allocated to a)
// b is also hoisted
// they why did we get an error
// EXAMPLE 3
// let a = 10;
// console.log(a);
// var b = 100;
// a is hoisted but not in the global scope
// TEMPORAL DEAD ZONE
// a variable declared with let enters temporal dead zone after it has been hoisted  
// and it exists TDZ when the code execution reaches the statement where the variable is to be initialized
// trying to access a variable present in the temporal dead zone throws a reference error: cannot access a before initialization
// trying to access b will return undefined
// trying to access an undeclared variable will throw a reference error: m is not defined
// PROOF THAT B IS ATTACHED TO WINDOW OBJECT BUT A IS NOT ATTACHED TO IT
// EXAMPLE 4
// let a = 10;
// var b = 100;
// console.log(window.a) // this will give undefined
// console.log(window.b)
// so let is more strict than var
// CONST IS MORE STRICT 
// EXAMPLE 5
// const a;
// this will throw error
// const needs to be initialized at the time of declaration
// const is hoisted in a similar way
// EXAMPLE 6
// console.log(a);
// const a = 2;
// EXAMPLE 7
// const a = 2;
// a = 3;
// this will throw a type error: we cannot assign something to a constant
// SYNTAXERROR v/s TYPERROR v/s REFERENCEERROR
// we got typerror when we were trying to assign a value to a constant, this error was thrown because of the sole reason that type of a is const 
// we get a syntaxerror when we declare a const variable without initialization, this error was thrown because of sole reason that syntax of const needs an initialization
// we get a syntaxerror when we re-declare a let or const variable, this error was thrown because of the sole reason that syntax of const needs an initialization
// we get a referenceerror when we try to access a varialbe present in the temporal dead zone, this error was thrown because of the sole reason that javascript engine couldn't find the reference of a
// we get a referenceerror when we try to access an undeclared variable, this error was thrown because of the sole reason that javascript engine couldn't find the reference of m
// USE CONST
// IF VALUE COULD CHANGE, USE LET
// DON'T USE VAR UNTILL WE NEED THEM SPECIFILCALLY
// best was to avoid TDZ is to put declarations and initializations at the top of the their corresponding scopes

// BLOCK SCOPE AND SHADOWING IN JS
// what is a block
// a block is also known as compound statement
// a block is used to group multiple statements together
// we need to group multiple statements together when we need to supply multiple statement where javascript expects a single statement
// EXAMPLE 1
// var a = 3;
// if(a == 2) console.log('it is true')
// else console.log('it is false');
// this is valid syntax
// what is block scope?
// EXAMPLE 2
// {
//     var a = 2;
//     let b = 3;
//     const c = 4;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// b and c will be hoisted in their scope ( a separate memory space )
// a is hoisted in the globa scope
// b and c are stored in a separate memory space which is reserved for this block
// SHADOWING IN JAVASCRIPT
// var a = 100;
// let b = 200;
// console.log(a);
// console.log(b);
// {
//     var a = 10;
//     let b = 20;
//     const c= 30;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);
// the value 10 shadowed the value 100
// this because the var a = 100 and var a = 10; refered to the same space in memory
// this won't happen with let variable
// because the let b = 200; and let b = 20 refered to different spaces in memory
// this all were legal shadowing
// ILLEGAL SHADOWING
// EXAMPLE 1
// let a = 2;
// {
//     var a = 3;
// };
// EXAMPLE 2
// const a = 2;
// {
//     var a = 3;
// };
// LEGAL SHADOWING
// EXAMPLE 1
// const a = 2;
// {
//     let a = 3;
// };
// EXAMPLE 2
// let a = 2;
// {
//     const a = 3;
// };
// WHAT DIFFERENTIATE BETWEEN LEGAL AND ILLEGAL SHADOWING
// if some variable is shadowing another variable then the inner variable should cross it's boundaries
// var cannot be used to shadow let or const because var will cross the borders 
// but let and const can be used to shadown any varialble because they won't cross their borders
// block scope also follows lexical scope
// all the scope rules that work on functions are valid for arrow functions also

// CLOSURES
// EXAMPLE 1
// function x()
// {
//     var a = 7;
//     function y()
//     {
//         console.log(a);
//     };
//     y();
// };
// x();
// a closure is a function binded together with it's lexical environment
// a closure is a combination of a function bundled together with references to the surrounding state (the lexical environment)
// EXAMPLE 2
// function x()
// {
//     var a = 7;
//     return function y()
//     {
//         console.log(a);
//     };
// };
// var val = x();
// console.log(val);
// val();
// when functions are returned their lexical scope is also returned
// so the entire closure is returned
// EXERCISE 3
// function x()
// {
//     var a = 7;
//     function y()
//     {
//         console.log(a);
//     };
//     a = 100;
//     return y;
// };
// var val = x();
// console.log(val);
// val();
// EXERCISE 4
// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a,b);
//         };
//         y();
//     };
//     x();
// };
// z();
// in this code
// y formed a closure with scope of x and scope of z
// USES OF CLOSURES
// - Module Desgin Pattern
// - Currying
// - Functions like once
// - Memoize
// - Maintaining state in async world
// - setTimeOuts
// - Iterators
// - and many more

// SETTIMEOUT + CLOSURES
// EXAMPLE 1
// function x()
// {
//     var i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
//     console.log('after the setTimeOut');
// };
// x();
// settimeout doesn't make javascript wait
// when javascript encounters the setTimeOut function, a timer is attached to the callback timer and javascript moves forwards
// EXAMPLE 2
// PRINT 1 2 3 IN INTERVALS OF ONE SECOND
// function x()
// {
//     for(var i = 1; i<5; i++)
//     {
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000); 
//     };
// };
// x();
// this won't work
// why
// when the first setTimeout with timer = 1 second is executed, it tries to find the value of i, i has been declared using the var keyword, so i isn't block scopoe, i is global scoped, so js engine searches for i in the global scope after seraching for it in the local block scope, then js engine find the value f i to 5 (because before 1 second the for loop as completely executed and the value of the variable i has been updated to 5)
// EXAMPLE 3
// USING LET TO SOLVE THE PROBLEM
// function x()
// {
//     for(let i = 1; i<5; i++)
//     {
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000); 
//     };
// };
// x();
// this will work
// why
// because a new variable i is created when a new block of the for loop is executed, each time a block of for loop is created the 
// EXAMPLE 4
// WITHOUT USING LET
// function x()
// {   
//     for(var i = 1; i<=5; i++)
//     {
//         var y = function (i)
//         {
//             setTimeout(() => {
//                 console.log(i);
//             }, i*1000);
//         };
//         y(i);
//     };
// };
// x();
// EXAMPLE 5
// WITHOUT MAKING A NEW FUNCTION
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout((i) => {
            console.log(i);
        }, i * 1000, i);
    };
};
x();


// functions are like heart of javascript
// people pull thier hairs
// time tide and javascript waits for none

// in javascript, functions do their work and remember their lexical scope
// similarly
// in life, should do our duties and stay grounded

// when javascript encounters a setTimeOut, it attaches a timer to it and moves forward