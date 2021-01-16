class paper
{
    constructor(x,y,r)
    {
        var paper_options=
        {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
        }
        this.body = Bodies.circle(x,y,r,paper_options)
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.r = r;
    }

    display()
    {
        push();
        fill("cyan");
        ellipseMode(RADIUS);
        translate(this.body.position.x,this.body.position.y)
        ellipse(0,0,this.r);
        pop();
    }
}
