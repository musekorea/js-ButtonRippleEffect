const button = document.querySelector('button');
//const circle = document.querySelector('.circle');

button.addEventListener('click', (e) => {
  //console.log(e.layerX, e.layerY);
  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.setAttribute(`style`, `top:${e.layerY}px ; left:${e.layerX}px`);
  button.appendChild(circle);

  setTimeout(() => circle.remove(), 400);
});
