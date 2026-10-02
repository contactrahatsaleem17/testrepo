// CONDITIONAL STATEMENTS 

let mode = 'white'; 
let color; 

if(mode === 'dark'){
  color = 'black'
}

if(mode === 'white'){
  color = 'white'
}

console.log(color);

// let age = 15; 

// if(age >= 18){ 
//   console.log("You can Vote"); 
// } else { 
//   console.log("You cannot Vote. Only 18 years or older can vote"); 
// }

// Find Odd and Even Numbers 

// let num = prompt('enter a number');  
// if(num % 2 === 0){ 
//   console.log(num, "The number is Even")
// } else {
//   console.log(num, "The number is Odd")
// }

// let num = prompt("Enter a Number"); 
// if(num % 5 === 0){
// console.log("Yes! It is a  Multiple of 5")
// } else{ 
//   console.log('No, it is Not a Multiple of 5')
// }

// let score = 100;
// let grade;

// if( score >= 80 && score <=100){
//   console.log(grade = "Your grade is A")
// }else if(score >= 70 && score <=79 ) { 
//   console.log(grade = "Your grade is B")
// }else if(score >= 60 && score <=69 ) { 
//   console.log(grade = "Your grade is C")
// }else if(score >= 50 && score <=59 ) { 
//   console.log(grade = "Your grade is D")
// }else if (score >= 0 && score <=49 ) { 
//   console.log(grade = "Your grade is F")
// }


// let score = 85;
// let grade;

// if( score >= 80 && score <=100){
//   grade = "A";
// }else if(score >= 70 && score <=79 ) { 
//   grade = "B";
// }else if(score >= 60 && score <=69 ) { 
//     grade = "C";
// }else if(score >= 50 && score <=59 ) { 
//     grade = "D";
// }else if (score >= 0 && score <=49 ) { 
//   grade = "F";
// }
// console.log("According to you score your grade is ", grade); 


////////////////////////////////////////////////////////////////////////

//////// Conditional Statements and Operators 

/*Easy

Write a program that takes a number and prints "Positive", "Negative", or "Zero".
Check if a number is even or odd and print the result.
Given a person's age, print "Adult" if 18 or older, otherwise "Minor".
Given two numbers, print the larger one. */

// //Problem # 1 Write a program that takes a number and prints "Positive", "Negative", or "Zero".
// let value; 
// let num = prompt("Enter a Number"); 
// if(num >= 1){
// value = "positive";
// }else if( num <= -1){
//   value = "Negative";
// }else if(num === '0'){
//   value = "Zero"
// }
// console.log("The number is ", value); 

// //Problem # 2 Check if a number is even or odd and print the result.
// let num1 = prompt("Enter a Number to check Even or Odd"); 
// let result;
// if(num1 % 2 === 0){
// result = "Even"; 
// }else{ 
//   result = "odd"; 
// }
// console.log("The number is ", result); 

// // Problem # 3 Given a person's age, print "Adult" if 18 or older, otherwise "Minor".
// let age = prompt("Enter your Age for Eligibility"); 
// let person
// if(age >= 18){
//   person = "Adult"; 
// }else{
//   person = "Minor"
// }
// console.log("You are consider as", person); 

// // Problem # 4 Given two numbers, print the larger one. 
// let a = 9; 
// let b = 6; 

// if( a > b ){
//   console.log(a);
// }else { 
//   console.log(b); 
// }

// /*Medium
// 5. Given a percentage score, print the grade: A (≥90), B (≥80), C (≥70), D (≥60), F (below 60).
// 6. Check if a year is a leap year (divisible by 4, but not by 100 unless also by 100 unless also by 400) and print "Leap Year" or "Not a Leap Year".
// 7. Given three numbers, print the largest of the three.
// 8. Given a triangle's three side lengths, print whether it's Equilateral, Isosceles, or Scalene. */


// // //5. Given a percentage score, print the grade: A (≥90), B (≥80), C (≥70), D (≥60), F (below 60).

