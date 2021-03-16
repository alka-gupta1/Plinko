
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world, p,particles=[],peg,pegs=[];
var cols,rows,gap,poles=[],base;

function setup() {
	createCanvas(600, 800);
    colorMode(HSB)
	engine = Engine.create();
	world = engine.world;
    world.gravity.y = 2
	//Create the Bodies Here.
	cols =10;
	rows = 11;
	gap = width/cols
	for(var i = 0; i< rows; i++){
		for(var j =0; j<cols; j++){
			var x = i * gap;
			var y = (j+1) * gap
			if(j % 2 == 0){
				x=i * gap + gap/2
			}
		peg =new Pegs(x,y,15)
		pegs.push(peg)
	}
}
    base = new Boundary(width/2,height,width,40)

    for(var i = 0; i < cols + 1; i++){
	  var pole = new Boundary(i*gap,height-70,10,100);
	  poles.push(pole)
  }
}


function draw() {
	
  background(0);
  Engine.update(engine);

 spray();
 for(var i = 0; i < particles.length; i++){
	particles[i].show();
     if(particles[i].offScreen()){
	     particles.splice[i,1];
	     i--
}
	 
 for(var i=0;i<pegs.length;i++){
    pegs[i].show()
}
	 
 for(var i=0; i<poles.length;i++){
	poles[i].show()
}
	 
}

function spray(){
	if(frameCount % 30 == 0){
		p = new Particle(width/2,50,8)
		particles.push(p)
	}
	
} 



