const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block;
var ball;
var slingshot;
var bgIMG;

function preload()
{
  bgIMG = loadImage("bg9.jpg");
}

function setup() 
{
  var canvas = createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(500, 490, 1000, 20);
  ground2 = new Ground(600, 400, 200, 20);
  ground3 = new Ground(850, 300, 200, 20);

  block1 = new Block(520, 375, 35, 35);
  block2 = new Block(560, 375, 35, 35);
  block3 = new Block(600, 375, 35, 35);
  block4 = new Block(640, 375, 35, 35);
  block5 = new Block(680, 375, 35, 35);

  block6 = new Block(540, 340, 35, 35);
  block7 = new Block(580, 340, 35, 35);
  block8 = new Block(620, 340, 35, 35);
  block9 = new Block(660, 340, 35, 35);

  block10 = new Block(560, 305, 35, 35);
  block11 = new Block(600, 305, 35, 35);
  block12 = new Block(640, 305, 35, 35);

  block13 = new Block(580, 270, 35, 35);
  block14 = new Block(620, 270, 35, 35);

  block15 = new Block(600, 230, 35, 35);

  block16 = new Block(770, 270, 35, 35);
  block17 = new Block(810, 270, 35, 35);
  block18 = new Block(850, 270, 35, 35);
  block19 = new Block(890, 270, 35, 35);
  block20 = new Block(930, 270, 35, 35);

  block21 = new Block(790, 235, 35, 35);
  block22 = new Block(830, 235, 35, 35);
  block23 = new Block(870, 235, 35, 35);
  block24 = new Block(910, 235, 35, 35);

  block25 = new Block(810, 200, 35, 35);
  block26 = new Block(850, 200, 35, 35);
  block27 = new Block(890, 200, 35, 35);

  block28 = new Block(830, 165, 35, 35);
  block29 = new Block(870, 165, 35, 35);

  block30 = new Block(850, 130, 35, 35);
  
  ball1 = new Ball(50, 200, 20);

  slingshot = new SlingShot(ball1.body,{x:200, y:150});
}

function draw() 
{
  if(bgIMG)
      background(bgIMG);  

  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
  block10.display();
  block11.display();
  block12.display();
  
  block13.display();
  block14.display();

  block15.display();

  block16.display();
  block17.display();
  block18.display();
  block19.display();  
  block20.display();

  block21.display();
  block22.display();
  block23.display();
  block24.display();
  
  block25.display();
  block26.display();
  block27.display();
  
  block28.display();
  block29.display();
  
  block30.display();

  ball1.display();

  slingshot.display();
  
  drawSprites();

  textSize(25);
  fill("black")
  text("Drag the Polygon to Destroy the Blocks", 280, 40);
  text("Press the Space Key to Get a Second Chance to Play!!!", 190, 470);
  text(mouseX+":"+mouseY, 890, 30);
}

function mouseDragged()
{
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
  slingshot.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    slingshot.attach(ball1.body);
  }
}