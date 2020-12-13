class Chain{
    constructor(bodyA,pointB,offsetX,offsetY){

        this.offsetX=offsetX
        this.offsetY=offsetY
      
        var c_options={
            bodyA:bodyA,
            pointB:pointB,
            pointB:{x:this.offsetX,y:this.offsetY},
            length:10,
            stiffness:0.04
        }
        

        this.chain=Constraint.create(c_options);
        World.add(world,this.chain);
    }
      display(){
          var pointA=this.chain.bodyA.position
          var pointB=this.pointB

          
          stroke("blue")
        strokeWeight(4);
        line(pointA.x,pointA.y, pointB.x,pointB.y);
      }
    }
