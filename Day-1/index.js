//Q1.Difference between “ == “ and “ === “ operators.

// == and === both are Comparison Operators.
// == to check the both equal values   are not.
// === to check the both equal values  and equal data types are not.

//Q2.What is the spread operator?																									

//The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
//The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

//ex-1
// const odd = [1,3,5];
// const even = [2,4,6];
// console.log(...odd,...even);

//Q3.What are the differences between var, let and const?																									

//Variables declared with var and const are scoped to the immediate function body.
//Variables declared with the var keyword are hoisted.
// Hoisting means that the variable can be accessed in their enclosing scope even before 
//they are declared.
//Variables declared with the let keyword are block-scoped, which means the variables 
//will have scope to the immediate enclosing block.


//Q4.What is execution context																									
// There are two kinds of Execution Context in JavaScript:
// 1.Global Execution Context (GEC)
// 2.Function Execution Context (FEC)

// 1. Global Execution Context (GEC)
// Whenever the JavaScript engine receives a script file,
// it first creates a default Execution Context known as the Global Execution Context (GEC).
//The GEC is the base/default Execution Context where all JavaScript code that is not inside
// of a function gets executed.For every JavaScript file, there can only be one GEC.

// 2. Function Execution Context (FEC)
// Whenever a function is called, the JavaScript engine creates a different type of 
//Execution Context known as a Function Execution Context (FEC) 
//within the GEC to evaluate and execute the code within that function. 
// Since every function call gets its own FEC, there can be more than one
// FEC in the run-time of a script.


//Q5.What is creation phase and execution phase?																									

// creation phase
//When the JavaScript engine executes a script for the first time,
 //it creates the global execution context. During this phase, the JavaScript engine performs
 // the following tasks:
// Create the global object i.e., window in the web browser or global in Node.js.
// Create the this object and bind it to the global object.
// Setup a memory heap for storing variables and function references.
// Store the function declarations in the memory heap and variables within
// the global execution context with the initial values as undefined.

//execution phase
//During the execution phase, the JavaScript engine executes the code line by line,
// assigns the values to variables, and executes the function calls.
//For each function call, the JavaScript engine creates a new function execution context.
//The function execution context is similar to the global execution context. 
//But instead of creating the global object, the JavaScript engine creates the arguments 
//object that is a reference to all the parameters of the function:

///Q6.What are closures? Give an example of closure	

//  closures - Its not somethig that we create manually or explicitly. 
//it happens automatically in certain situation which we need to analyze/realize ourselves.
// closure makes a function remember all the variables that existed in the function
// birth place initinally.
// Any function always have access to the "Variable Environment " of the execution context
// in which the function was created.

let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}
g();
f();

