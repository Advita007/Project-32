class Balloons2{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("Balloons1.png");
		this.Visibility = 255
		this.body=Bodies.circle(this.x, this.y, this.r-50, options)
		World.add(world, this.body);
	}


display()
{
	
	
	if(this.body.speed<3){
	var blockPos=this.body.position;	
	push()
	translate(blockPos.x, blockPos.y);
	// rectMode(CENTER);
	rotate(this.body.angle)
	fill(255,0,255)
	imageMode(CENTER);
	ellipseMode(CENTER);
	image(this.image, 0,0,this.r/1.8, this.r-15)
	pop()

	}
	else{
		World.remove(world,this.body);
		push();
		this.Visibility = this.Visibility-10
		tint(255,this.Visibility);
		image(this.image,this.body.position.x,this.body.position.y,55,55);
		pop()
	}
}
}
