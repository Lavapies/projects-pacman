class Game {
    constructor() {
      this.player = new Player();
    }
    preload() {
      this.player.image = loadImage('../assets/pacman.svg') ;
    }
    draw() {
      this.player.draw();
    }

    drawWorld() {
        clear();
        for(var y = 0; y < world.length; y++) {
            for(var x = 0; x < world[y].length; x++) {
                switch(world[y][x]) {
                    case '0':
                        fill(22, 22, 250);
                        strokeWeight(2);
                        stroke(0);
                        rect(x*cell, y*cell, cell, cell);
                        break;
                    case '1':
                        fill(0);
                        rect(x*cell, y*cell, cell, cell);
                        break;                
                    default:
                }
            }
        }
    }
  
    // drawGrid() {
    //   clear();
    //   let startX = 0;
    //   let endX = 0;
    //   let startY = 0;
    //   let endY = 0;
    //   for (let i = 0; i <= 20; i++) {
    //     line(0, startX, 1000, endX);
    //     line(startY, 0, endY, 1000);
    //     startX += 50;
    //     endX += 50;
    //     startY += 50;
    //     endY += 50;
    //   }
    // }
  }
  
  class Player {
    constructor() {
      this.col = 2.5;
      this.row = 2.5;
      this.width = 20;
      this.height = 20;
      this.image;
    }
    draw() {
      image(this.image, this.col, this.row, this.width, this.height);
    }

    point() {
        for (let y = 0; y < world.length; y++) {
            for (let x = 0; x < world[y].length; x++) {
                if (world[y][x] !== '0' && world[y][x] !== '1') {
                    noStroke();
                    fill(0);
                    rect(x * cell, y * cell, cell, cell);
                    fill(255);
                    ellipseMode(CENTER);
                    ellipse(x * cell + 10, y * cell + 10, 6, 6);
                }
            }
        }
    }

}

// function keyPressed() {
//         if (keyCode === 39) {
//             game.player.moveRight();
//         }
//         if (keyCode === 37) {
//             game.player.moveLeft();
//         }
//         if (keyCode === 38) {
//             game.player.moveUp();
//         }
//         if (keyCode === 40) {
//             game.player.moveDown();
//         }
       
// }


  