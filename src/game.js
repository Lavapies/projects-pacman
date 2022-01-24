class Game {
    constructor() {
      this.player = new Player();
    }
    preload() {
      this.player.image = loadImage('../assets/pacman.svg') ;
    }
    draw() {
      clear();
      this.player.draw();
    }
  
    drawGrid() {
      clear();
      let startX = 0;
      let endX = 0;
      let startY = 0;
      let endY = 0;
      for (let i = 0; i <= 20; i++) {
        line(0, startX, 1000, endX);
        line(startY, 0, endY, 1000);
        startX += 50;
        endX += 50;
        startY += 50;
        endY += 50;
      }
    }
  }
  
  class Player {
    constructor() {
      this.col = 2.5;
      this.row = 2.5;
      this.width = 45;
      this.height = 45;
      this.image;
    }
    draw() {
      image(this.image, this.col, this.row, this.width, this.height);
    }
}


function keyPressed() {
    if (keyCode === 39) {
        game.player.moveRight();
    }
    if (keyCode === 37) {
        game.player.moveLeft();
    }
    if (keyCode === 38) {
        game.player.moveUp();
    }
    if (keyCode === 40) {
        game.player.moveDown();
    }
}


  