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
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout((i) => {
//             console.log(i);
//         }, i * 1000, i);
//     };
// };
// x();

// FIRST CLASS FUNCTIONS
// EXAMPLE 1
// x();
// function x()
// {
//     console.log('Hi');
// };
// this is a function statement
// SECOND CLASS FUNCTIONS
// x();
// var x = function()
// {
//     console.log('Hi');
// };
// this is function expression
// DIFFERENCE BETWEEN FUNCTION STATEMENT AND FUNCTION EXPRESSION
// a function statement is hoisted with it's defintion so we can call a function (which has been declared as function statement) before declaring it
// a function expression is also hoisted but with the value undefined so when we call a function (which has been declared as function expression) we get an error
// function statement is also called a function declaration
// EXAMPLE 3
// function()
// {
//     console.log('hi');
// };
// this is an anonymous function
// but according to ECMAScript specification a function statement should always have a name
// so this will throw an error
// anonymous functions are used in a place where functions are used as values 
// EXAMPLE 4
// var x = function()
// {
//     console.log('Hi');
// };
// x();
// EXAMPLE 5
// var x = function y()
// {
//     console.log('Hi');
//     console.log(y);
// };
// x();
// this is a named function expression
// y();
// but we cannot use functions like this
// because y is not in the global scope
// it's a local variable for the y() function
// PARAMETERS V/S ARGUMENTS
// parameters are like placeholder value or label values
// arguments are the actual values that we pass to a function
// FIRST CLASS FUNCTIONS
// EXAMPLE 1
// a function that takes a another function as argument or returns a function is called a first class function 
// functions are first class citizens
// the ability of functions to be used as values, makes functions first class citizens in JavaScript
// function x(y)
// {
//     console.log('inside x');
//     console.log('calling y');
//     y();
// };
// function y()
// {
//     console.log('inside y');
// };
// x(y);
// EXAMPLE 2
// function x()
// {
//     console.log('inside x');
//     function y()
//     {
//         console.log('inside y');
//     };
//     return y;
// };
// console.log(x);
// let val = x();
// console.log(val);
// val();
// ARROW FUNCTIONS

// CALLBACK FUNCTIONS
// EXAMPLE 1
// function x(y)
// {
//     console.log('inside x');
//     y();
// };
// function y()
// {
//     console.log('inside y');
// };
// x(y);
// the function passed as argument to another function is called the callback function
// and the function calling the callback function is called the callee
// javascript is a synchronous single threaded language
// but using callbacks we can do asynchronous things in javascript
// EXAMPLE 2
// setTimeout((x) => {
//     console.log(x);
// }, 2000,'Hi');
// the function passed to this setTimeout function is a callback function
// you know the working behind it
// javascript won't wait for setTimeout
// EXAMPLE 3
// setTimeout(function func(x) {
//     console.log(x);
// }, 4000,'timer done');
// function x(y)
// {
//     console.log('inside x');
//     y();
// }
// function y()
// {
//     console.log('inside y');
// }
// x(y);
// the async operation of setTimeout is possible because of callbacks
// first the GEC will enter the  call stack
// then the function x's EC will enter the call stack
// then the function y's EC will enter the call stack
// then y's EC will be popped of
// then x's EC will be popped of 
// then GEC will be popped of
// then when the timer of 4 second has expired the callback function of the setTimeout function will enter the callstack
// if any thing blocks the callstack that means it is blocking the main thread
// if a function has heavy computation or operation it will block the main thread
// we shouldn't block the main thread
// and due to this reason we should use async operations for things that take time
// if we don't use async then our main thread will be blocked
// if in javascript functions were not first class citizens, we would not have this callback function
// and if we didn't have callback functions we wouldn't be able to do async operations
// EXAMPLE 4
// EVENTLISTENERS
// document.getElementById('btn').addEventListener('click',clickFunc);
// function clickFunc()
// {
//     console.log('Hi');
// };
// the clickFunc here is a callback function
// when javascript encounters this callback function
// it put it into the web apis section
// and whenever a click is made the callback function is pushed to the callback queue
// EXAMPLE 5
// MAINTAIN A BUTTON CLICK COUNT
// function clickFunc()
// {
//     document.getElementById('btn').addEventListener('click',mainFunc);
//     let i = 1;
//     function mainFunc(){
//         console.log('button click',i);
//         i++;
//     };
//     return mainFunc;
// };
// clickFunc();
// we could also use a global variable using the var keyword
// but this is not a good approach
// because the value of that global variable can be modified k
// to see the event listeners attached to an element, go to elements then to event liseners and then click on the element whose event listener is to be interrogated
// the event listener contains a scope object 
// and this scope object contains the closure
// EXAMPLE 6
// WHY DO WE NEED TO REMOVE EVENTLISTENERS
// because event listeners are heavy
// whenever an event listeners exists, it forms a closure
// if carries it's closure event when the callstack is empty
// so we remove event listeners when we no longer need them
// these closures and data which occupy space in memory slow down our page

// EVENT LOOP
// JavaScript is a synchronous single threaded language
// it has one call stack
// it can do one thing at a time
// GEC
// function a()
// {
//     console.log("a");
// }
// a();
// console.log('End');
// whenever javascript code execution starts, a GEC is created
// first GEC is created
// then it's kept in the callstack
// then function a's EC is created
// then it's pushed into the call stack
// then function a's code is executed
// a is logged into console
// then function a's code execution ends
// so function a's EC is popped of 
// global execution context contains no more code, so it is also popped of the callstack
// the only job of callstack is to executed whatever comes inside it
// if we have to do some async operations, we will need some superpowers
// call stack is present inside the javascript engine
// js engine is inside browser
// browser also has local storage, timer, url, 
// for our code to use those feature, our code needs to use the web apis (which include setTimeout, DOM APIs, fetch(), localStorage, console, location)
// for our code to use the web apis, we need the window
// browser give the window object using which we can use the web apis
// so we need to use window.webapi in order to use super powerful features of browser
// but we don't need to use the window keyword because window is the global object,
// so everything we try to access is accessed from the window
// EXAMPLE 1
// console.log("start");
// setTimeout(() => {
//     console.log('Hi');
// }, 2000);
// console.log("end");
// GEC is created
// 715 is reached
// start is logged into console
// setTimeout is reached
// callback function is assigned a timer
// 719 is reached
// end is logged into console
// GEC is deleted
// when 5 second pass
// callback function (present in web apis section) enters the callback queue
// then event loop checks for the emptiness of call stack
// event loop finds CS to be empty
// event loop pushes this callback function into the call stack
// EXAMPLE 2
// console.log("Start");
// document.getElementById("btn").addEventListener("click", function cb(){
//     console.log("callback");
// });
// console.log("End");
// WHY DO WE NEED THIS CALLBACK QUEUE
// so that the callbacks get's executed in a specific and desired order prevening any unexpected behaviour
// 
// EXAMPLE 3
// console.log('start');
// setTimeout(() => {
//     console.log('CB setTimeout');
// }, 5000);
// fetch("https://api.netfilx.com")
// .then(function cbr(){
//     console.log("cb netflix");
// });
// console.log('end');
// the fetch function returns a promise
// the cbr callback function is registered in the web apis 
// the cbr callback function will be pushed to the callback queue when data is returned from the server (whom we are sending request to)
// no no no, the cbr callback function won't be pushed to callback queue
// it will be pushed to micro task queue
// callback queue is the macro queue
// the microtask queue has more priority than the macrotask queue
// so event loop first checks the emptiness of callstack
// if it's empty then it checks the micro task queue
// if something is there, then it will be pushed to the callstack
// then event loop goes and checks the macro task queue
// what comes in microtask quque: callback functions of promises, mutation observers
// javascript does only one thing at a time
// but browser do multiple things at a time
// callback queue is known as taks queue, macro task queue, 
// event loop will give opporitunity to the callback queue only when all the stuff in the microtask queue has been resolved
// if a function present in microtask queue, generates another function in microstask queue then this can lead to starvation of the functions in the callack queue 

// JS ENGINE ARCHITECTURE
// JRE is like a big container that have everything that is required to run code
// it contains: 
// - JS Engine
// - APIs 
// - Event Loop
// - Microtask Queue
// - Macrotask Queue
// JRE is not possible wihtout JS Engine
// Browsers can execute JS code because it has a JRE
// Nodejs also has a JRE 
// Nodejs can run javascript outside the browser
// APIs are different for different environments
// javascript is capable of being run in various devices because of JRE
// APIs give superpowers
// setTimeout API is present in the browser environment as well as in Node.JS enviornment
// V8 is used in deno, nodejs and chrome
// first javascript engine evolved on now is known as spider monkey
// js engine is not a machine
// js engine is a program
// v8 is written in c++
// JS ENGINE ARCHITECTURE
// first step parsing (sourdce code to tokens to) (syntax parsing is done here) (tokesn into AST)
// second step compilation and execution go hand in hand
// javascript is JIT compiled just in time compilation
// about interpreter: line is executed one by one
// about compiler: code is compiled and is then executed
// in interpreter execution is fast
// in compiler we have more efficiency
// JavaScript can behave as both
// how it behaves is dependent on the JRE
// when JS was created it was supposed to be interpreted
// most of JS engines and Browsers nowadays use interpreter
// JIT compilation is like best of the both worlds
// AST goes to interpretor, interpreter generates byte code
// this byte code is optimized with compiler
// then this optimized byte code is sent for execution
// execution is not possible without memory heap and callstack
// GARBAGE COLLECTOR
// tries to free up space
// it uses mark and sweep algorithm
// other forms of compilation that compiler does:
// - inlining
// - inline caching
// - copy elision
// the whole process is generic
// V8 engine's interpreter is called ignition
// V8 engine's compiler is called turbofan
// orinoco and oilpan are V8's garbage collector

// TRUST ISSUES WITH SETTIMEOUT
// EXAMPLE 
// setTimeout(() => {
//     console.log('timer done');
// }, 3000);
// for(let i = 1; i<=10000; i++)
// {
// }
// after 3000ms the setTimeout's callback will enter the callstack queue
// and this callback will be executed when it enters the call stack
// it will enter the callstack when it is empty
// so callback of the setTimtout function won't get executed after 3000ms if the callstack isn't empty
// and this causes trust issues with setTimeout
// EXAMPLE 2
// TRYING TO BLOCK THE MAIN THREAD
// console.log('start');
// setTimeout(() => {
//     console.log('inside setTimeout');
// }, 0);
// console.log('end');
// let current = Date.now();
// while(Date.now() <= current+2000)
// {
// };
// we can use a setTimeout of timer 0ms if we want to defer some piece of code

// HIGHER ORDER FUNCTIONS
// A function takes another functions as an argument or a function that returns another function is called a higher order function
// EXAMPLE 1
// function x()
// {
//     console.log('namaste');
// };
// function y(x)
// {
//     x();
// };
// y(x);
// y is the higher order function
// x is the callback function
// EXAMPLE 2
// TASK: calculate the area, preimeter, diameter of the circles whose radii are stored in an array
// const radii = [1,2,3,4];
// const area = function(arr)
// {
//     const output = [];
//     for(let i = 0; i<radii.length; i++)
//     {
//         output.push(arr[i]*arr[i]*Math.PI);
//     };
//     return output
// };
// const perimeter = function(arr)
// {
//     const output = [];
//     for(let i = 0; i<radii.length; i++)
//     {
//         output.push(2*arr[i]*Math.PI);
//     };
//     return output
// };
// const diameter = function(arr)
// {
//     const output = [];
//     for(let i = 0; i<radii.length; i++)
//     {
//         output.push(2*arr[i]);
//     };
//     return output;
// };
// const areaArr = area(radii);
// const perimeterArr = perimeter(radii);
// const diameterArr = diameter(radii);
// console.log(areaArr);
// console.log(perimeterArr);
// console.log(diameterArr);
// problems in this code
// we are violating DRY principle
// EXAMPLE 3
// const radii = [1,2,3,4];
// const caculator = (func,arr) => arr.map(func);
// const area = (radius) => radius*radius*Math.PI;
// const perimerter = (radius) => 2*radius*Math.PI;
// const diameter = (radius) => 2*radius;
// console.log(caculator(area,radii));
// console.log(caculator(perimerter,radii));
// console.log(caculator(diameter,radii));
// this is better code
// this is functional programming
// why is this code better
// we have abstracted our code into smaller functions
// every unit of function has it's own unique function
// we are not violating DRY
// EXAMPLE 3
// TASK: make the caculator function exactly similar to the map function
// const radii = [1,2,3,4];
// Array.prototype.caculator = function(func){
//     const output = [];
//     for(let i = 0; i<this.length; i++)
//     {
//         output.push(func(this[i]));
//     };
//     return output;
// };
// const area = (radius) => radius*radius*Math.PI;
// const perimerter = (radius) => 2*radius*Math.PI;
// const diameter = (radius) => 2*radius;
// console.log(radii.caculator(area));
// console.log(radii.caculator(perimerter));
// console.log(radii.caculator(diameter));
// this is like a polyfill for map function

// MAP
// is used for transforming an array (by transforming we mean transforming the values of an array)
// const arr = [1,2,3,4];
// console.log(arr);
// const newArr = arr.map(x => x.toString(2));
// console.log(newArr);

// FILTER
// const arr = [1,2,3,4];
// console.log(arr);
// const evenArr = arr.filter(x => !(x%2));
// console.log(evenArr);
// const oddArr = arr.filter(x => (x%2));
// console.log(oddArr);

// REDUCE 
// const arr = [1,2,3,4];
// // using function instead of reduce
// function sumOf(arr)
// {
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++)
//     {
//         sum+=arr[i];
//     };
//     return sum;
// }
// const sum = arr.reduce((initial,cur) => {
//     initial+=cur;
//     return initial;
// },5);
// console.log(sum);

// FINDING MAX AND MIN IN ARRAY USING REDUCE FUNCTION
// const arr = [1,2,3,4,5];
// const max = arr.reduce((initial, current) => {
//     if(current>initial)
//     {
//         initial = current;
//     };
//     return initial;
// },-Infinity);
// const min = arr.reduce((initial, current) => {
//     if(current<initial)
//     {
//         initial = current;
//     };
//     return initial;
// },Infinity);
// console.log(max);
// console.log(min);

// FINDING FULLNAMES OF ALL THE USERS
// const users = [
//     {firstName: "narendra", lastName: "modi", age: 73},
//     {firstName: "elon", lastName: "musk", age: 52},
//     {firstName: "alakh", lastName: "pandey", age: 32},
// ];
// const fullNames = users.map(x => x.firstName + " " + x.lastName);
// console.log(fullNames);

// GROUP INTO HOUSES
// const users = [
//     {firstName: "Divyanshu", lastName: "Sahu", house: "galiliee"},
//     {firstName: "Durgesh", lastName: "Krishan", house: "bethlehem"},
//     {firstName: "Manish", lastName: "Singh", house: "nazreth"},
//     {firstName: "Deepak", lastName: "Bareth", house: "ebenezer"},
//     {firstName: "Babul", lastName: "Behra", house: "bethlehem"},
//     {firstName: "Aryaman", lastName: "Singh", house: "ebenezer"},
//     {firstName: "Tazneem", lastName: "Akhtar", house: "bethlehem"},
//     {firstName: "Chaitanya", lastName: "Chandra", house: "galiliee"},
//     {firstName: "Abhay", lastName: "Rathore", house: "ebenezer"},
//     {firstName: "Roshan", lastName: "Pandey", house: "bethlehem"},
// ];
// const obj = users.reduce(function(initial, current){
//     if(!initial[current.house])
//     {
//         initial[current.house] = 1;
//     }
//     else
//     {
//         initial[current.house]++;
//     }
//     return initial;
// }, {});
// console.log(obj);

// GIVE THE LIST OF ALL THE STUDENTS IN A PARTICULAR HOUSE
// const users = [
//     {firstName: "Divyanshu", lastName: "Sahu", house: "galiliee"},
//     {firstName: "Durgesh", lastName: "Krishan", house: "bethlehem"},
//     {firstName: "Manish", lastName: "Singh", house: "nazreth"},
//     {firstName: "Deepak", lastName: "Bareth", house: "ebenezer"},
//     {firstName: "Babul", lastName: "Behra", house: "bethlehem"},
//     {firstName: "Aryaman", lastName: "Singh", house: "ebenezer"},
//     {firstName: "Tazneem", lastName: "Akhtar", house: "bethlehem"},
//     {firstName: "Chaitanya", lastName: "Chandra", house: "galiliee"},
//     {firstName: "Abhay", lastName: "Rathore", house: "ebenezer"},
//     {firstName: "Roshan", lastName: "Pandey", house: "bethlehem"},
// ];
// const obj1 = users.filter( x => x.house=="galiliee").map( x => x.firstName+" "+x.lastName); 
// console.log(obj1);
// const obj2 = users.filter( x => x.house=="ebenezer").map( x => x.firstName+" "+x.lastName); 
// console.log(obj2);
// const obj3 = users.filter( x => x.house=="nazreth").map( x => x.firstName+" "+x.lastName); 
// console.log(obj3);
// const obj4 = users.filter( x => x.house=="bethlehem").map( x => x.firstName+" "+x.lastName); 
// console.log(obj4);

// CALLBACK HELL
// console.log('Hello');
// console.log('Chinu');
// console.log('How are you?');
// IF WE WANT TO EXECUTE second lone AFTER FIVE SECONDS
// function func()
// {
//     console.log('this is inside the function');
// };
// setTimeout(func, 5000);
// using callbacks is a powerful way to do async tasks in javascript
// MIMICKING ECOMMERCE
// const cart = ['shoes','kurta','pants'];
// api.createOrder();
// api.proceedToPayment();
// api.showOrderSummary();
// api.updateCart();
// we can proceed to payment only after creating an order
// we can showOrderSummary only after we have proceeded to payment
// we can update cart only after we have shown the order summary
// using callbacks to do the task;
// api.createOrder(cart, function(){
//     api.proceedToPayment(function(){
//         api.showOrderSummary(function(){
//             api.updateCart();
//         });
//     });
// });
// FIRST PROBLEM
// our code is growing horizontally
// it's becoming unreadable and unmanageable
// this is called callback hell
// this structure is called pyramid of doom
// SECOND PROBLEM
// is the inversion of control
// when using callbacks we loose the control on our code
// we have passed to proceedToPayment function to the createOrder function
// we are blindly trusting the creaetOrder function that it will call the proceedToPayment function
// we gave the control of proceedToPayment function to the createOrder function
// createOrder function may be written by some intern or by some other developer
// what if our callback function doesn't get called by the createOrder function
// what is our callback function is called twice by the createOrder function
// ASYNC PROGRAMMING IN JAVASCRIPT EXIST BECAUSE OF THE CONCEPT OF CALLBACKS

// PROMISES
// const cart = ['shoes','kurta','watch'];
// createOrder(cart); // will return orderID
// proceedToPayment(orderID); 
// USING CALLBACKS TO DO THE TASK
// createOrder(cart, function(){
//     proceedToPayment(orderID);
// })
// USING PROMISES
// const promiseObject =  createOrder(cart);
// now the createOrder function won't take a callback function, it will just take a cart
// this createOrder function will return a promise
// promise is an object
// this promise object will hold whatever this createOrder function will return to us
// so when the createOrder(cart) is called it will return the promise object
// this promise object won't contain the value initially
// when the createOrder function returns a value, this value will be stored in the promiseObject
// after we encounter the createOrder(cart), and after the promise object has been assigned to the promiseObject (which won't be containing any value) javascript to continue to execute rest of the lines
// how we will carry on the tasks that are to be carried out after the completion of createOrder function
// we will assign callback functions to the promiseObject use the .then syntax
// promiseObject.then(function(){
//     proceedToPayment();
// });
// this callback will be executed only after the createOrder function has returned a value
// but how is then different from callbacks
// because in case of callbacks we were passing the callback functions to the outer functions
// but now in case of then we are attaching the callback functions to the promiseObjects
// we aren't losing control
// we haven't given the control of the proceedToPayment function to the createOrder function
// the only job of the creaeteOrder function is to do it's work and then fill the promiseObject with the return value 
// as soon as the promiseObject is filled with data our proceedToPayment function will be called automatically
// when we used to use callbacks, we weren't sure that the outer function won't call the inner function, or the outer function will call the inner function twice
// but using promises and then function we are assured that the callback function will be called only once 
// EXAMPLE 
// USING FETCH TO UNDERSTAND PROMISES
// const GITHUB_API = "https://api.github.com/users/divyanshu3725";
// const user = fetch(GITHUB_API);
// user.then(function(a){
//     console.log(a);
// })
// console.log(user);
// the fetch function returns us a promise
// we added breakpoint to the const user declaration
// so we saw that initially the value of user object was undefined
// but after the fetch function has done it's work the user object is not empty at all
// the use object contains a promise
// and this promise object contains prototype, promiseState, PromiseResult
// the state of promise will be pending for a very short period of time
// when repsonse is recieved, then the state changes to fulfilled, and then the promise object is fed a value
// and then the then function pushes the callback function into the micro task queue
// PROMISE OBJECTS ARE IMMUTABLE
// we cannot mutate the data present inside the pormise object
// WHAT IS PROMISE?
// a promise is an object that represents eventual completion or failure of an async operation
// a promise is a placehoolder for short period of time, untill we receive a value from an async operations
// a promise object is a container for a future value
// we solved inversion of control problem
// SOLVING PYRAMID OF DOOM
// const promiseObject = api.createOrder()
// .then(function(orderID){
//     return proceedToPayment(orderID);
// })
// .then(function(summary){
//     return showOrderSummary(summary);
// })
// .then(function(updation){
//     return updateWallet(updation);
// });
// if we don't use the return keyword then callbacks would be executed but data won't flow 
// we would get undefined
// EXAMPLE 2 (DEMONSTRATING PROMISE CHAINING WHICH TACKLES PYRAMID OF DOOM)
// function first(start)
// {
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             resolve(start+' '+'first');
//         }, 3000);
//     });
// };
// function second(start)
// {
//     return start+' '+'second';
// };
// function third(start)
// {
//     return start+' '+'third';
// };
// const prom = first('start')
// .then(function(val){
//     console.log(val);
//     // second(val);
//     return second(val);
// })
// .then(function(val){
//     console.log(val);
//     // third(val);
//     return third(val);
// })
// .then(function(val)
// {
//     console.log(val);
// })

// CREATING A PROMISE
// MIMICKING E-COMMERCE
// const cart = ['kurta', 'pants', 'shoes'];
// function validateCart(cart)
// {
//     // return false;
//     return true;
// }
// function createOrder(cart)
// {
//     const pr = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             // create order
//             // validate cart
//             // orderID  
//             if(!validateCart(cart))
//             {
//                 reject(new Error("cart is not valid"));
//             };
//             const orderID = 1234;
//             if(orderID)
//             {
//                 resolve(orderID);
//             };
//         }, 3000);
//     });
//     return pr;
// }
// function proceedToPayment(orderID)
// {
//     const pr = new Promise(function(resolve,reject)
//     {
//         resolve('payment successful')
//     });
//     return pr;
// }
// createOrder(cart)
// .then(function(orderID)
// {
//     console.log(orderID);
//     return orderID;
// })
// .then(function(orderID)
// {
//     return proceedToPayment(orderID)
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo);
// })
// .catch(function(err)
// {
//     console.log(err)
// })
// .then(function(){
//     console.log('no maater what happens I will be called');
// })
// the promise object constructor takes a function which contains two callback function
// our createOrder async function will takes 5 seconds to get completed
// by that time the promise object will stay in pending state
// we should handle errors
// we can handle error using catch function
// the then is the success callback
// the catch is the failure callback
// now we will chaining promises
// don't forgest to use the returns keyword for maintaining the flow of data
// the then function automatically returns a promise
// the catch in the end will handle error occuring in any of the then blocks
// catch block hanles all the error occuring in any then functions above it

