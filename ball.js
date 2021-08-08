class Ball {
    
    constructor(x,y,r){
        var options={
            restitution:0.8,

        };

        this.body = Bodies.circle(x, y,r, options);
        this.r = r;
        World.add(world, this.body);
    }
    display() {
        let pos = this.body.position;
        push();
       translate(pos.x,pos.y)
       ellipseMode(RADIUS);
        noStroke();
        fill("white")
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        pop();
      }    
}
    