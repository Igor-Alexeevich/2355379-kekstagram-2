import {getRandomInteger} from './get-random-integer.js';
import {OBJECT_COUNT, DESCRIPTION, COMMENTS, NAMES} from './const.js';

function createGenerator () {
  let lastGenerated = 0;

  return function () {
    lastGenerated += 1;
    return lastGenerated;
  };
}

const id = createGenerator();

// генерирует описание случайной фотографии
const createDescriptionPhoto = () => {
  const randomName = getRandomInteger(0, NAMES.length - 1);
  const avatar = getRandomInteger(1, 6);
  const like = getRandomInteger(15, 200);

  const randomComments = [];

  const randomRepeat = getRandomInteger(0, 30);

  for(let i = 0; i < randomRepeat; i++) {
    randomComments.push(COMMENTS[getRandomInteger(0, COMMENTS.length - 1)]);
  }
  return {
    id: id(),
    url: `photos/${avatar}.jpg`,
    description: DESCRIPTION,
    likes: like,
    comments: randomComments,
    names: NAMES[randomName]
  };
};

//console.log(createDescriptionPhoto());

// Массив объектов
const objectPhoto = Array.from(
  {length: OBJECT_COUNT},
  createDescriptionPhoto
);

const photos = createDescriptionPhoto();

//console.log(objectPhoto);
export {objectPhoto, createDescriptionPhoto, photos};
