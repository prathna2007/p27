class Rope {
    constructor(body1,body2 ,offsetX,offsetY) {
      this.offsetX = offsetX
      this.offsetY = offsetY
      var options = {
        bodyA: body1,
        bodyB : body2,
        pointB:{x:this.offsetX, y:offsetY}
      }
  
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(4);
  
        line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y + this.offsetY);
  
        pop();
      }
  }
  