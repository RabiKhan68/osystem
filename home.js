function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

function toggleStartMenu() {
  const menu = document.getElementById("startMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function openWindow(id) {
  document.getElementById('startMenu').style.display = 'none';
  const win = document.getElementById(id);
  win.style.display = 'block';
  win.style.zIndex = Date.now();
}

function closeWindow(id) {
  const win = document.getElementById(id);
  win.style.display = 'none';
}

let offsetX, offsetY, dragTarget = null;

function startDrag(e, target) {
  dragTarget = target;
  offsetX = e.clientX - target.offsetLeft;
  offsetY = e.clientY - target.offsetTop;
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
  if (dragTarget) {
    dragTarget.style.left = (e.clientX - offsetX) + 'px';
    dragTarget.style.top = (e.clientY - offsetY) + 'px';
  }
}

function stopDrag() {
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
  dragTarget = null;
}

function restartOS() {
  document.getElementById('startMenu').style.display = 'none';
  document.getElementById('shutdownScreen').style.display = 'flex';
  document.getElementById('shutdownScreen').textContent = 'Restarting...';
  setTimeout(() => location.reload(), 3000);
  window.location.href = "index.html";
  setTimeout(() => window.reload(), 3000);
}

function shutdownOS() {
  document.getElementById('startMenu').style.display = 'none';
  document.getElementById('shutdownScreen').style.display = 'flex';
  document.getElementById('shutdownScreen').textContent = 'Shutting down...';
  setTimeout(() => window.reload(), 3000);
  window.location.href = "index.html";
  setTimeout(() => window.reload(), 3000);
}

document.getElementById('2d').addEventListener('click', function() {
    window.location.href = "funphysics.html";
});

document.getElementById('browser').addEventListener('click', function() {
  window.location.href = "https://www.microsoft.com/en-us/edge";
});