// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";
let explosion = document.createElement("audio");
explosion.src = "sound/explosion.wav";
let propeller = document.createElement("audio");
propeller.src = "sound/propeller.wav";
let mouseIsPressed = false;

let state;
let heli;
let wall1, wall2, wall3;
reset();

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    runGame();
  } else if (state === "gameover") {
    drawGameOver();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

document.addEventListener("mousedown", mouseDownHandler);
document.addEventListener("mouseup", mouseUpHandler);

function mouseDownHandler() {
  mouseIsPressed = true;

  propeller.currentTime = 0;
  propeller.play();

  if (state === "start") {
    state = "gameon";
  }
}

function mouseUpHandler() {
  mouseIsPressed = false;
  propeller.pause();
}