// PROMISE API
// promise.all
// takes an array of promises
// make parallel api calls
// returns an array of the results 
// it will wait for all of them to finish
// as soon as the promise.all function encounters an error promise.all will throw an error
// EXAMPLE 1
// const prom1 = new Promise(function(resolve,reject)
// {
//     setTimeout(() => {
//         resolve('resval1');
//     }, 2000);
// });
// const prom2 = new Promise(function(resolve,reject)
// {
//     setTimeout(() => {
//         resolve('resval2');
//     }, 3000);
// });
// const prom3 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // reject('rejVal3');
//         resolve('resVal3');
//     }, 1000);
// });
// const promAll = Promise.all([prom1,prom2,prom3]);
// promAll.then(function(val)
// {
//     console.log(val);
// });
// promise.allSettled
// makes parallel api calls
// returns an array of the results irrespective of failure or success of the promises 
// const prom1 = new Promise(function(resolve,reject)
// {
//     setTimeout(() => {
//         resolve('resval1');
//     }, 2000);
// });
// const prom2 = new Promise(function(resolve,reject)
// {
//     setTimeout(() => {
//         resolve('resval2');
//     }, 3000);
// });
// const prom3 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         reject('rejVal3');
//         // resolve('resVal3');
//     }, 1000);
// });
// const promAll = Promise.allSettled([prom1,prom2,prom3]);
// promAll.then(function(val)
// {
//     console.log(val);
// });
// promise.race
// makes parallel api calls
// returns the result of first promise that gets settled
// if it's rejected, then the rejected value is returned
// const prom1 = new Promise(function(resolve,reject)
// {
//     setTimeout(() => {
//         resolve('resval1');
//     }, 2000);
// });
// const prom2 = new Promise(function(resolve,reject)
// {
//     setTimeout(() => {
//         // resolve('resval2');
//         reject('rejval2');
//     }, 3000);
// });
// const prom3 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // reject('rejVal3');
//         resolve('resVal3');
//     }, 1000);
// });
// const promAll = Promise.race([prom1,prom2,prom3]);
// promAll.then(function(val)
// {
//     console.log(val);
// });
// promise.any
// returns the result of the first promise that gets resolved
// throws error if all the errors are rejected
// const prom1 = new Promise(function(resolve,reject)
// {
//     setTimeout(() => {
//         // resolve('resval1');
//         reject('rejval1');
//     }, 2000);
// });
// const prom2 = new Promise(function(resolve,reject)
// {
//     setTimeout(() => {
//         // resolve('resval2');
//         reject('rejval2');
//     }, 3000);
// });
// const prom3 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // resolve('resVal3');
//         reject('rejVal3');
//     }, 1000);
// });
// const promAll = Promise.any([prom1,prom2,prom3]);
// promAll.then(function(val)
// {
//     console.log(val);
// });
// we shouldn't have uncaught errors

