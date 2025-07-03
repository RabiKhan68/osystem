const loadingText = document.getElementById("loading-text");
let dotCount = 0;

const loadingInterval = setInterval(() => {
  dotCount = (dotCount + 1) % 6; // cycle from 0 to 5
  loadingText.innerText = "Loading" + ".".repeat(dotCount);
}, 500);

setTimeout(() => {
  clearInterval(loadingInterval); // stop updating dots
  window.location.href = "login.html";
}, 3000);