import {objectPhoto, photos} from './create-description-photo.js';
import {thumbnailsPhoto, containerPhotos} from './rendering-thumbnails.js';

// Найти окно
const bigPicture = document.querySelector('.big-picture');
// Место для полного изображения окна
const placePicture = bigPicture.querySelector('img');
// Количество лайков
const likePicture = bigPicture.querySelector('.likes-count');
// Список комментариев под фотографией
const listCommentsPicture = bigPicture.querySelector('.social__comments');
// Комментарий в <li></li>
const itemCommentPicture = listCommentsPicture.querySelector('.social__comment');
// Подпись под фото
const captionPicture = bigPicture.querySelector('.social__caption');
// Количество показанных комментариев к изображению
const countCommentPicture = bigPicture.querySelector('.social__comment-shown-count');
// Общее количество комментариев
const totalCommentsPicture = bigPicture.querySelector('.social__comment-total-count');
// Кнопка для загрузки новой порции комментариев
const commentsLoader = bigPicture.querySelector('.social__comments-loader');
// Кнопка для выхода из полноэкранного просмотра
const cancelPicture = bigPicture.querySelector('.big-picture__cancel');
//console.log(cancelPicture);
// Разовое количество выводимых сообщений
const STEP_COMMENTS = 5;

// Функция, открывающая большое фото в <section class="big-picture  overlay  hidden">
const openBigPicture = (pictureId) => {
  // найти объект в соотв с id
  const currentPhoto = photos.find((photo) => photo.id === Number(pictureId));
  // создание фрагмента для DOM-узлов
  const commentsFragment = document.createDocumentFragment();

  bigPicture.src = currentPhoto.url;

  likePicture.textContent = currentPhoto.likes;

  listCommentsPicture.innerHTML = '';

  currentPhoto.comments.forEach((comment) => {
    // клонирование itemCommentPicture
    const socialComment = itemCommentPicture.cloneNode(true);

    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alr = comment.names;
    socialComment.querySelector('.social__text').textContent = comment.message;
    commentsFragment.appendChild(socialComment);

  });

};

// Обработчик всего контейнера нажатия на миниатюру
containerPhotos.addEventListener('click', (evt) => {
  // сравнить с искомым узлом
  const currentContainerPhotos = evt.target.closest('.picture');
  if(currentContainerPhotos) {
    // Передать id-карточки в функциюОткрытияОкна openBigPicture
    openBigPicture(currentContainerPhotos.dataset.pictureId);
  }
});

// Закрыть большое фото
const closeFullSize = function() {
  bigPicture.classList.add('hidden');
};
// Обработчик кнопки закрытия окна
cancelPicture.addEventListener('click', () => {
  closeFullSize();
});
//console.log('работает');