// ASYNCs
// async is a keyword which is used before a function to make the function async
// an async function always returns a promise
// either we make an async function that returns a promise
// or the async function will automatically return the returning value as a promise
// if we don't return a promise, the async function will take the value, wrap it inside a promise and then it will return the promise
// if we return a promise from the async function that it won't be wrapped inside another promise.
// EXAMPLE 1
// async function asFunc(param)
// {
//     return param;
// };
// const result = asFunc(2);
// console.log(result);
// result.then(function(val)
// {
//     console.log(val);
// });
// EXAMPLE 2
// async function asFunc(a) {
//         return new Promise((resolve,reject) => resolve(a));
// };
// const result = asFunc('a');
// result.then(x => console.log(x))
// AWAIT
// async awit combo is used to handle promises
// handling promises without async and await
// const prom = new Promise((resolve,reject) => {
//     resolve('prom res');
// });
// function getData(){
//     prom.then((x) => console.log(x))
// };
// getData();
// handling promises with async await
// const prom = new Promise((resolve,reject) => {
//     resolve('prom res');
// });
// async function getData(){
//     const val1 = await prom;
//     console.log(val1);
// };
// getData();
// console.log('after getData');
// the await keyword can only be used inside an async function
// await keyword is used in front of a promise
// difference between these two approaches
// const prom = new Promise((resolve,reject) => {
//     console.log('before setTimout');
//     setTimeout(() => {
//         resolve('prom res');
//     }, 2000);
//     console.log('after setTimout');
// });
// function getData()
// {
//     prom.then((x)=>console.log(x))
//     console.log('after then');
// };
// async function getData(){
//     const val1 = await prom;
//     console.log('after await');
// };
// getData();
// console.log('after getData');
// wihtout using the async await keywords: 
// - first before setTimeout will be printed
// - then after setTimeout will be printed
// - prom promise object's callbck will be registered
// - then after then will be printed
// - then after getData will be printed
// - then when the promise gets resolved the return value of the promise that prom res will be printed
// with using async await keywords
// - first before setTimeout will be printed
// - then after setTimeout will be printed
// - then javascript reaches the statement containing the await keyword
// - then javascript suspends the execution because it encountered an async operation
// - then javascript will go to the line of code after the async function invocation
// - then after getData will be printed
// - then when the promise gets resolved the execution of the async function will begin
// - and then after await will be printed
// EXAMPLE 3
// const prom1 = new Promise((resolve,reject) =>
// {
//     setTimeout(() => {
//         resolve('prom res');
//     }, 5000);
// });
// const prom2 = new Promise((resolve,reject) =>
// {
//     setTimeout(() => {
//         resolve('prom res');
//     }, 10000);
// });
// async function getData(){
//     console.log('asfunc start');
//     const val1 = await prom1;
//     console.log('after await1');
//     const val2 = await prom2;
//     console.log('after await2');
//     const val3 = await prom1;
//     console.log('after await3');
//     console.log('asfunc end');
// };
// getData();
// console.log('after getData');
// getData() is encountered
// asfunc start is printed
// async function is encountered
// execution of asFunc will be suspended
// when the last encountered promise (or as func) is settled, execution of asFunc is resumed
// after await 1 is printed
// another async function is encountered
// execution of asFunc will be suspended
// when the last encountered promise (or as func) is settled, execution of asFunc is resumed
// after await 2 is printed
// whenever await is ecnounterd execution of async function is suspended
// whenever that particular awaited promise is fulfilled the async function is resumed
// handling a fetch call using async await syntax
// const GITHUB_API = "https://api.github.com/users/divyanshu3725";
// async function asFunc(){
//     const respo = await fetch(GITHUB_API);
//     console.log(respo);
//     const val = await respo.json();
//     console.log(val);
// };
// console.log('before calling asFunc');
// asFunc();
// console.log('after calling asFunc');
// the fetch function returns a response object
// this response object is a readable stream
// and this readable stream can be converted into a json
// using the .json method
// the .json method also returns a promise
// so we will await that promise also
// ERROR HANDLING (USING ASYNC AWAIT)
// const GITHUB_API = "https://api.github.comusers/divyanshu3725";
// async function asFunc(){
//     try{
//         const respo = await fetch(GITHUB_API);
//         console.log(respo);
//         const val = await respo.json();
//         console.log(val);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// };
// console.log('before calling asFunc');
// asFunc();
// console.log('after calling asFunc');
// ERROR HANDLING (USING CATCH METHOD)
// const GITHUB_API = "https://api.github.comusers/divyanshu3725";
// async function asFunc(){
//     try{
//         const respo = await fetch(GITHUB_API);
//         console.log(respo);
//         const val = await respo.json();
//         console.log(val);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// };
// console.log('before calling asFunc');
// asFunc().catch(err => console.log(err));
// console.log('after calling asFunc');
// INTERVIEW TIPS
// first explain about async keyword
// then explain where the await keyword can be used
// then explain await is used handle promises
// these promises are asynchronous
// ASYNC AWAIT v/s PROMISE.THEN/CATCH
// async await is just syntactic sugar for promise.then/catch

