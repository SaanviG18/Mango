class Constrama{
    constructor(bodyA, pointB){
        var options = {
        bodyA: bodyA,
        pointB:pointB,
        stiffness: 0.04,
        length: 10
    }
this.constt = Constraint.create(options);
World.add(world, this.constt);
    }
    fly(){
        this.constt.bodyA = null;
    } 

display(){
    if(this.constt.bodyA){
    var pointA = this.constt.bodyA.position;
    var pointB = this.constt.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
        }   
    }
}
