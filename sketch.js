const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;
var ground
var box1
var ball
var rope

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world = engine.world;

  ground = new Ground(400,380,800,10)
  box1 = new Building(500,200,50,50)
  ball = new Ball(200,100,40,40)

  rope = new Rope(ball.body,{x:200,y:100})
 console.log(ball)
}

function draw() {
  Engine.update(engine)
  background(255,255,255);

  ground.display();
  box1.display();
  ball.display();
  rope.display();




}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY})
}