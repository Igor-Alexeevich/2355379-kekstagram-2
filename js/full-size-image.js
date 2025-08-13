import {objectPhoto, createDescriptionPhoto} from './create-description-photo.js';
import {thumbnailsPhoto} from './rendering-thumbnails.js';

// Найти окно
const bigPicture = document.querySelector('.big-picture');
// Место для полного изображения окна
const placePicture = bigPicture.querySelector('img');
// Количество лайков
const likePicture = bigPicture.querySelector('.likes-count');
// Список комментариев под фотографией
const listCommentsPicture = bigPicture.querySelector('.social__comments');
// Комментарий в <li></li>
const itemCommentsPicture = listCommentsPicture.querySelector('.social__comment');
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
let creatBigPicture = function (url, text, likes, countComments, comments) {
  // удалить класс hidden у элемента bigPicture
  bigPicture.classList.remove('hidden');
  placePicture.src = url;
  placePicture.alt = text;
  likePicture.text = likes;
  countCommentPicture.textContent = countComments;
  totalCommentsPicture.textContent = comments;
  placePicture.classList.add('social__picture');



};



console.log('работает');
