import { DragAndDrop } from "./DragAndDrop.js";

console.debug(DragAndDrop);

const containerDOM = document.querySelector('#container');
for (let i = 0; i < 5; i++) {
  const element = document.createElement('div');
  element.className = 'box';
  element.style.backgroundColor = getRandomColor();
  containerDOM.appendChild(element);
  new DragAndDrop(element);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
