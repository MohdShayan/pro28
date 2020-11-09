class Stone {
    constructor(x, y) {
      var ball_options = {
        isStatic: false,
        restitution:0,
        friction:1,
        density:1.2
      }
      this.image=loadImage("images/stone.png")
      this.body = Bodies.circle(x, y,20, ball_options);
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
 
      push();
     
      translate(pos.x, pos.y);
     
      image(this.image,0,0,50,50);
    
     
 
      pop();
    }
  }