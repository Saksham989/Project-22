var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadImage("images/fairy.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addImage(fairyImg);  
	fairy.scale =0.20;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
    fairyVoice.play();
}


function draw() {
  background(bgImg);
  star.x= starBody.position.x
  star.y= starBody.position.y

  if(starBody.position.y > 470){
    starBody.isStatic=true;
  }

  drawSprites();

}

function keyPressed() {
	//write code here
	if (keyCode === DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
	}
	else if (keyCode === RIGHT_ARROW){
		fairy.velocityX=3;
	}
	else if (keyCode === LEFT_ARROW){
		fairy.velocityX=-3;
	} 
}
