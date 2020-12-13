
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter. Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(400,50,300,50)

	bob1=new Bob(400,250,40)
	bob2=new Bob(360,250,40)
	bob3=new Bob(320,250,40)
	bob4=new Bob(440,250,40)
	bob5=new Bob(480,250,40)
	
	chain1=new Chain({x:400,y:50},bob1.body);
	chain2=new Chain({x:360,y:50},bob2.body);
	chain3=new Chain({x:320,y:50},bob3.body);
	chain4=new Chain({x:440,y:50},bob4.body);
	chain5=new Chain({x:480,y:50},bob5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  

  
  drawSprites();
 
}



