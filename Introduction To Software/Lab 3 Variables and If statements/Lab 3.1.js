function setup() {

    let answer = prompt("enter a number between 1 and 10");
    if (answer>=2 && answer <=9){ 
     console.log("Good choice...");
    }else{
     console.log("You had one job...");
    }
   
   }
   function draw() {
     background(220);
   }