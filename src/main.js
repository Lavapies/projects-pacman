const game = new Game();
let speed = 5;
let cell = 20;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
   game.preload();
}

function draw() {
  game.drawWorld();
  game.player.draw();
  game.point();

//check if the button is pressed & continue moving as long as the button is pressed
    if (keyIsPressed == true) {
        if (keyCode === 39) {
            game.player.col += speed;
        }
        if (keyCode === 37) {
            game.player.col -= speed;
        }
        if (keyCode === 38) {
            game.player.row -= speed;
        }
        if (keyCode === 40) {
            game.player .row += speed;
        }
    } // end of key pressed if statement

    // create window boundaries
    // if (game.player.col < 0) { //off the left window
    //     game.player.col += 10;
    // }
    // if (game.player.col > WIDTH) { //off the right window
    //     game.player.col -= 50;
    // }
    // if (game.player.row < 0) { //off the top window
    //     game.player.row += 10;
    // }
    // if (game.player.row > HEIGHT) { //off the bottom window
    //     game.player.row -= 50;
    // }

} // end of draw funtion