// THIS KEYWORD
// THIS INSIDE GLOBAL SPACE
// console.log(this);
// this keyword in global space represents the global object
// global object differ in different environments
// in case of browsers, the window object is the global object
// THIS INSIDE FUNCTION SCOPE (non strict mode)
// function func()
// {
//     console.log(this);
// };
// func();
// this inside function scope in non strict mode represents the window object
// THIS INSIDE FUNCTION SCOPE (strict mode)
// "use strict";
// function func()
// {
//     console.log(this);
// };
// func();
// window.func();
// this inside function scope in strict mode is undefined
// THIS SUBSTITUTION
// if the value of this keyword is undefined or null, then it will be replaced by the window object, only in strict mode
// INTERVIEW
// what is the value of this keyword inside a function?
// - value of this inside a function is undefined, but because javascript has something called this substitution, the value becomes the global object in case of non strict mode
// ABOUT THIS IN FUNCTIONS
// value of this depends on how the function is called
// EXAMPLE 1
// "use strict";
// function func()
// {
//     console.log(this);
// };
// func();
// window.func();
// func() will give undefined
// window.func() will give the window object
// THIS INSIDE OBJECT'S METHOD
// const obj = {
//     a: 10,
//     x: function(){
//         console.log(this); // this will represent the object
//     }
// };
// obj.x();
// THIS INSIDE ARROW FUNCTIONS
// arrow function do not have their own this, they take it's value from their lexical environment
// const obj = {
//     a: 10,
//     b: this,
//     x: ()=>{
//         console.log(this); // this will represent the window object
//     }
// };
// obj.x();
// value of this in case of arrow function is the enclosing lexical context
// const obj = {
//     a: 10,
//     x: function(){
//         const y = () => {
//             console.log(this);
//         };
//         y();
//     }
// };
// obj.x();
// THIS INSIDE DOM ELEMENT
// references to the HTML element

