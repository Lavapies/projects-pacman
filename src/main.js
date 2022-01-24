const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
   game.preload();
}

function draw() {
  game.drawGrid();
  game.player.draw();
}


function keyPressed() {
    if (keyCode === 39) {
        game.player.col += 20;
    }
    if (keyCode === 37) {
        game.player.col -= 20;
    }
    if (keyCode === 38) {
        game.player.row -= 20;
    }
    if (keyCode === 40) {
        game.player.row += 20;
    }
}
