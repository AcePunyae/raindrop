var backgroundimg
function preload() {
  backgroundImg = loadImage("Rainfall.png");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 
}

function draw() {
  background(backgroundimg);  
  drawSprites();
}