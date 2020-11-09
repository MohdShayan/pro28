class StoneThrow{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA = bodyA;
        this.pointB=pointB;

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
         fly (){
         this.chain.bodyA=null;
        }

         attach(){
            this.stone.bodyA=body;
         }
    

display(){
    if(this.chain.bodyA)
    {
    var pointA = this.chain.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(5);
    stroke("red");
    line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}


}