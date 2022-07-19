let x = 0;

// There are two main funcitons that go into a p5.js program, setup() and draw()
// the draw block runs repeatedly, and the setup block runs only once.
function setup() {
  // createCanvas(1920, 1080);
  // program that draws line
  // line(15,25,70,90);
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
  background(200);
  ellipse(width/2, height/2, 50, 50);
}

function draw() {
  // program 1
  // if (mouseIsPressed){
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);

  // program 2
  // ellipse(x, height/2, 20, 20);
  // x += 1;

}
