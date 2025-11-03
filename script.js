// Canvas Petal Background


document.addEventListener("DOMContentLoaded", () => {
 const canvas = document.getElementById("fallingPetals");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petals = [];
const petalCount = 40;

for (let i = 0; i < petalCount; i++) {
  petals.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 1.5 + 0.5,
  });
}

function drawPetals() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 182, 193, 0.8)";
  ctx.beginPath();
  for (let p of petals) {
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  updatePetals();
}

function updatePetals() {
  for (let p of petals) {
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0 - 10;
      p.x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawPetals();
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Click transition
const flower = document.getElementById("flower");
const content = document.getElementById("content");

flower.addEventListener("click", () => {
  flower.style.transition = "transform 1.5s ease, opacity 1.5s ease";
  flower.style.transform = "translate(-50%, -50%) scale(0)";
  flower.style.opacity = "0";
  setTimeout(() => {
    flower.style.display = "none";
    content.classList.remove("hidden");
  }, 1500);
});
});
