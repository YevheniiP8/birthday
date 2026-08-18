document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('start-btn');
  const music = document.getElementById('bg-music');

  const introScreen = document.querySelector('.intro-screen');
  const sceneContainer = document.querySelector('.scene-container');
  const carousel = document.getElementById('carousel');
  const items = document.querySelectorAll('.photo-item');

  const count = items.length;
  const theta = 360 / count;

  function updateCarouselLayout() {
    // Grab fluid computed width of the card base
    const photoWidth = carousel.offsetWidth;

    // Carousel radius
    const radius = Math.round(photoWidth / 2 / Math.tan(Math.PI / count));

    console.log(count);

    items.forEach((item, index) => {
      const angle = theta * index;
      // Display photos in a circle in 3D space
      console.log(item.style.transform, index);
      item.style.transform = `rotateY(${angle}deg) translateZ(${radius + 60}px)`;
    });
  }

  updateCarouselLayout();

  // Variables for rotation
  let rotY = 0;
  let isDown = false;
  let startX = 0;
  let autoSpinActive = true;
  let spinTimeout = null;
  let isX = 0;

  // Main animation loop
  function startAutoRotation() {
    if (autoSpinActive && !isDown) {
      rotY += 0.15; // Auto-rotation speed
    }
    carousel.style.transform = `rotateX(-10deg) rotateY(${rotY}deg)`;
    requestAnimationFrame(startAutoRotation);
  }

  // Start on button click
  startBtn.addEventListener('click', () => {
    console.log('Кнопка нажата, запускаем музыку и анимацию!');
    introScreen.classList.add('hidden');
    sceneContainer.classList.add('visible');

    music.play().catch((e) => console.log('Браузер заблокировал звук:', e));

    // Start rotation animation
    startAutoRotation();

    // Endless confetti fireworks
    var duration = 5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 } });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  });

  // Interactive: rotate the carousel with the mouse/swipe

  const startDrag = (e) => {
    isDown = true;
    autoSpinActive = false;
    clearTimeout(spinTimeout);
    startX = e.clientX || e.touches[0].clientX;
    isX = e.clientX || e.touches[0].clientX;
  };

  const moveDrag = (e) => {
    if (!isDown) return;
    const x = e.clientX || e.touches[0].clientX;
    const deltaX = x - isX;
    isX = x;
    rotY += deltaX * 0.2;
    carousel.style.transform = `rotateX(-10deg) rotateY(${rotY}deg)`;
    console.log(carousel.style.transform);
  };

  const stopDrag = () => {
    if (!isDown) return;
    isDown = false;

    // After 3 seconds of inactivity, auto-rotation will smoothly resume
    spinTimeout = setTimeout(() => {
      autoSpinActive = true;
    }, 3000);
  };

  const debounce = (func, delay = 100) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  window.addEventListener('resize', debounce(updateCarouselLayout));
  window.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', moveDrag);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchstart', startDrag, { passive: true });
  window.addEventListener('touchmove', moveDrag, { passive: true });
  window.addEventListener('touchend', stopDrag);
});
