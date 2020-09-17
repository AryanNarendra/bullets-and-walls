class createSprite{
    constructor(x,y,width,height,){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velocityX=0;
        this.velocityY=0;
    }
    display(shape){
        if (shape==null){
            shape=="rect";
        }
        this.x=x+this.velocityX;
        this.y=y+this.velocityY;
        stroke(rgb(0,0,0));
        strokeWeight(2);
        rectMode(CENTER);
        ellipseMode(CENTER);
        if (shape=="rect"){
            rect(this.x, this.y, this.width, this.height);
        }
        if (shape=="ellipse"){
            ellipse(this.x, this.y, this.width, this.height);
        }
    }
    isTouching(other){
        if (abs(this.x-other.x) < (this.width/2)+(other.width/2) && abs(this.y-other.y) < (this.height/2)+(other.height/2)){
            return true;
        }
    }
}