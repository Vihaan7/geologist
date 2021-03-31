class Hammer {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, 150, 50, options);
      this.width = 150;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("brown");
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  