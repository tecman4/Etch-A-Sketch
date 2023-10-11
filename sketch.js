document.addEventListener('DOMContentLoaded', function () {
const body = document.querySelector('body');
let pixels=8;
var root = document.querySelector(':root');
root.style.setProperty('--pixels', '8');

for(let i=0;i<pixels;i++){
  for(let j=0;j<pixels;j++){

    const div = document.createElement('div');
    div.textContent = '';
    div.style.backgroundColor = getRandomColor();
    body.appendChild(div);
    div.addEventListener('mouseover', function() {
      div.style.backgroundColor = getRandomColor();
    });
    
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
});