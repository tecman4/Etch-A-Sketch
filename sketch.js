document.addEventListener('DOMContentLoaded', function () {
const p = document.querySelector('p');
let pixels=32;
var root = document.querySelector(':root');
root.style.setProperty('--pixels', '8');

for(let i=0;i<pixels;i++){
  const column = document.createElement('column');
  column.textContent = '';
  column.style.backgroundColor = getRandomColor();
  p.appendChild(column);
  column.addEventListener('mouseover', function() {
    column.style.backgroundColor = getRandomColor();
  });
  for(let j=0;j<pixels;j++){

    const row = document.createElement('row');
    row.textContent = '';
    row.style.backgroundColor = getRandomColor();
    column.appendChild(row);
    row.addEventListener('mouseover', function() {
      row.style.backgroundColor = getRandomColor();
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