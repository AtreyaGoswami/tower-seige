function setup() {
  createCanvas(800,400);



  box1 = new Box(300,240,20,20);
  box2 = new Box(330,240,20,20);
  box3 = new Box(360,240,20,20);
  box4 = new Box(390,240,20,20);

  box5 = new Box(420,260,20,20);
  box6 = new Box(450,260,20,20);

  box7 = new Box(480,380,20,20);

  
}

function draw() {
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  
  background(255,255,255);  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition()
  }
  function mouseReleased(){
      sling2.fly();
  }