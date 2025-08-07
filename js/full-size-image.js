import {objectPhoto} from './create-description-photo.js';
import {thumbnailsPhoto} from './rendering-thumbnails.js';

// Найти окно
const bigPicture = document.querySelector('.big-picture');
// Место для полного изображения окна
const placePicture = bigPicture.querySelector('img');
// Для лайков
const likePicture = bigPicture.querySelector('.likes-count');
// Список комментариев под фотографией
const listCommentsPicture = bigPicture.querySelector('.social__comments');
// Комментарий в <li></li>
const itemCommentsPicture = listCommentsPicture.querySelector('.social__comment');
// Подпись под фото
const captionPicture = bigPicture.querySelector('.social__caption');
// Количество показанных комментариев к изображению
const commentPicture = bigPicture.querySelector('.social__comment-shown-count');
// Общее количество комментариев
const totalCommentsPicture = bigPicture.querySelector('.social__comment-total-count');
// Кнопка для загрузки новой порции комментариев
const commentsLoader = bigPicture.querySelector('.social__comments-loader');
// Кнопка для выхода из полноэкранного просмотра
const cancelPicture = bigPicture.querySelector('.big-picture__cancel');
//console.log(cancelPicture);





//console.log('работает');
