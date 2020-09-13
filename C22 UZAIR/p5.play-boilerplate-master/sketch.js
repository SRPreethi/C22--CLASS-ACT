const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ujju;

function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  var ujju_options = 
  {
    isStatic: true
  }

  ujju = Bodies.rectangle(167,245,364,21,ujju_options);
  World.add(world,ujju);
  console.log(ujju);
  console.log(ujju.position.x);
  console.log(ujju.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine); 

  fill("lime");
  rectMode(CENTER);
  rect(ujju.position.x,ujju.position.y,46,121);
  drawSprites();
}