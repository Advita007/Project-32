const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground;
var polygon;
var bg;
var score = 0
var Bg_Music;
var balloon

function preload(){
  bg = loadImage("Bg.png.jpg")
  Bg_Music = loadSound("Bg_Music.m4a")
  balloon_Img = loadImage("HotAirBalloon.png")
  }

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;


  Bg_Music.loop();

  ground=new Ground(width/2,585,width,20);
 

  // level 4
  balloon1 = new Balloons1(350,100,130);
  balloon2 = new Balloons1(415,100,130);
  balloon3 = new Balloons1(480,100,130);
  balloon4 = new Balloons1(545,100,130);
  balloon5 = new Balloons1(610,100,130);
  balloon6 = new Balloons1(675,100,130);

  balloon14= new Balloons2(495,215,100);  
  balloon15 = new Balloons2(550,215,100);
  balloon16 = new Balloons2(605,215,100);
  balloon17 = new Balloons2(660,215,100);
  balloon18 = new Balloons2(715,215,100);
  balloon19= new Balloons2(440,215,100);

  //level 3
  balloon7 = new Balloons3(470,265,90);
  balloon8 = new Balloons3(525,265,90);
  balloon9 = new Balloons3(580,265,90);
  //block10 = new Block(635,245,40,50);

  balloon20 = new Balloons3(635,265,90);
  balloon21 = new Balloons3(690,265,90);
  balloon22 = new Balloons3(555,310,90);
 // block23 = new Block2(1010,165,55);

  //level 2
  balloon11 = new Balloons2(530,350,100);
  balloon12 = new Balloons2(580,350,100);
  
  balloon24= new Balloons1(740,100,130);
  balloon25 = new Balloons1(805,100,130);

  //level 1
  balloon13 = new Balloons3(610,310,90);

  balloon26 = new Balloons4(400,175,110);
  balloon27 = new Balloons4(460,175,110);
  balloon28 = new Balloons4(520,175,110);
  balloon29 = new Balloons4(580,175,110);
  balloon30 = new Balloons4(640,175,110);
  balloon31 = new Balloons4(700,175,110);
  balloon32 = new Balloons4(760,175,110);
  balloon33 = new Balloons4(500,310,90);
  balloon34 = new Balloons4(660,310,90);
  balloon35 = new Balloons4(630,355,90);
  balloon36 = new Balloons4(560,400,90);

  balloon37 = new Balloons4(610,400,90);
  balloon38 = new Balloons1(585,430,90);
 
 
  ball= new Polygon(50,200,40);

 

  slingshot = new Slingshot(ball.body,{x:100,y:130})
  Engine.run(engine);


}

function draw() {


  background(bg);
  //Add code for displaying text here!



  textFont("Cuteness Persimmon");
  textSize(40);
  fill(31,50,92);
  text("Drag the ball to launch it towards the balloons!",20,500);
  text("Score:"+score,1000,50)
  text("Press Space to retry!",20,540)
 

  ground.display();


  balloon1.display();
  balloon2.display();
  balloon3.display();
  balloon4.display();
  balloon5.display();
  balloon6.display();
  balloon7.display();
  balloon8.display();
  balloon9.display();
  //block10.display();
  balloon11.display();
  balloon12.display();
  balloon13.display();
  balloon14.display();
  balloon15.display();
  balloon16.display();
  balloon17.display();
  balloon18.display();
  balloon19.display();
  balloon20.display();
  balloon21.display();
  balloon22.display();
 // block23.display();
 balloon24.display();
 balloon25.display();
 balloon26.display();
 balloon27.display();
 balloon28.display();
 balloon29.display();
 balloon30.display();
 balloon31.display();
 balloon32.display();
 balloon33.display();
 balloon34.display();
 balloon35.display();
 balloon36.display();
 balloon37.display();
 balloon38.display();

 ball.display();

  detectCollision(ball,balloon1);
  detectCollision(ball,balloon2);
  detectCollision(ball,balloon3);
  detectCollision(ball,balloon4);
  detectCollision(ball,balloon5);
  detectCollision(ball,balloon6);
  detectCollision(ball,balloon7);
  detectCollision(ball,balloon8);
  detectCollision(ball,balloon9);
  detectCollision(ball,balloon11);
  detectCollision(ball,balloon12);
  detectCollision(ball,balloon13);
  detectCollision(ball,balloon14);
  detectCollision(ball,balloon15);
  detectCollision(ball,balloon16);
  detectCollision(ball,balloon17);
  detectCollision(ball,balloon18);
  detectCollision(ball,balloon19);
  detectCollision(ball,balloon20);
  detectCollision(ball,balloon21);
  detectCollision(ball,balloon22);
  detectCollision(ball,balloon24);
  detectCollision(ball,balloon25);
  detectCollision(ball,balloon26);
  detectCollision(ball,balloon27);
  detectCollision(ball,balloon28);
  detectCollision(ball,balloon29);
  detectCollision(ball,balloon30);
  detectCollision(ball,balloon31);
  detectCollision(ball,balloon32);
  detectCollision(ball,balloon33);
  detectCollision(ball,balloon34);
  detectCollision(ball,balloon35);
  detectCollision(ball,balloon36);
  detectCollision(ball,balloon37);
  detectCollision(ball,balloon38);
  
  
  slingshot.display();

  spawnBalloons();

  drawSprites();
  
}

function detectCollision(arrow,balloon) {
  balloonBodyPosition = balloon.body.position
  arrowBodyPosition = arrow.body.position

  var distance = dist(arrowBodyPosition.x,arrowBodyPosition.y,balloonBodyPosition.x,balloonBodyPosition.y);

  if (distance<=balloon.r+arrow.r) {
    Matter.Body.setStatic(balloon.body,false)
    score++
  }

 
  }



function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
if (keyCode === 32){
  Matter.Body.setPosition(ball.body,{x:100,y:130});
  slingshot.attach(ball.body);
}
}

function spawnBalloons(){
 
    if (frameCount%70 === 0) {
    balloon = createSprite(100,50,10,40);
    balloon.velocityY = 5
    balloon.scale = 0.1
    balloon.addImage(balloon_Img);
    balloon.x = Math.round(random(0,1200));
    }
}

