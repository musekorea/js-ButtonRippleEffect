const button = document.querySelector('button');
const circle = document.querySelector('.circle');

button.addEventListener('click', (e) => {
  circle.classList.remove('show');
  circle.classList.remove('hide');
  circle.setAttribute(`style`, `top:${e.layerY}px ; left:${e.layerX}px`);
  circle.classList.toggle('show');
});
