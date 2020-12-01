class Stone{
    constructor(x,y){
        var options={
            restitution:0,
            density:1.2,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,40,40,options)
        this.width=40
        this.height=40
        this.img=loadImage("stone.png")
        World.add(world,this.body)
    }
    display(){
        push()
        imageMode(CENTER)
        var angle=this.body.angle
        //rotate(angle)
        image(this.img,this.body.position.x,this.body.position.y,60,60)
        pop()
    }
}