const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12,box13;
var box14,box15,box16;
var ground,ball;
var slingshot;


function setup() {
  createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

   ball=new Ball(200,200,20,20,"red");
  
   box2=new Box (400,490,30,40,"yellow");
   box3=new Box (450,490,30,40,"red");
   box4=new Box (500,490,30,40,"green");
   box5=new Box (550,490,30,40,"brown");
   box6=new Box (600,490,30,40,"violet");
   box7=new Box (650,490,30,40,"yellow");
   box8=new Box (650,490,30,40,"green");
   box9=new Box (600,460,30,40,"pink");
   box10=new Box (550,460,30,40,"green");
   box11=new Box (500,460,30,40,"yellow");
   box12=new Box (450,460,30,40,"violet");
   box13=new Box (400,460,30,40,"red");
   box14=new Box (650,460,30,40,"green");
   box15=new Box (600,460,30,40,"yellow");
   box16=new Box (550,390,30,40,"pink");
   box17=new Box (500,390,30,40,"violet");
   box18=new Box (450,390,30,40,"red");
   box19=new Box (400,390,30,40,"brown");
   
   slingshot=new Chain(ball.body,{x:200,y:200},"yellow");
   ground=new Ground (200,500,1200,30);
   
   }

function draw() {
  background("yellow");  
  Engine.update(engine);
  fill ("yellow");
 
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
 ball.display();


  slingshot.display();
  ground.display();
}



function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
      slingshot.Fly();
  }
 
  
    
    