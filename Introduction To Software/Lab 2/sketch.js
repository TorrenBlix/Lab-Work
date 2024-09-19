let x = 400;
let c = 0;
let y = 0;


function setup(){
createCanvas(800, 800);
}
function draw(){
background(255);
x--;
c++;
y++;

square(x, 10, 100);

circle(c,y,100);

rect(0, 0, c);

square(0, 0, x)

}