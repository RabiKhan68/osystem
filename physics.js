const canvas = document.getElementById("physicsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.5;
const friction = 0.9; // Energy loss on bounce
const wallFriction = 0.99; // Reducing speed when hitting walls

// Ball class
class Ball {
    constructor(x, y, radius, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = dx; // Horizontal speed
        this.dy = dy; // Vertical speed
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        // Bounce off bottom
        if (this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy * friction; // Reverse vertical speed with damping
        } else {
            this.dy += gravity; // Apply gravity
        }

        // Bounce off walls
        if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius + this.dx < 0) {
            this.dx = -this.dx * wallFriction; // Reverse horizontal speed with damping
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

// Ball storage
let balls = [];

// Function to create a new ball
function createBall(x, y) {
    let radius = Math.random() * 30 + 20;
    let color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    let dx = (Math.random() - 0.5) * 6; // Random horizontal speed
    let dy = Math.random() * 2; // Random vertical speed

    balls.push(new Ball(x, y, radius, color, dx, dy));
}

// Create initial balls
for (let i = 0; i < 5; i++) {
    createBall(
        Math.random() * (canvas.width - 50) + 25,
        Math.random() * (canvas.height / 2)
    );
}

// Click event to add new balls
canvas.addEventListener("click", (event) => {
    createBall(event.clientX, event.clientY);
});

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => ball.update());
    requestAnimationFrame(animate);
}

animate();
