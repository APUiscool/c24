class Arrow{
    constructor(x,y) {
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0,
        isStatic: true
      }
  
      this.body=Bodies.rectangle(x,y,w,h,options)
      this.w=w
      this.h=h
      this.image=loadImage("./assets/arrow.png")
      World.add(world,this.body)
    }
    shoot() {
      var velocity=p5.Vector.fromAngle(playerArcher.angle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body,false)
      Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    }
    display() {
      var angle=this.body.angle;
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.w,this.h);
      pop();
    }
}