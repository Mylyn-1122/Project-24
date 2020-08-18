
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400, 660, 800, 30);

	Paper = new paper(100, 600, 20);

	right = new box(610,595,20,100);
	left = new box(390,595,20,100);
	bottom = new box(500, 635, 200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  Paper.display();

  right.display();
  left.display();
  bottom.display();

  //console.log(Paper);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:35,y:-85});
	}
}

