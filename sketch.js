const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var colour = 0;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(map(frameCount,0, 255, 0, 255));

  Engine.update(engine);

  if(frameCount%1 === 0){
    drops.push(new Drop(random(10,790), random(-60,30), random(5, 10), random(30, 40)));
  }

  for (var i = 0; i < drops.length; i++) {
    drops[i].display();
  }

  drawSprites();
}