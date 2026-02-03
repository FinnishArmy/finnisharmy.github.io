(function () {
  // Tweak these to taste
  const COUNT = 48;           // Number of particles to create
  const MIN_SIZE = 5;         // px
  const MAX_SIZE = 15;         // px
  const MIN_DURATION = 38;    // seconds
  const MAX_DURATION = 64;    // seconds
  const MAX_TRAVEL_X = 180;   // px (how far they drift horizontally)
  const MAX_TRAVEL_Y = 180;   // px (how far they drift vertically)

  const container = document.querySelector('.page-anim');
  if (!container) return;

  // If user prefers reduced motion, skip creating animations
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  for (let i = 0; i < COUNT; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';

    // Random helpers
    const rand = (min, max) => Math.random() * (max - min) + min;
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // Randomize starting position as percentages of the viewport
    const x = rand(4, 96).toFixed(2) + '%';
    const y = rand(4, 96).toFixed(2) + '%';

    // Random size and animation duration/delay
    const s = rand(MIN_SIZE, MAX_SIZE).toFixed(2) + 'px';
    const d = rand(MIN_DURATION, MAX_DURATION).toFixed(2) + 's';
    const delay = (-rand(0, MAX_DURATION)).toFixed(2) + 's'; // negative to de-sync

    // Random drift direction and distance
    const dx = (pick([1, -1]) * rand(MAX_TRAVEL_X * 0.4, MAX_TRAVEL_X)).toFixed(1) + 'px';
    const dy = (pick([1, -1]) * rand(MAX_TRAVEL_Y * 0.4, MAX_TRAVEL_Y)).toFixed(1) + 'px';

    // Set CSS variables
    dot.style.setProperty('--x', x);
    dot.style.setProperty('--y', y);
    dot.style.setProperty('--s', s);
    dot.style.setProperty('--d', d);
    dot.style.setProperty('--delay', delay);
    dot.style.setProperty('--dx', dx);
    dot.style.setProperty('--dy', dy);

    // If reduced motion, remove animation but keep static dots (optional)
    if (reducedMotion) {
      dot.style.animation = 'none';
    }

    container.appendChild(dot);
  }
})();