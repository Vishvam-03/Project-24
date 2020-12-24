class Paper{
  constructor(){
    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2,
    }
    
    this.body = Bodies.circle(100,580,30,options)
    this.width=30;
    this.height=30;
    World.add(world,this.body);
}
display(){
var pos = this.body.position;
ellipseMode(RADIUS);
ellipse(100,600,20,20);
  }

}