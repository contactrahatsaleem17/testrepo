
///////////////////////// for loops 
for(let i = 1; i <= 17; i++){
  console.log('Entrepreneur Rahat'); 
}
console.log('The loop has ended'); 

for(let j = 1; j<=30; j++ ){
  console.log('Congrats Jay you are printed')
}

let sum = 0; 
for(let m = 1; m <= 100; m++ ){
  sum = sum + m; // sum = 3+3, 
}
console.log(sum); 
console.log('Loops has ended'); 

// Print Even Numbers
for(i = 0; i <= 10; i += 2){
  console.log("Even Number = ", i); 
}

// Print Odd Numbers
for(j = 0; j <= 10; j += 1){
  console.log("Odd Number = ", j); 
}

//reverse 
for(m = 10; m >=1; m--){
  console.log(m); 
}

// Print 1 to 20
for(let n = 1; n <= 20; n++){
  console.log(n); 
}

// Print 20 to 1
for(let o = 20; o >= 1; o--){
  console.log(o); 
}

// Print even numbers till 50
for(let p = 2; p <=50; p +=2){
  console.log("Even Number", p); 
}
// 4. Print odd numbers till 50
for(let q = 1; q <= 50; q +=2){
  console.log("Odd Number", q); 
}

// 5. Print your name 10 times
for(let r = 1; r <=10; r += 1){
  console.log('Entrepreneur Rahat'); 
}

//////////////////// while loop 
//Use While loop to print 1 - 10

let s = 1;
while(s <= 10){
console.log(s); 
s++; 
}

//////////////////////////while loop 
//Use do while to print 1 -10

t=10;
do{
console.log(t)
t--; 
}while( t >= 1); 


// for-of loop 
//prints characters of string in a List format along with spaces.  
let str = "Apna College"; 
for(let x of str){ 
console.log(x); // prints characters of Apna College in a List along with spaces.  
}

// print length of name "Rahat"

let strName = "Rahat"; 
let length = 0; 
for(let y of strName ){
console.log(y);
length++;  
}
console.log(length); // Length of strName i.e "Rahat" is 5. 

////////////// for- in Loop 
/// Print the keys in an Object and Print Values of Key 
let objA = { 
  name: "Rahat", 
  experience: "10 years", 
  age: 30, 
  state: "Successful Entrepreneur", 
}; 

for( let key in objA ){
console.log(key, objA[key]); 
}

/// Problems by Ma'am Sharadha  Khapra 
//Print all the even numbers from 1 to 100 

let k = 1; 
while( k <= 100){ 
console.log("Number =",  k)
k++; 
}

//Print Even Number 

let l = 2; 
while( l <= 100){ 
console.log(" Even Number =",  l)
l += 2; 
}


//Print odd Number 
let z = 1; 
while( z <= 100){ 
console.log(" Odd Number =",  z)
z += 2; 
}

////// Using for Loop and if-else statment together

////Print Even and Odd Together using for loop and if-else statement
for(let u = 0; u<=100; u++){
  if(u % 2 ===0){
console.log("Even Number", u);
  } else{
    console.log("odd Number", u); 
  }
}


/// Print all Even numbers from  to 100


for(let f = 0; f <=100; f++){
  if( f % 2 === 0){
    console.log('Even number', f); 
  } else {
    console.log("Odd number", f);
  }

} 

// Guess a number Game  // Guess a Number until
let gameNum = 27; 
let guesNum = prompt("Guess a Number to win"); 

  while (guesNum != gameNum){
    guesNum = prompt("You entered the wrong number: Guess Again!");

}

prompt("Congratualtion you entered the right number");
console.log("Congratualtion you entered the right number"); 

///Practice Questions
/// Prompt the user to enter their full name. Generate a username based on the input. Start User name with @, followed by their fullname and ending with their full length

/// Method # 1
let fullName = prompt("Enter your full Name");
let fullName1 = "@" + fullName; 
let fullNameLength = fullName.length; 
let userName =  fullName1.concat(fullNameLength); 
console.log(userName);
prompt("Your user name is:  ", userName);


// try anothermethod // Method # 2

let cnicName = prompt("Enter your name without spaces");
let userName1 = "@"+cnicName+cnicName.length; 
console.log(userName1); 
prompt("Your user name is:  ", userName1);
