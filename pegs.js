class Pegs{
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r,{isStatic:true})
        this.r = r;
        World.add(world,this.body)
    }
    show(){
        var pos = this.body.position
        push()
        fill(150);
        stroke(255);
        translate(pos.x,pos.y);
        //ellipseMode(RADIUS);
        ellipse(0,0,this.r*2)
        pop()

    }
}