
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var hammer;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,800,20)
	stone = new Stone(700,320,70,70);
	hammer = new Hammer(710,260,300,PI/2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  ground.display();
  
  stone.display();
  hammer.display();
}



