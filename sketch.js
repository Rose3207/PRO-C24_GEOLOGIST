
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,sand,iron;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,height,1200,15)

   hammer=new Hammer(200,200);

   stone1 =new Stone(700,470,100,150 );
   stone2=new Stone(100,470,100,150 );

   iron=new Iron(400,470,80,50);

   rubber1=new Rubber(700,370,20,10);
   rubber2=new Rubber(100,370,20,10);

   sand1=new Sand(250,470);
   sand2=new Sand(270,470);
   sand3=new Sand(530,470);
   sand4=new Sand(540,470);

   //Engine.run(engine);
  
}


function draw() {
 
  rectMode(CENTER);

  background("black");

  Engine.update(engine);

  hammer.display();
  ground.display();
  stone1.display();
  stone2.display();
  iron.display();
  rubber1.display();
  rubber2.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  
  //text.collided("rubber")
  
 
   
}