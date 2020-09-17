var bullet, wall, deformation, weight, speed;

function setup() {
  createCanvas(400, 400);
  weight = Math.round(random(400, 1500));
  speed = Math.round(random(55, 90));
  deformation = (weight*speed);
  bullet = new createSprite(100, 300, 30, 20);
  bullet = new createSprite(350, 300, 10, 50);
}

function draw() {
  background("white");
  if (bullet.isTouching(wall)){
    bullet.velocityX=0;
  }
  text("with a speed of "+speed+" and a weight of "+weight+" the damage is "+deformation+". ", 0, 100);
  bullet.display();
  wall.display();
}