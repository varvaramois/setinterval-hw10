//Завдання 1 "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою
// setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

const btn = document.querySelector(".button");
const content = document.querySelector(".content");

btn.addEventListener("click", function () {
  let count = 0;
  const intervalId = setInterval(() => {
    console.log("Hello, world!");
    count++;
    content.textContent = count;
    if (count >= 5) {
      clearInterval(intervalId);
    }
  }, 1000);
});

//Завдання 2 "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи
//їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

const colorBtn = document.querySelector(".color-btn");
const sizeBtn = document.querySelector(".size-btn");
const moveBtn = document.querySelector(".move-btn");

const colorBox = document.querySelector(".color-box");
const sizeBox = document.querySelector(".size-box");
const moveBox = document.querySelector(".move-box");

const colors = [
  "#8A2BE2",
  "#DC143C",
  "#00008B",
  "#f1c40f",
  "#228B22",
  "#e67e22",
];

let colorStarted = false;
let sizeStarted = false;
let moveStarted = false;

colorBtn.addEventListener("click", () => {
  if (!colorStarted) {
    colorStarted = true;
    setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      colorBox.style.backgroundColor = randomColor;
    }, 1000);
  }
});

sizeBtn.addEventListener("click", () => {
  if (!sizeStarted) {
    sizeStarted = true;
    let size = 50;
    setInterval(() => {
      size += 5;
      sizeBox.style.width = `${size}px`;
      sizeBox.style.height = `${size}px`;
    }, 1500);
  }
});

moveBtn.addEventListener("click", () => {
  if (!moveStarted) {
    moveStarted = true;
    let position = 0;
    moveBox.style.position = "relative";
    setInterval(() => {
      position += 5;
      moveBox.style.left = `${position}px`;
    }, 1000);
  }
});

//Завдання 3 "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи 
// на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та 
// відслідковуйте кількість натисків гравця.


//щось складне, чат гпт у помощ
const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");

let score = 0;
let gameInterval;
let gameDuration = 20000; 

startBtn.addEventListener("click", () => {
  score = 0;
  scoreDisplay.textContent = score;
  startBtn.disabled = true;

  gameInterval = setInterval(spawnTarget, 1000);

  setTimeout(() => {
    clearInterval(gameInterval);
    removeTarget();
    alert(`Ото і все, твій рахунок: ${score}`);
    startBtn.disabled = false;
  }, gameDuration);
});

function spawnTarget() {
  removeTarget();

  const target = document.createElement("div");
  target.classList.add("target");

  const areaWidth = gameArea.clientWidth - 50;
  const areaHeight = gameArea.clientHeight - 50;

  const randomX = Math.floor(Math.random() * areaWidth);
  const randomY = Math.floor(Math.random() * areaHeight);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;

  target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    removeTarget();
  });

  gameArea.appendChild(target);
}

function removeTarget() {
  const existing = document.querySelector(".target");
  if (existing) {
    existing.remove();
  }
}
