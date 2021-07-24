const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var arrows=[];


function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase=new PlayerBase(300,random(450,height-300),180,150);
  player=new Player(285,playerBase.body.position.y-153,50,180);
  playerArcher=new PlayerArcher(340,playerBase.body.position.y-180,120,120);

  computerBase=new ComputerBase(width-300,random(450,height-300),180,150);
  computer=new Computer(width-280,computerBase.body.position.y-153,50,180);
  computerArcher=new ComputerArcher(width-340,computerBase.body.position.y-180,120,120);

}

function draw() {
  background(180);

  Engine.update(engine);

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerBase.display();
  player.display();
  computerBase.display();
  computer.display();
  playerArcher.display();
  computerArcher.display()

}

function keyPressed() {
  if(keyCode===32){
    arrow=new Arrow(playerArcher.x,playerArcher.y);
    arrows.push(arrow)
  }
}
function keyReleased () {
  if(keyCode===32){
    arrows[arrows.length-1].shoot()
  }
}
function showArrows(index, arrows) {
  arrow.display()
  if(arrow.body.position.x>=width || arrow.body.position.y>=height-50){
    Matter.World.remove(world,arrow.body)
    arrows.splice(index,1)
  }
}
