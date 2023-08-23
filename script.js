// Code for an interactive star system background
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

const stars = [];
const starCount = 1000;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = (Math.random() * 0.5) - 0.25;
        this.speedY = (Math.random() * 0.5) - 0.25;
    }

    draw() {
        ctx.fillStyle = '#5F7ADB';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }
}

for (let i = 0; i < starCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 2;
    stars.push(new Star(x, y, radius));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.move();
        star.draw();
    });
    requestAnimationFrame(animate);
}

animate();
