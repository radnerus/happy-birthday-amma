const container = document.querySelector('.container');

const COUNT = 10;
const MAX_DELAY = 2000;
const colors = ['#fff', '#fc6b03', '#ff0000', '#e7fc03', '#e7fc03'];

for (let i = 0; i < COUNT; i++) {
  const heartSpan = document.createElement('span');

  const id = Math.random() * 1000000;
  heartSpan.id = id;

  addHeart(heartSpan);
}
function addHeart(heartSpan) {
  const scale = Math.random() * 1.5 + 0.2;
  const animationDuration = Math.random() * 7 + 1;
  const delay = Math.random() * MAX_DELAY;
  const zIndex = Math.floor(Math.random() * 2);
  const colorIndex = Math.floor(Math.random() * colors.length);
  const transparency = Math.random * 0.2 + 0.3;

  console.log(colors[colorIndex]);

  heartSpan.classList.add('heart');
  heartSpan.style.left = Math.random() * 100 + '%';
  heartSpan.style.webkitTransform += `rotate(-45deg) scale(${scale})`;
  heartSpan.style.animationDuration = `${animationDuration}s`;
  heartSpan.style.zIndex = zIndex;
  heartSpan.style.setProperty('--color', colors[colorIndex]);
  heartSpan.style.opacity = transparency;

  container.appendChild(heartSpan);
  setTimeout(() => {
    addHeart(heartSpan);
  }, animationDuration * 1000);
}
