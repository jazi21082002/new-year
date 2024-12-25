document.addEventListener("DOMContentLoaded", () => {
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const message = document.getElementById("message");

    // Trigger animation after a delay
    setTimeout(() => {
        four.classList.add("hidden");
        five.classList.remove("hidden");

        // Show "From SAMI to You" after the year changes
        setTimeout(() => {
            message.classList.remove("hidden");
        }, 1000);
    }, 1000);

    // Fireworks Animation
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        fireworks.push({ x, y, color, radius: 0 });
    }

    function drawFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fireworks.forEach((firework, index) => {
            firework.radius += 2;
            if (firework.radius > 100) fireworks.splice(index, 1);

            ctx.beginPath();
            ctx.arc(firework.x, firework.y, firework.radius, 0, Math.PI * 2);
            ctx.strokeStyle = firework.color;
            ctx.stroke();
        });
    }

    function animate() {
        drawFireworks();
        requestAnimationFrame(animate);
    }

    // Create fireworks every 200ms
    setInterval(createFirework, 200);
    animate();
});
