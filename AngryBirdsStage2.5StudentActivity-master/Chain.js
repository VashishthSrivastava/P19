class Chain {

    constructor(a,b)
    {
     
     var option={
        bodyA:a,
        bodyB:b,
        length:100,
        stiffnes:0.5
     }
    this.chain=Constraint.create (option);
    World.add(world,this.chain);
    }
    display(){
        var pos1=this.chain.bodyA.position;
        var pos2=this.chain.bodyB.position;
        line(pos1.x,pos1.y,pos2.x,pos2.y)
    }

}