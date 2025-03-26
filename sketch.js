let distMouse = 15;
let size = 10;
let cols;
let rows;
let blocks = [];
let offset = 4;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;
  for (i = 0; i < cols; i++) {
    blocks[i] = [];
    for (j = 0; j < rows; j++) {
      blocks[i][j] = new block(size / 2 + i * size, size / 2 + j * size);
    }
  }
}

function draw() {
  background(0);
  for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }
}

