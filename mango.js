class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,70,70,options)
        this.width=70
        this.height=60
        this.img=loadImage("mango.png")
        World.add(world,this.body)
    }
    display(){
        var angle=this.body.angle
        push()
        if (this.body.speed>1){
            Matter.Body.setStatic(this.body,false)
        }
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.img,0,0,70,60)
        pop()
    }
    
}