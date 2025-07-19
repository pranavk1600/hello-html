const chicken = document.getElementById("chicken");
const egg = document.getElementById("egg");
const gameOver = document.getElementById("gameOver");

let chickenPos = 50;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    chickenPos -= 10;
    if (chickenPos < 0) chickenPos = 0;
  } else if (e.key === "ArrowRight") {
    chickenPos += 10;
    if (chickenPos > 90) chickenPos = 90;
  }
  chicken.style.left = chickenPos + "%";
});

setInterval(() => {
  const eggLeft = Math.random() * 90;
  egg.style.left = eggLeft + "%";
}, 3000);

function checkCollision() {
  const eggRect = egg.getBoundingClientRect();
  const chickenRect = chicken.getBoundingClientRect();

  if (
    eggRect.bottom >= chickenRect.top &&
    eggRect.left < chickenRect.right &&
    eggRect.right > chickenRect.left
  ) {
    gameOver.style.display = "block";
    egg.style.animation = "none";
    clearInterval(collisionCheck);
  }
}

const collisionCheck = setInterval(checkCollision, 100);
