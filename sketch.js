var fixedRect, movingRect;

var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(200, 200, 50, 50);
  object1.velocityX = 2;

  object2 = createSprite(500, 200, 50, 50);
  object2.velocityX = -2;

}

function draw() {
  
  background(0,0,0);  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(object1, object2);
  
  drawSprites();

}