import {containerPhotos} from '/.rendering-thumbnails.js'/;

// Обработчик нажатия на весь .pictures, т.к. накладываем на родителя
containerPhotos.addEventListener('click', (evt) => {
  const currentNode = evt.target.closest('.picture');
  // запустить функцию по определенному id
  if(currentNode) {
    openPicture(currentNode.dataset.pictureId);
  }
})
