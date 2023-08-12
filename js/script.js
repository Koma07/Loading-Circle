const bar = document.querySelector(".bar");
const progressPercentageBox = document.querySelector(".circle-2");
let loadingBar = 0;
let progressPercentage = 0;

let progress = setInterval(() => {
  progressPercentage++;
  loadingBar += 3.6;
  bar.style.background = `conic-gradient(rgb(125, 42, 232) ${loadingBar}deg, rgb(237, 237, 237) 0deg)`;
  progressPercentageBox.innerHTML = `${progressPercentage % 200}%`;
  if (loadingBar >= 360) {
    clearInterval(progress);
  }
}, 10);