// CALL
// const naam1 = {
//     firstName: 'Chinu',
//     lastName: 'Sahu',
//     printFullName: function(){
//         console.log(this.firstName+" "+this.lastName);
//     },
// };
// const intro = function(age){
//     console.log(`Hello I am ${this.firstName} ${this.lastName}. I am ${age} years old.`);
// } 
// naam1.printFullName();
// const naam2 = {
//     firstName: 'Divyanshu',
//     lastName: 'Sahu'
// };
// // USING CALL FOR FUNCITON BORROWING (from another object)
// naam1.printFullName.call(naam2);
// // USING CALL FOR FUNCITON BORROWING
// intro.call(naam1,21);
// intro.call(naam2,22);

// APPLY
// const naam1 = {
//     firstName: 'Chinu',
//     lastName: 'Sahu',
//     printFullName: function(){
//         console.log(this.firstName+" "+this.lastName);
//     },
// };
// const intro = function(age){
//     console.log(`Hello I am ${this.firstName} ${this.lastName}. I am ${age} years old.`);
// } 
// naam1.printFullName();
// const naam2 = {
//     firstName: 'Divyanshu',
//     lastName: 'Sahu'
// };
// // USING APPLY FOR FUNCITON BORROWING (from another object)
// naam1.printFullName.apply(naam2);
// // USING APPLY FOR FUNCITON BORROWING
// intro.apply(naam1,[21]);
// intro.apply(naam2,[22]);

