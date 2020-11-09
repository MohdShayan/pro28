
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var boyImg;
function preload()
{
	boyImg =loadImage("images/boy.png")
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Ground(0,790,2400,20);
tree = new Tree (500,700);
stone = new Stone (120,600);

mango1= new Mango (800,250,20);
mango2= new Mango (900,300,20);
mango3= new Mango (950,215,20);
mango4= new Mango (1050,430,20);
mango5= new Mango (910,390,20);
mango6= new Mango (1000,330,20);
mango7= new Mango (685,455,20);
mango8= new Mango (1100,350,20);
mango9= new Mango (640,370,20);
mango10= new Mango (790,440,20);
mango11= new Mango (840,340,20);
mango12= new Mango (720,395,20)


chain = new StoneThrow(stone.body,{x:150,y:670});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  fill("orange")
textSize(30);
text("Press space to get a second chance",12,40);

  image(boyImg, 100, 590,250, 250);
  
  tree.display();
  stone.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

 chain.display();

 detectollision(stone,mango1);
 detectollision(stone,mango2);
 detectollision(stone,mango3);
 detectollision(stone,mango4);
 detectollision(stone,mango5);
 detectollision(stone,mango6);
 detectollision(stone,mango7);
 detectollision(stone,mango8);
 detectollision(stone,mango9);
 detectollision(stone,mango10);
 detectollision(stone,mango11);
 detectollision(stone,mango12);
}
function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
}
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:120,y:600})
    chain.attach(stone.body);
  }
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  stone.fly();
}