// let score = prompt("Enter your Percentage"); 
// let grade;
// if(score >= 90 && score <= 100){
//   grade = "A - You are a top 1%"
// }else if(score >= 80){
//   grade = "B - You are an Intelligent Student"
// }else if(score >= 70){
//   grade = "C - You can do alot better than this "
// }else if(score >= 60){
//   grade = "D - You can do study Harder "
// }else if(score < 60){
//   grade = "F - You have to re-attempt the exam"
// }
// console.log(grade);

// // // 6. Check if a year is a leap year (divisible by 4, but not by 100 unless also by 100 unless also by 400) and print "Leap Year" or "Not a Leap Year".

// let year = 1996; 
// let cond1 = (year / 4); 
// let cond2 = (year / 100 && year / 400); 
// let isLeap; 
// if(cond1 && cond2){
//   isLeap = "Leap Year"; 
// }else{ 
//   isLeap = "Not a Leap Year"; 
// }
// console.log(isLeap); 

// // // // 7. Given three numbers, print the largest of the three.
// let p = 15;
// let q = 16; 
// let r = 17; 
// let largestNum
// if( p>q && p>r ){
//   largestNum = p; 
// }else if( q>p && q>r ){ 
//   largestNum = q; 
// }else if( r>p && r>q ){
//   largestNum = r; 
// }
// console.log("The largest Number is ", largestNum); 

// // // 8. Given a triangle's three side lengths, print whether it's Equilateral, Isosceles, or Scalene. */
// // let triSide1 = 5;
// // let triSide2 = 4;
// // let triSide3 = 3;
// // if(triSide1 === triSide2 && triSide2 === triSide3 ){ 
// //  console.log("Equilateral because all 3 sides of the triangle are equal"); 
// // }else if (triSide1 === triSide2 || triSide1 === triSide3 || triSide2 === triSide3 ){
// //  console.log("Isosceles because 2 sides of the triange are equal"); 
// // }else if (triSide1 !== triSide2 !== triSide3 ){
// //  console.log("Scalene because no sides of the triange is  equal"); 
// // }

// // // 2nd way to Print it. 

// let triSide1 = 5;
// let triSide2 = 5;
// let triSide3 = 5;
// let triAngle; 
// if(triSide1 === triSide2 && triSide2 === triSide3 ){ 
//  triAngle = "Equilateral because all 3 sides of the triangle are equal"; 
// }else if (triSide1 === triSide2 || triSide1 === triSide3 || triSide2 === triSide3 ){
//  triAngle = "Equilateral because all 3 sides of the triangle are equal"; 
// }else if (triSide1 !== triSide2 !== triSide3 ){
//  triAngle = "Equilateral because all 3 sides of the triangle are equal"; 
// }
// console.log(triAngle);


/////////////////// HARD EXERCISE 
/* Hard
/* 9. Given a username and password, check both against stored values and print "Login Successful", "Wrong Password", or "User Not Found" (simulate with hardcoded correct values).
10. Given a date (day, month, year), check if it's valid (e.g., no Feb 30, no month 13, correct days per month, leap year Feb 29).
11. Build a simple calculator: given two numbers and an operator (+, -, *, /), print the result — and print "Cannot divide by zero" if dividing by 0. */


// let userName = prompt('Enter your username'); 
// let passWord = prompt('Enter your password'); 
// const  userInfo1 = 'Sana_saleem';
// const  passWord1 = 'Abcde_12345';
// if(userName === userInfo1 && passWord === passWord1){
//   console.log("Login Successful"); 
// }else{ 
//   console.log("User not found - Incorrect password or Username"); 
// }

//Quetion # 11

// let a = prompt("Enter a number");
// let b = prompt("Enter a number");
// let c = prompt("enter +, -, *, /"); 
// let d = a+b; 
// let e = a-b; 
// let f = a*b; 
// let g = a/b; 
// if(c === '+' ){
// console.log(d); 
// }else if(c === '-' ){
// console.log(e); 
// }else if(c === '*' ){
// console.log(f); 
// }else if(c === '/' ){
// console.log(g); 
// }
