function setup() {
  

  let num = prompt("Enter a number");
  num = Number(num);

  if(!isNaN(num)){
    let star = "";
    let counter=0;

    while(counter < num){
      star = star+"*";
      counter++;
    }
    console.log(star);
  }
    
  
}

function draw() {
  background(220);
}
