const title = document.createElement('div');
title.className = 'title';

const titleImg = document.createElement('img');
title.append(titleImg);

const subTitle = document.createElement('p');
subTitle.innerHTML = 'Press right mouse button to place <span class="flag">&#9872</span>';
subTitle.classList.add('sub-title');
const field = document.createElement('div');
field.classList.add('field-10');

const modeBtns = document.createElement('div');
modeBtns.classList.add('mode-btns-block');
const easyBtn = document.createElement('button');
easyBtn.classList.add('mode-btn');
easyBtn.innerHTML = 'Easy';
const mediumBtn = document.createElement('button');
mediumBtn.classList.add('mode-btn');
mediumBtn.innerHTML = 'Medium';
const hardBtn = document.createElement('button');
hardBtn.classList.add('mode-btn');
hardBtn.innerHTML = 'Hard';

const resultBtn = document.createElement('button');
resultBtn.classList.add('mode-btn');
resultBtn.innerHTML = 'Results';

modeBtns.append(easyBtn, mediumBtn, hardBtn, resultBtn);

let closeBtn = document.createElement('button');
closeBtn.className = 'close-btn';
closeBtn.innerHTML = 'Close';

const modal = document.createElement('div');
modal.className = 'hidden';

const modalResult = document.createElement('div');
modalResult.className = 'modal-result';
modal.append(modalResult);
const timer = document.createElement('div');
timer.className = 'timer';
timer.innerHTML = 'Time: ';

const timeSec = document.createElement('span');
timer.className = 'time';
timer.append(timeSec);

const clicksCounter = document.createElement('div');
clicksCounter.className = 'clicks-counter';
clicksCounter.innerHTML = 'Clicks: ';
const click = document.createElement('span');
click.className = 'click';
clicksCounter.append(click);
let flagCounter = document.createElement('div');
flagCounter.className = 'flags-counter';
flagCounter.innerHTML = '<img src="./assets/flag1-icon.png" alt="flag">: ';
const flag = document.createElement('span');
flag.className = 'flag';
flagCounter.append(flag);
const scoreBoard = document.createElement('div');
scoreBoard.className = 'score-board';

scoreBoard.append(timer, clicksCounter, flagCounter);

const modeSwitcher = document.createElement('img');
modeSwitcher.className = 'mode-switcher';
const soundSwitcher = document.createElement('img');
soundSwitcher.className = 'sound-switcher';

let clickSound = document.createElement('audio');
clickSound.src = './assets/click.mp3';
let flagSound = document.createElement('audio');
flagSound.src = './assets/flag.mp3';
let winSound = document.createElement('audio');
winSound.src = './assets/win.mp3';
let boomSound = document.createElement('audio');
boomSound.src = './assets/boom.mp3';

let bombsCounter = document.createElement('div');
bombsCounter.className = 'bombs-selector';

let bombsChoiceLabel = document.createElement('label');
bombsChoiceLabel.innerHTML = 'Choose bombs quantity ';
let bombsChoice = document.createElement('input');
bombsChoice.type = 'number';
bombsChoice.min = 1;
bombsChoice.max = 99;
let changeBombsBtn = document.createElement('button');
changeBombsBtn.innerHTML = 'Change';

bombsCounter.append(bombsChoiceLabel, bombsChoice, changeBombsBtn);

document.body.append(
  modeSwitcher,
  soundSwitcher,
  title,
  subTitle,
  scoreBoard,
  modeBtns,
  bombsCounter,
  field,
  modal,
  clickSound,
  flagSound,
  winSound,
  boomSound
);

export {
  titleImg,
  field,
  modal,
  easyBtn,
  mediumBtn,
  hardBtn,
  timer,
  timeSec,
  clicksCounter,
  click,
  clickSound,
  flagSound,
  winSound,
  boomSound,
  resultBtn,
  modalResult,
  closeBtn,
  modeSwitcher,
  soundSwitcher,
  bombsChoice,
  changeBombsBtn,
  flagCounter,
  flag,
};
