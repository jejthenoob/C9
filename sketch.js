var box; 
// setup only works once - beginning
function setup() {
  createCanvas(400,400);
  box = createSprite (200,200, 50, 50);
}
// draw - continously running
function draw() 
{
  background(200);

  if (keyDown ("up")){
    box.y -= 5;
    box.shapeColor = "blue"
    background("yellow");
  }
  if (keyDown ("down")){
    box.y += 5;
    box.shapeColor = "red"
    background("black");
  }
  if (keyDown ("left")){
    box.x -= 5;
    box.shapeColor = "green"
    background("darkgreen");
  }
  if (keyDown ("right")){
    box.x += 5;
    box.shapeColor = "black"
    background("white");
  }

  drawSprites();
}




