const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject, rope1, rope2, rope3, rope4, rope5;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var sling;


function setup() {
	createCanvas(1000,800);

	engine = Engine.create();
	world = engine.world;

  
   bobObject1 = new Bob(400,400);
   roofObject = new Ground(500,550,950,10);
   box1 = new Box(900,100,80,80);
   box2 = new Box(900,100,80,80);
   box3 = new Box(900,100,80,80);
   box4 = new Box(900,100,80,80);

   box5 = new Box(800,100,80,80);
   box6 = new Box(800,100,80,80);
   box7 = new Box(800,100,80,80);
   box8 = new Box(800,100,80,80);

   box9 = new Box(700,100,80,80);
   box10 = new Box(700,100,80,80);
   box11 = new Box(700,100,80,80);
   box12 = new Box(700,100,80,80);

   sling= new Slingshot(bobObject1.body,{x:500,y:100})
}


function draw() {
 
  background("white");
  Engine.update(engine);
  bobObject1.display();
  roofObject.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  sling.display();
  drawSprites();
 }
 
 function mouseDragged(){
   Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})
 }




