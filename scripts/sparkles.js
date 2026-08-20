document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('sparkles-canvas');
  const ctx = canvas.getContext('2d');

  // Adjusting the canvas size to fit the screen
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const sparkles = [];
  const colors = [
    '#ffb703',
    '#fb6f92',
    '#ff8fab',
    '#ffeedd',
    '#b5e2fa',
    '#c8b6ff',
  ];

  class Sparkle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1; // Sparkle size
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.speedY = Math.random() * 0.4 + 0.1; // Speed ​​of falling down
      this.alpha = Math.random(); // Initial transparency for flicker
      this.alphaSpeed = Math.random() * 0.02 + 0.01; // Rate of change brightness
    }

    update() {
      this.y += this.speedY;
      if (this.y > canvas.height) this.y = 0; // We return to the top if it flies away

      // Shimmer/twinkle effect
      this.alpha += this.alphaSpeed;
      if (this.alpha > 1 || this.alpha < 0.2) {
        this.alphaSpeed = -this.alphaSpeed; // Changing the fade/brightness direction
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0.1, Math.min(1, this.alpha));
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10; // Neon glow effect
      ctx.shadowColor = this.color;

      // We draw a sparkle in the form of a rombi/asterisk
      ctx.beginPath();
      ctx.moveTo(this.x, this.y - this.size * 2);
      ctx.lineTo(this.x + this.size, this.y);
      ctx.lineTo(this.x, this.y + this.size * 2);
      ctx.lineTo(this.x - this.size, this.y);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }

  // Create an array of 100 sparkles
  for (let i = 0; i < 100; i++) {
    sparkles.push(new Sparkle());
  }

  // Start the animation loop
  function animateSparkles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparkles.forEach((sparkle) => {
      sparkle.update();
      sparkle.draw();
    });
    requestAnimationFrame(animateSparkles);
  }
  /* Start immediately, so that the background is spread again 
      on the launch screen*/
  animateSparkles();
});
