var score = 0;
var collisiontimes = 0;
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x == 0) {
    this.speed = 100 + Math.floor(Math.random() * 400);
  }
  if (this.x > 500) {
    this.x = 0;
    this.speed = 100 + Math.floor(Math.random() * 400);
  }

  document.getElementById("collision").innerHTML = collisiontimes;
  if (player.x < this.x + 70 && player.x + 60 > this.x && player.y < this.y + 50 && 70 + player.y > this.y) {
    player.x = 202;
    player.y = 404;
    collisiontimes = collisiontimes + 1;
    console.log('success');
    Swal.fire({
      type: 'error',
      title: "congrats",
      html: 'you have earned the score ' + score + ' <br> And You completed this game with the time of  <br>' + hour + ' hours: ' + minute + ' minutes : ' + second + ' seconds ' + " you killed by" + collisiontimes + " times ",
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Restart',
      showCancelButton: true,
      cancelButtonText: "cancel",
      cancelButtonColor: 'red',
    }).then((result) => {
      if (result.value) {
        document.location.reload();
      }

    });

    document.getElementById("collision").innerHTML = collisiontimes;
    player.x = 202;
    player.y = 404;
  }
  if (score == 5) {
    clearInterval(time);
    Swal.fire({

      title: "goodjob",
      html: 'you have earned the score ' + score + ' <br>And You completed this game with the time of  <br>' + hour + ' hours: ' + minute + ' minutes : ' + second + ' seconds ' + " you killed by  " + collisiontimes + " times ",
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Restart',
    }).then(() => {
      document.location.reload();
    });
  }
};
console.log(collisiontimes);

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-horn-girl.png';
  }
}
Player.prototype.update = function(dt) {

}
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var locationEnemy = [60, 143, 226];
locationEnemy.map((positionY) => {
  var enemyItem = new Enemy(0, positionY, 150);
  allEnemies.push(enemyItem);
})
var player = new Player(202, 400);
// div for Score
var scoreClass = document.createElement('div');
scoreClass.classList.add("score");
scoreClass.innerHTML = 'Score ' + score;
Player.prototype.handleInput = function(move) {
  switch (move) {
    case 'left':
      this.x = this.x - 101;
      if (this.x < 0) {
        this.x = 0;
      }
      break;

    case 'right':
      this.x = this.x + 101;
      if (this.x > 400) {
        this.x = 404;
      }
      break;

    case 'up':
      this.y = this.y - 83;
      if (this.y < 60) {
        score = score + 1;
        console.log(score);
        scoreClass.innerHTML = 'Score ' + score;
        setTimeout(() => {
          this.x = 200;
          this.y = 400;
        }, 100)
      }

      break;
    case 'down':
      this.y = this.y + 85;
      if (this.y > 404)
        this.y = 404;
      break;
    default:

  }
}
/*
 * resets the player to default position
 */

Player.prototype.reset = function() {
  this.x = 200;
  this.y = 400;
};


startTime();

var second = 0;
var minute = 0;
var hour = 0;
var timer;
// time functionality
function startTime() {

  time = setInterval(() => {
    second = second + 1;
    if (second == 59) {
      second = 0;
      minute = minute + 1;
    }
    if (minute == 60) {
      minute = 0;
      hour = hour + 1;
    }
    timer = document.getElementById('time');
    timer.innerHTML = "Time:  " + second + ":: " + minute + " ::" + hour;
  }, 1000)
}




// updateDisplay();
// var canvasClass = document.getElementsByTagName('canvas')[0];
// document.body.insertBefore(scoreClass, canvasClass);
document.body.appendChild(scoreClass);

function gameOver() {
  // player.reset();
  this.x = 200;
  this.y = 400;


  if ((score > 2) && allEnemies.length < 4) {
    allEnemies.push(new Enemy(0, Math.random() * 160 + 50, Math.random() * 90 + 70));
    locationEnemy = [60, 100, 150, 226];
  }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
