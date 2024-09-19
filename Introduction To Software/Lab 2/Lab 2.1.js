//Lab 2 tasks

// 1

//task a
let y = 150;

function setup() {
  console.log("Current value of y is: " + y);
  createCanvas(400,400);

//task b
console.log("1 + " + y + " = "+ (1+y));

//task c
let x = y * 2 ;
console.log("the value of x = "+x)

// 2

let name = prompt("What is your name?");
console.log("Greetings " + name);
let length = name.length;
console.log("Your name starts with " + name.charAt(0) + " and ends with " + name.charAt(length-1))


}
function draw() {
  fill("green");
  square("100,100,100");
}

