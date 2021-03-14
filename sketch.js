var TreeIm, BoyIm, StoneIm, MangoIm, tree, boy, stone, mango1, mango2, mango3, mango4, mango5, constr;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	TreeIm= loadImage("tree.png")
	BoyIm= loadImage("boy.png")
	StoneIm= loadImage("stone.png")
	MangoIm= loadImage("mango.png")
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	tree= new Tree(900,200,100,100);
	stone= new Stone(50,100,10,10);
	boy= new Boy(100,200,100,100);
	mango1 = new Mango(880,150,10,10);
	mango2 = new Mango(880,160,10,10);
	mango3 = new Mango(880,170,10,10);
	mango4 = new Mango(880,180,10,10);
	mango5 = new Mango(880,190,10,10);
	constr = new Constrama(stone.body,{x:880,y:170});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();
  stone.display();
  boy.display();
   
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
 }
 
 function mouseReleased(){
   constt.fly();
 }