// BIND
// const naam1 = {
//     firstName: 'Chinu',
//     lastName: 'Sahu',
//     printFullName: function(){
//         console.log(this.firstName+" "+this.lastName);
//     },
// };
// const intro = function(age,address){
//     console.log(`Hello I am ${this.firstName} ${this.lastName}. I am ${age} years old. I live in ${address}.`);
// } 
// naam1.printFullName();
// const naam2 = {
//     firstName: 'Divyanshu',
//     lastName: 'Sahu'
// };
// // USING CALL FOR FUNCITON BORROWING (from another object)
// const newFunc1 = intro.bind(naam1,'21');
// const newFunc2 = intro.bind(naam2,'22','Shimla');
// newFunc1('Goa');
// newFunc2();

// ASYNC AND DEFER
// HTML PARSING and LOADING OF SCRIPT 
// LOADING SCRIPT involves FETCHING the script and EXECUTING it 
// are boolean attributes which are used with the script tag to load external scripts efficiently into our webpage
// not using ATTRIBUTE in SCRIPT TAG:
// - HTML parsing starts
// - when script is encountered
// - script is fetched
// - script is executed
// - HTML parsin resumes
// - summary: HTML parsing stops when script is encountered, and resumes when script is executed (after being fetched) 
// using ASYNC ATTRIBUTE in SCRIPT TAG
// - HTML parsin starts
// - script with ASYNC attribute is encountered
// - it's fetched asynchronously 
// - after fetching, HTML parsing pauses, script execution starts
// - after execution of script, HTML parsin is resumed
// using DEFER ATTRIBUTE in SCRIPT TAG
// - HTML parsing starts
// - script with DEFER attribute is encountered
// - it's fetched asynchronously
// - script is fetched
// - and when HTML parsin is done script execution starts
// ASYNC v/s DEFER
// async attribute doesn't gurantee the order of execution of scripts, but differ does 
// use defer when scripts are dependent on each other
// use async when scripts are independent of each other

