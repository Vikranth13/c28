
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var kid;
var tree;
var ground;
function preload()
{
  timg = loadImage("Plucking mangoes/tree.png");
  kimg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
  invisground = new Ground(600,630,1200,20);
  ground = createSprite(600,610,1200,20);
  ground.shapeColor = "brown";

  rock = new Rock(75,410);

  kid = createSprite(150,520);
  kid.addImage(kimg);
  kid.scale = 0.15;

  tree = createSprite(950,300);
  tree.addImage(timg);
  tree.scale = 0.5;

  slingshot = new SlingShot(rock.body,{x:75, y:410});

  m1 = new Mango(1100,100,10);
  m2 = new Mango(1000,30,10);
  m3 = new Mango(860,60,10);
  m4 = new Mango(1160,150,10);
  m5 = new Mango(820,140,10);
  m6 = new Mango(870,220,10);
  m7 = new Mango(950,150,10);
  m8 = new Mango(780,265,10);
  m9 = new Mango(1170,240,10);
  m10 = new Mango(1050,200,10);
  m11 = new Mango(720,200,10);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  detectCollision(rock,m1);
  detectCollision(rock,m2);
  detectCollision(rock,m3);
  detectCollision(rock,m4);
  detectCollision(rock,m5);
  detectCollision(rock,m6);
  detectCollision(rock,m7);
  detectCollision(rock,m8);
  detectCollision(rock,m9);
  detectCollision(rock,m9);
  detectCollision(rock,m10);
  detectCollision(rock,m11);
  
  
  drawSprites();
  ground.display();
  rock.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  
  textSize(50);
  fill("black");
  text("Press space to throw again!",50,50)
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		slingshot.attach(rock.body);
	}
}
function detectCollision(lrock,lmango)
 {
   mangoBodyPosition=lmango.body.position;
   rockBodyPosition=lrock.body.position;
   var distance = dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.width+lrock.width){
		Matter.Body.setStatic(lmango.body,false);
	}
 }
