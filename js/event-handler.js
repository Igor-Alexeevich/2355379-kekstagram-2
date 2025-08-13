import {containerPhotos} from './rendering-thumbnails.js';

// Обработчик нажатия на весь .pictures, т.к. накладываем на родителя
containerPhotos.addEventListener('click', (evt) => {
  // проверка: на какой миниатюре (из шаблона) было нажатие
  // .picture это тег а. Ловим событие либо на тега а, либо на дочернем
  const currentNode = evt.target.closest('.picture');
  console.log('currentNode');
  // по результату проверки запустить функцию по определенному id
  if(currentNode) {
    openPicture(currentNode.dataset.pictureId);
    console.log('Щелчок');
  }
});

const clickContainerPhotos = containerPhotos;
export {containerPhotos};
