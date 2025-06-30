const DESCRIPTION = `Описание фотографии.`;
const COMMENTS = [
  `Всё отлично!`,
  `В целом всё неплохо. Но не всё.`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];

const NAMES = [
  `Анна`,
  `Борис`,
  `Василий`,
  `Григорий`,
  `Дмитрий`,
  `Елена`,
  `Женя`,
  `Зинаида`,
  `Иван`
];
const MIN_ID_PHOTO = 1;
const MAX_ID_PHOTO = 25;

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const PREVIOS_VALUES = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (PREVIOS_VALUES.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (PREVIOS_VALUES.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    PREVIOS_VALUES.push(currentValue);
    return currentValue;
  };
}

function createGenerator () {
  let lastGenerated = 0;

  return function () {
    lastGenerated += 1;
    return lastGenerated;
  };
}

const id = createGenerator();
const CREATE_DESCRIPTION_PHOTO = () => {
const randomName = getRandomInteger(0, NAMES.length - 1);
const avatar = getRandomInteger(1, 6);
const like = getRandomInteger(15, 200);

const randomComments = [];

let randomRepeat = getRandomInteger(0, 30);

for(let i = 0; i < randomRepeat; i++) {
	randomComments.push(COMMENTS[getRandomInteger(0, COMMENTS.length - 1)]);
	//const randomComment = getRandomInteger(0, COMMENTS.length - 1);
}
  return {
    id: id(),
    url: `img/avatar${avatar}.jpg`,
    description: DESCRIPTION,
    likes: like,
    comments: randomComments,
    names: NAMES[randomName]
  };
};
const DESCRIPTION_PHOTO = CREATE_DESCRIPTION_PHOTO();
