const player = document.querySelector('.player');
let isJumping = false;
let gravity = 0.9;
let velocity = 0;

function controlJump() {
  if (isJumping === false) {
    isJumping = true;
    velocity = -10;
  }
}

document.addEventListener("keydown", controlJump);

function update() {
  velocity += gravity;
  player.style.top = player.offsetTop + velocity + "px";

  if (player.offsetTop > 250) {
    isJumping = false;
    player.style.top = 250 + "px";
  }
  requestAnimationFrame(update);
}

update();
