const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const heartsContainer = document.getElementById("hearts-container");

let yesScale = 1;
let accepted = false;

// NO huye + SÍ crece
noBtn.addEventListener("mouseover", () => {
  if (accepted) return;

  const x = Math.random() * 240 - 120;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});

// NO tiembla al click
noBtn.addEventListener("click", () => {
  if (accepted) return;

  noBtn.classList.remove("shake");
  void noBtn.offsetWidth;
  noBtn.classList.add("shake");
});

// SÍ 💖
yesBtn.addEventListener("click", () => {
  if (accepted) return;
  accepted = true;

  yesScale = 1;
  yesBtn.style.transform = "scale(1)";
  noBtn.style.display = "none";

  message.textContent = "Sabía que dirías que sí 💕🥰";

  for (let i = 0; i < 30; i++) createHeart();

  setTimeout(showFinalScreen, 1200);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

function showFinalScreen() {
  const final = document.createElement("div");
  final.classList.add("final");
  final.innerHTML = `
    <h2>OFICIALMENTE<br>MI SAN VALENTÍN 💘</h2>
    <small>Rommel te ama mucho</small>
  `;
  document.body.appendChild(final);
}
