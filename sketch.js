
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(400,600)
	bobObject2 = new Bob(300,600)
	bobObject3 = new Bob(200,600)
	bobObject4 = new Bob(500,600)
	bobObject5 = new Bob(1500,1)

	roof = new Roof(400,100,600,10)
	roof1 = new Roof(300,100,600,10)
	roof2 = new Roof(200,100,600,10)
	roof3 = new Roof(500,100,600,10)
	roof4 = new Roof(600,100,600,10)
	rope1 = new Rope(bobObject1.body , roof.body , -2000,0.4)
	rope2 = new Rope(bobObject2.body , roof1.body , -2000,0.4)
	rope3 = new Rope(bobObject3.body , roof2.body , -2000,0.4)
	rope4 = new Rope(bobObject4.body , roof3.body , -2000,0.4)
	rope5 = new Rope(bobObject5.body , roof4.body , -2000,0.4)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  

  
  drawSprites();
 
}



