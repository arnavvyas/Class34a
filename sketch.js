const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var g1;

function setup(){
createCanvas(3000, 800);
engine = Engine.create;
world = engine.world;
g1 = new ground(600,600,1200,20);
}

function draw(){
background(180);
Engine.update(engine);
g1.display();
}