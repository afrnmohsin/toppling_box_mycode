class Ground{
    constructor(x,y,width,height){
        var options = {
          isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myWorld, this.body);
        }
        display(){
            var pos = this.body.position;
            push();//for applying the colour change to only the ground
            fill("brown");
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            pop();//come back to normal settings

        }
    
};