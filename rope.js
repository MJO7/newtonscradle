class Rope {
    constructor(bodyA , bodyB , length , stiffness){
    
        var options={
            
    bodyA:bodyA,
    bodyB:bodyB,
    length:length,
    stiffness:stiffness,
    
        }
    this.rope = Constraint.create(options)
    
    World.add(world , this.rope);
    
    }
    display(){
    var posA = this.rope.bodyA.position;
    var posb = this.rope.bodyB.position;
    line(posA.x , posA.y,posb.x , posb.y,)
    
    
    }
    
    
    
    
    
    
    
    }