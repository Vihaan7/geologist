class Sand {
  constructor(x, y, r) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.r=r;
    this.body = Bodies.circle(x, y,this.r/2, options);
   
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("pink");
    ellipse(0, 0,this.r, this.r );
    pop();
  }
};