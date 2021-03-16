function Particle(x,y,r){
       x= x+random(-2,2)
        this.body = Bodies.circle(x,y,r,{restitution:0.5,friction:0.5})
        this.r = r;
        this.hue = random(360)
        World.add(world,this.body)
       this.offScreen=function(){
              var pos = this.body.position;
              return(pos.x<-50||pos.x>width+10)
    }
    Particle.prototype.show = function(){
        var pos = this.body.position
        push()
        fill(this.hue,255,255);
        stroke(0);
        translate(pos.x,pos.y);
        //ellipseMode(RADIUS);
        ellipse(0,0,this.r*2)
        pop()

    }
