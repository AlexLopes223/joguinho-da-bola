let score = 0;
const ball = document.getElementById("ball");
const scoreDisplay = document.getElementById("score");

function moveBall() {
    const x = Math.random() * 350; // Posição X aleatória
    const y = Math.random() * 350; // Posição Y aleatória
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
}

// Ao clicar na bola, aumenta a pontuação e move a bola
ball.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveBall();
});

// Mover a bola automaticamente a cada 1 segundo
setInterval(moveBall, 1000);
