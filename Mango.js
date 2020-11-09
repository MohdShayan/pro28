class Mango{
    constructor(x,y,radius){
        var options={
            isStatic: true,
            restitution:0,
            friction:1    
        }
        this.image=loadImage("images/mango.png")
        this.body = Bodies.circle(x, y,20, options);
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
 
        push();
       
        translate(pos.x, pos.y);
       
        image(this.image,0,0,45,45);
      
       
        pop(); 
    }
}