const cellSize = 80;
let lastTime = 0;
const updateInterval = 10;
let deltaTime = 0;
let viewportWidth;
let viewportHeight;
let viewportX = 1;
let viewportY = 5;
let sprites;
let offsetX = 0;
let offsetY = 0;
let mapHeight;
let mapWidth;
let map;
let mapText;
const animateSpeed = 500;

function preload() {
  sprites = {
    ".": loadImage('assets/water2.png'),
    ",": loadImage('assets/water3.png'),
    ";": loadImage('assets/water4.png'),
    ":": loadImage('assets/water5.png'),
    "#": loadImage('assets/land.png'),
    "s": loadImage('assets/strand.png'),
    "p": loadImage('assets/strandmetparasol.png'),
    "P": loadImage('assets/palm.png'),
  }
  mapText = loadStrings('assets/map1.txt');
}

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  viewportWidth = windowWidth / cellSize;
  viewportHeight = windowHeight / cellSize;
  map = mapText.filter(x => x.length > 0).map(x => x.split(''));
  mapHeight = map.length;
  mapWidth = map[0].length;
}

function animateWater() {
  for (var y = 0; y < mapHeight; y++) {
    for (var x = 0; x < mapWidth; x++) {
      if (map[y][x] == "."){
        map[y][x] = ",";
      }
      if (map[y][x] == ":"){
        map[y][x] = ".";
      }
      if (map[y][x] == ";"){
        map[y][x] = ":";
      }
      if (map[y][x] == ","){
        map[y][x] = ";";
      }
    }
  }
}

let passed = 0;

function update(dt) {
  handleInput(dt);
  passed = passed + dt;
  if(passed > animateSpeed){
    animateWater();
    passed = 0;
  }
}

function draw() {
  const time = millis();
  deltaTime += time - lastTime;
  if (deltaTime > updateInterval) {
    update(deltaTime);
    deltaTime = 0;
  }
  lastTime = time;

  background("#000");
  for (var y = 0; y < viewportHeight; y++) {
    for (var x = 0; x < viewportWidth; x++) {
      for (const [k, v] of Object.entries(sprites)) {
        const row = map[y + viewportY];
        if (row) {
          col = row[x + viewportX];
          if (col) {
            if (map[y + viewportY][x + viewportX] == k) {
              image(sprites[k], x * cellSize + offsetX, y * cellSize + offsetY);
            }
          }
        }
      }
    }
  }

  fill("#2271eb");
  rect(0, 0, windowWidth, cellSize);
  rect(0, 0, cellSize, windowHeight);
  rect(windowWidth - cellSize, 0, cellSize, windowHeight);
  rect(0, windowHeight - cellSize, windowWidth, cellSize);

  fill("#F00");
  ellipse(windowWidth / 2, windowHeight / 2, 10, 10);
}

function handleInput(dt) {
  const moveSpeed = dt * .4;

  if (keyIsDown(LEFT_ARROW)) {
    if (viewportX >= 0) {
      offsetX += moveSpeed;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (viewportX <= mapWidth - viewportWidth) {
      offsetX -= moveSpeed;
    }
  }
  if (keyIsDown(UP_ARROW)) {
    if (viewportY >= 0) {
      offsetY += moveSpeed;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (viewportY <= mapHeight - viewportHeight) {
      offsetY -= moveSpeed;
    }
  }

  if (offsetX > cellSize) {
    offsetX = 0;
    viewportX--;
  }
  if (offsetX < -cellSize) {
    offsetX = 0;
    viewportX++;
  }
  if (offsetY < -cellSize) {
    offsetY = 0;
    viewportY++;
  }
  if (offsetY > cellSize) {
    offsetY = 0;
    viewportY--;
  }
}
