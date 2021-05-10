
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var wall,wall2,wall3;
var garb;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var garb_option={
		'restitution':1,
		'friction':1,
		'density':1.0
	}

	//Create the Bodies Here.
	ground1 = new Ground(400,680,900,10)
	wall = new Ground(600,600,20,100)
	wall2 = new Ground(700,600,20,100)
	wall3 = new Ground(650,660,80,20)

	garb = Bodies.rectangle(100,500,50,50,garb_option);
	World.add(world,garb)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rectMode(CENTER);
  rect(garb.position.x,garb.position.y,50,50);
  keypressed()
  
  drawSprites();
  ground1.display();
  wall.display()
  wall2.display()
  wall3.display()
}
function keypressed(){
	if (keyDown("up")) {
		garb.position.x=620
		garb.position.y=255
	}
}