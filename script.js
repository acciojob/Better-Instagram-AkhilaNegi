//your code here
const images = document.querySelectorAll('.image');

let draggedImage = null;

// Add event listeners to each image
images.forEach((image) => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('dragenter', dragEnter);
  image.addEventListener('dragleave', dragLeave);
  image.addEventListener('drop', dragDrop);
  image.addEventListener('dragend', dragEnd);
});

// Drag start event handler
function dragStart() {
  draggedImage = this;
  this.classList.add('selected');
}

// Drag over event handler
function dragOver(event) {
  event.preventDefault();
}

// Drag enter event handler
function dragEnter(event) {
  event.preventDefault();
  this.classList.add('highlight');
}

// Drag leave event handler
function dragLeave() {
  this.classList.remove('highlight');
}

// Drag drop event handler
function dragDrop() {
  if (draggedImage !== this) {
    // Swap the background images
    const tempBackground = this.style.backgroundImage;
    this.style.backgroundImage = draggedImage.style.backgroundImage;
    draggedImage.style.backgroundImage = tempBackground;
  }

  this.classList.remove('highlight');
}

// Drag end event handler
function dragEnd() {
  this.classList.remove('selected');
}

