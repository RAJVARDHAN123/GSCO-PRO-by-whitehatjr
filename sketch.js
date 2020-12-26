//----------------------------------------------------------------------
//creating sprite for car and wall
var car, wall;
//creating speed and weight
var speed,weight;
//----------------------------------------------------------------------
function setup() {
  //creating canvas of 1600 width and 400 length
  createCanvas(1600, 400);

  //making car sprite
  car = createSprite(50,200,50,50);
  car.shapeColor = "white";

  //making wall sprite
  wall = createSprite(1000,200,60,height/2);
  wall.shapeColor = "orange";

  //making speed random from 55 to 90
  speed = random(55,90);

  // making weight random 400 to 1500
  weight = random(400,1500);

}

//----------------------------------------------------------------------
function draw() {

  //assigning function

  // making background black
  background(0);

  //making car velocity equal to speed
  car.velocityX = speed;

  //-------------------------------------------------------------------------
  //making is touching function
if(wall.x - car.x < (car.width + wall.width)/2)
{

  // creating deformation with its formula
var deformation = 0.5*speed*speed*weight/22500;

//making car velocity to 0 after touching wall
car.velocityX = 0;

// changing color to red if deformation is greater than 180
if(deformation > 180){
 car.shapeColor = color(255,0,0);
}

// changing color to yellow if deformation is greater than 180
if(deformation < 180 && deformation > 100){
car.shapeColor = color(230,230,0);
}

// changing color to green if deformation is greater than 180
if(deformation < 100){
  car.shapeColor = color(0,255,0)
}

  }
  //-------------------------------------------------------------------------------
 
  drawSprites();
}