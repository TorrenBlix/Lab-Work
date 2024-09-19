let diameter = Array(10);
let colours;
let colourArray = [];
let sizeArray = [];


function setup() {

  createCanvas(400,400);
  colourArray = [
    ("red"),("green"),("blue"),("pink"),
  ];
  
  sizeArray = [
    ("50"),("75"),("100"), ("125"), ("150"),   
  ];

  diameter[0] = 50;
  for(let j=1; j<diameter.length; j++){
    diameter[j] = diameter[j-1]+=10

  }


for(let i = 0; i<diameter.length; i++){
  colours = colourArray[Math.floor(random(colourArray.length))];
  x = random(width);
  y = random(height);
  
 
  fill(colours);
  circle(x, y, 40);

}

}

function draw() {


}