// LOCAL STORAGE AND SESSION STORAGE
// web storage apis are used to store some data into the browser
// this data is in the form of key value pairs of string
// SESSION STORAGE
// - data is stored for a session only
// - session starts when the use opens the window  or the tab
// - data is deleted when the user closes the tab or the window
// - session storage data isn't sent to the server using network request calls
// - session storage offers more space than cookies
// - in cookies we can store some 4000 bytes of data
// - in session storage we can store 5 mb of data
// LOCAL STORAGE
// - is similar to session storage 
// - it does't come with an expiry
// - data won't be lost if we close the tab or the window or the system
// - offers the highest memory capacity
// - it's memory capacity depends on the device we are using , the browser we are using
// - at least 5 MB
// - getting data from local storage is faster than getting data after making a network call
// SAME ORIGIN POLICY
// - storage apis use same origin policy for security reasons
// - origin comprises of three things: protocol, host, port
// - if we have stored some data for the origin http://divyanshusahu.com
// - then we can access this data from http://divyanshusahu.com/data.php 
// - we cannot access this data from https://divyanshusahu.com/data.php
// - we cannot access this data from https://blog.divyanshusahu.com
// - we cannot access this data from https://blog.divyanshusahu.com:8080
// SETTING A KEY VALUE PAIR
// localStorage.setItem('key1','value1');
// ACCESSING A KEY VALUE PAIR
// console.log(localStorage.getItem('key1'));
// REMOVING A KEY VALUE PAIR
// localStorage.removeItem('key1');
// console.log(localStorage.getItem('key1'));
// CLEARING THE LOCAL STORAGE
// localStorage.clear();
// - we generally do not store key value pairs of strings
// - we generally store some objects in local storage
// PROBLEM 
// const user = {
//     name: 'chinu',
// };
// localStorage.setItem('user',user);
// this occurs because there's problem in converting an object into a string
// for this we need to use the JSON.stringify method
// SOLUTION
// const user = {
//     name: 'chinu',
// };
// localStorage.setItem('user-copy',JSON.stringify(user));
// console.log(localStorage.getItem('user-copy')); // but this logs a string
// we want an object, so we will use the JSON.parse method
// console.log(JSON.parse(localStorage.getItem('user-copy')));
// MAKING  BUILT IN FUNCTIONS THAT CAN BE USED TO AUTOMATE WORKING WITH SOTRAGE
// function setDataInLocalStorage(key,value)
// {
//     localStorage.setItem(key,JSON.stringify(value));
// };
// function getDataInLocalStorage(key)
// {
//     return JSON.parse(localStorage.getItem(key));
// };
// const obj = {
//     name: 'chinu',
//     age: 21,
// };
// setDataInLocalStorage('userObject',obj);
// const data = getDataInLocalStorage('userObject');
// console.log(data);

