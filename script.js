//your code here
const draggableElements = document.querySelectorAll('.draggable');
const container = document.getElementById('container');
let dragStartIndex;

draggableElements.forEach((element, index) => {
  element.addEventListener('dragstart', () => {
    dragStartIndex = index;
  });

  element.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  element.addEventListener('drop', () => {
    const dragEndIndex = index;
    swapElements(dragStartIndex, dragEndIndex);
  });
});

function swapElements(fromIndex, toIndex) {
  const fromElement = container.children[fromIndex];
  const toElement = container.children[toIndex];
  container.insertBefore(toElement, fromElement);
}