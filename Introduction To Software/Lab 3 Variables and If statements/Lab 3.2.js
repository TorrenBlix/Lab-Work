function setup() {

    let month = prompt("Remind me what month it is again?");
    if (month >=2 && month <=5){ 
     console.log("Ah yes I love spring!!!");
    }else if(month >=6 && month <=8){
     console.log("Summer is the best season of the year!");
    }else if(month >=9 && month <=11){
     console.log("Autumn is either a hit or a miss...");
   }else if (isNaN(month)){
     console.log("I wanted a number");
   }else{
     console.log("The only redeeming part about winter is christmas...");
   
   }
   }
   function draw() {
     background(220);
   }