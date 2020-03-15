class Drop{
    constructor(x, y, width, height){
        var options = {
            friction: 0.4,
            density: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(random(0, 255), random(0, 255), random(0, 255));
        stroke(0);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}