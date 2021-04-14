class paper {
    constructor(x, y) {
      var options = {
          isStatic:false,   
          'restitution':0.3,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, options);
      this.image= loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);

      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  