
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1;
var rect2;
var rect3;
var paper;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	rect1 = new Box(600,690,200,20);
	rect1.shapeColor = 'red'
	rect2 = new Box(510,650,20,100);
	rect2.shapeColor = 'red'
	rect3 = new Box(690,650,20,100);
	rect3.shapeColor = 'red'
	Engine.run(engine);

	paper = new Paper(100, 700, 30, 30);
	ground = new Ground(400, 650, 10, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect1.display();
  rect2.display();
  rect3.display();
  paper.display();
  ground.display();

  
  drawSprites();
  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x: 85,y: -85});
	}

}
