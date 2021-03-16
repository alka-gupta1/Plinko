class Boundary{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true})
        this.w = w;
        this.h = h;
        World.add(world,this.body)
    }
    show(){
        var pos = this.body.position
        push()
        fill(255);
        stroke(255);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.w,this.h)
        pop()

    }
}