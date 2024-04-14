var ball, g1, g2, g3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(260, 100, 20, ball_options)
	World.add(world, ball)
	g1 = new Ground(width / 2, 670, width, 20)
	g2 = new Ground(1100, 600, 20, 120)
	g3 = new Ground(1350, 600, 20, 120)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	ellipse(ball.position.x, ball.position.y, 20, 20)
	drawSprites();
	g1.display()
	g2.display()
	g3.display()
}

function keyPressed() {
	if (keyCode === UP_ARROW) { Matter.Body.applyForce(ball, ball.position, { x: 85, y: -85 }); }
}



