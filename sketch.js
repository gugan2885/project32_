
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var balls;
var blowers;
var blowerMouths;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  blowers = new Blower(200,690,600,20);
  blowerMouths=new BlowerMouth(400,690,600,20);

 rectMode(CENTER);
 ellipseMode(RADIUS);
}

function draw() {
  background("green");  
 
  Engine.update(engine);

 blowers.display();
 blowersMouths.display();

 
}