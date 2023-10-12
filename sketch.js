document.addEventListener('DOMContentLoaded', function () {
const p = document.querySelector('p');
let pixels=8;
var root = document.querySelector(':root');
var nav = document.querySelector('nav');
var slidecontainer = document.querySelector('.slidecontainer');
var myRange = slidecontainer.querySelector('#myRange');
var rangevalue = nav.querySelector('.rangevalue');
var resetBoard = nav.querySelector('.resetBoard');

resetBoard.addEventListener('click', function() {
  p.innerHTML = '';
  drawgrid();
});

slidecontainer.addEventListener('input', function() {
root.style.setProperty('--pixels', myRange.value);
pixels = myRange.value;
p.innerHTML = '';
drawgrid();
rangevalue.textContent =  "Current value: "+ myRange.value + "x" + myRange.value;;

});
drawgrid();
function drawgrid(){
for(let i=0;i<pixels;i++){
  const column = document.createElement('column');
  column.textContent = '';
  p.appendChild(column);
  column.addEventListener('mouseover', function() {
  });
  for(let j=0;j<pixels;j++){

    const row = document.createElement('row');
    row.textContent = '';
    // row.style.backgroundColor = getRandomColor();
    column.appendChild(row);
    row.addEventListener('mouseover', function() {
      row.style.backgroundColor = getRandomColor();
    });
    
  }
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