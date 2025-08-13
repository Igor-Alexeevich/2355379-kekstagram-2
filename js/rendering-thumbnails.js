// импорт функции по обработке описаний фотографий:
import {objectPhoto} from './create-description-photo.js';

// найти контейнер для всех фотографий на общей странице
const containerPhotos = document.querySelector('.pictures');

// создать фрагмент для шаблона
const photosFragment = document.createDocumentFragment();

// найти содержимое нужного шаблона
const pattern = document.querySelector('#picture').content;
const patternContent = pattern.querySelector('.picture');

// Функция открытия большого окна:
const openPicture = (pictureId) => {
  // Объект из массива фотографий, который соответствует id, с помощью find
  //const currentPhoto =
};

// Обработка данных, получаемых от create-description-photo.js
objectPhoto.forEach(({id, url, description, likes, comments}) => {
  // Клонирование шаблона
  const element = patternContent.cloneNode(true);
  // найти место для картинки
  const elementImage = element.querySelector('.picture__img');

  // Подготовка id очередной фотографии (прописать id в forEach)
  // прописывает в html после class: data-picture-id="порядковый_номер"
  // для заполнения карточки нужными данными
  element.dataset.pictureId = id;

  // Адрес изображения url подставьте как атрибут src изображения
  elementImage.src = url;

  // Описание изображения description подставьте в атрибут alt изображения
  elementImage.alt = description;

  // Количество лайков likes выведите в блок .picture__likes
  element.querySelector('.picture__likes').textContent = likes;

  // Количество комментариев comments выведите в блок .picture__comments
  element.querySelector('.picture__comments').textContent = comments.length;

  photosFragment.appendChild(element);
});

// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment

const thumbnailsPhoto = containerPhotos.appendChild(photosFragment);
export {thumbnailsPhoto, containerPhotos, openPicture};