// PROTOTYPE AND PROTOTYPAL INHERITANCE
// let arr = ['chinu','divyanshu'];
// a variable of a particular datatype has access to some built in function, methods and properties.
// how? becuase everything we make in javascript has it's prototype attached to it. 
// and this prototype is nothing but an object which contains several properties and methods
// ACCESSING THE PROTOTYPE OF A USER CREATED OBJECT
// console.log(arr.__proto__);
// console.log(Array.prototype);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);
// returns an object
// it's same as Array.prototype
// even the prototype of arr has another prototype
// and this prototype is the prototype of an object
// and this prototype has no prototype anymore
// it's null
// this seems like a chain
// and this chain is called prototype chain
// everything in javascript is an object 
// because everything in javascript at the end of prototype chain is an object
// MAKING AN OBJECT A PROTOTYPE OF ANOTHER OBJECT
// const companyData = {
//     joiningYear: 2024,
//     college: 'tier3',
//     intro: function(){
//         console.log(`I am from ${this.college} college and I joined the industry in ${this.joiningYear}`);
//     }
// };
// const personalData = {
//     college: 'tier1',
//     married: 'no',
//     state: 'chhattisgarh',
// };
// personalData.__proto__ = companyData;
// console.log(personalData.married);
// console.log(personalData.state);
// console.log(personalData.joiningYear);
// console.log(personalData.college);
// personalData.intro();
// the reason why we are able to access the data of the companyData object from the personalData object: because the prototype of the personalData has been set to the companyData object
// wheever we try to access a property or a method on an object, engine first searches for it in the object, and then the prototype of it's object, and then in the prototype of that prototype, and this is prototype chain
// EDITING THE PROTOTYPE
// Array.prototype.newProp = 'newPropValue';
// Array.prototype.newFunc = function(param)
// {
//     console.log(`the param passed to me is ${param}`);
// };
// const arr = [1,2,3,4];
// console.log(arr.newProp);
// arr.newFunc('sampleParameter');
// WHY __PROTO__
// - so that we don't end up changing the prototype by mistake

// POLYFILL FOR BIND
// const obj = {
//     firstName: 'chinu',
//     lastName: 'sahu',
// };
// const printName = function(age, role)
// {
//     console.log(`I am ${this.firstName} ${this.lastName}, a ${age} years old ${role}`);
// };
// OUR POLYFILL SHOULD WORK LIKE THIS
// let printObjName1 = printName.bind(obj);
// let printObjName2 = printName.bind(obj,'22');
// printObjName1('21');
// printObjName2();
// console.log(printObjName1);
// console.log(printObjName2);
// MY APPROACH
// Function.prototype.myBind = function(...params)
// {
//     const obj = params[0];
//     obj.func = this;
//     const args = params.slice(1);
//     // console.log(args);
//     return function(moreArgs){
//         // console.log(moreArgs);
//         obj.func(args,moreArgs);
//     };
// };
// const callthis = printObjName1.myBind(obj,'21');
// callthis('developer');
// console.log(obj);
// THE PROBLEM WITH THIS POLYFILL:
// - it attaches the function to the object
// - but while using the bind method, we don't attach the function to the object
// Function.prototype.myBind = function(...args)
// {
//     const func = this;
//     const argsSet1 = args.slice(1);
//     console.log(`the argsSet1 is ${argsSet1}`);
//     return function(...argsSet2){
//         console.log(`the argsSet2 is ${argsSet2}`);
//         func.apply(args[0],[...argsSet1,...argsSet2])
//     };
// };
// const callthis = printObjName1.myBind(obj,'21','developer');
// callthis();
// console.log(obj);

// FUNCTION CURRYING (USING THE BIND METHOD)
// function multiply(a,b)
// {
//     console.log(a*b);
// };
// const multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(3);
// const multiplyByThree = multiply.bind(this,3);
// multiplyByThree(4);
// DOUBT! why have we used this 

// FUNCTION CURRYING (USING THE CLOSURES)
// function multiply(a)
// {
//     return function(b)
//     {
//         console.log(a*b);
//     };
// };
// const crossTwo = multiply(2);
// crossTwo(3);

// DEBOUNCING
// MY APPROACH
// let inputBtn = document.getElementById('input');
// function betterFunc() {
//     inputBtn.addEventListener('keydown', actualFunc);
//     let a;
//     function actualFunc(e) {
//         clearTimeout(a);
//         a = setTimeout(() => {
//             console.log(e.target.value);
//         }, 500);
//     };
// };
// betterFunc();
// MY SOLUTION AFTER SEEING SIR'S APPROACH
// let inputBtn = document.getElementById('input');
// function printSearch(a)
// {
//     console.log(a.target.value);
// }
// const betterFunc = doSomeMagic(printSearch,500);
// function doSomeMagic(func,timer){
//     let a;
//     return function(e){
//         clearTimeout(a);
//         a = setTimeout(func, timer, e);
//     };
// };
// inputBtn.addEventListener('keydown', betterFunc);
// SIR'S APPROACH
let inputBtn = document.getElementById('input');
function printSearch(a)
{
    console.log(a.target.value);
}
const betterFunc = doSomeMagic(printSearch,500);
function doSomeMagic(func,timer){
    let a;
    return function(e){
        let context = this;
        let args = arguments;
        clearTimeout(a);
        a = setTimeout(()=>{
            func.apply(context,args);
        },timer);
    };
};
inputBtn.addEventListener('keydown', betterFunc);
// HOW IS BETTER THAN THE PRIVOUS SOLUTION
// because the doSomeMagic is know a generic function for doing debouncing
// just pass the function to be debounced, the timer and see automatic debouncing
// DOUBT! why did we use the apply function 


// functions are like heart of javascript
// people pull thier hairs
// time tide and javascript waits for none

// in javascript, functions do their work and remember their lexical scope
// similarly
// in life, should do our duties and stay grounded

// when javascript encounters a setTimeOut, it attaches a timer to it and moves forward