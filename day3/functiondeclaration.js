// function func(){
//     console.log("hello world");
// }
// console.log(demo)// prints entire function 
// func()

// function sum(a,b){
//     return a+b;
//     console.log("Hello world") //will not  be executed 
// }   
// let a = 2;
// let b = 18;

// let c = sum(a,b);
// console.log(c);
// // the main purpose of using function in javascript is code reusability 
// console.log(sum(100,100));


//create a function it should perform arithmetic operation for two numbers

// function arithmetic(a,b){
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a/b);
//     console.log(a%b);
// }

// const number1 = Number(prompt("Enter number1:"));
// const number2 = Number(prompt("Enter number2:"));

// arithmetic(number1,number2);

// Assignment 
// create a function to find largest of three numbers and the input will be given by user

// function largestOfThree(a,b,c){
//      if(a>=b && a>=c){
//         return a;
//     }
//     else if(b>=a && b>=c){
//         return b;
//     }
//     else{
//         return c;
//     }
// }

// let a = Number(prompt("Enter number 1"));
// let b= Number(prompt("Enter number 2:"));
// let c = Number(prompt("Enter number 3:"));

// console.log("Largest Number is : ",largestOfThree(a,b,c));

// Function Expression
// assigning function as a value to a variable is called function expression it is used to perform specific task 
// let b = 200;
// console.log(b)//200
// let c = function(){
//     console.log("Hello");
// }