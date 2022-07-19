

// There are two main funcitons that go into a p5.js program, setup() and draw()
// the draw block runs repeatedly, and the setup block runs only once.
function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  if (mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
