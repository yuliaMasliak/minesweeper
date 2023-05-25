import {
  titleImg,
  field,
  easyBtn,
  mediumBtn,
  hardBtn,
  modal,
  timeSec,
  click,
  resultBtn,
  modalResult,
  closeBtn,
  modeSwitcher,
  soundSwitcher,
  clickSound,
  flagSound,
  winSound,
  boomSound,
  bombsChoice,
  changeBombsBtn,
  flag,
  modalBackground,
} from './elements.js';
//images

let arrayOfBobmsIndexes = [];
let loss = false;
let SIZE = 10;
let bombsQuantity = 10;
let clicks = 0;
let time = 0;
let interval;
let arrayOfAllNotBombs = [];
export let arrayOfResults = [];
let totalCount;
let flags = 10;
let arrOfPlacedFlags = [];

export function createField(count, bombs) {
  SIZE = count;
  bombsQuantity = bombs;
  bombsChoice.value = bombs;

  totalCount = count * count;
  switch (count) {
    case 10:
      field.className = 'field-10';
      break;
    case 15:
      field.className = 'field-15';
      break;
    case 25:
      field.className = 'field-25';
      break;
    default:
      break;
  }
  addNewGame(bombs);
}

function addNewGame(bombs) {
  clearInterval(interval);

  if (localStorage.getItem('state')) {
    console.log('state');
    let arrayOfCells = JSON.parse(localStorage.getItem('state'));

    arrayOfCells.forEach((el) => {
      let cell = document.createElement('button');
      cell.classList.add('cell');
      cell.id = el.id;
      cell.disabled = el.state;
      cell.innerHTML = el.content;
      if (el.content == '⚐') {
        cell.classList.add('flagged-cell');
      }
      colorGenerator(+el.content, cell);
      field.append(cell);
    });
    arrayOfBobmsIndexes = JSON.parse(localStorage.getItem('bombs'));
    console.log(arrayOfBobmsIndexes);

    clicks = Number(localStorage.getItem('clicks'));
    click.innerHTML = clicks;
    time = Number(localStorage.getItem('time'));
    timeSec.innerHTML = time;
    interval = setInterval(() => {
      time++;
      timeSec.innerHTML = time;
      localStorage.setItem('time', time);
    }, 1000);
    flags = Number(localStorage.getItem('flags'));
    flag.innerHTML = flags;
    createArrayOfNotBombs();
  } else {
    let id = 1;
    clicks = 0;
    time = 0;
    loss = false;
    flags = bombs;
    flag.innerHTML = flags;
    let wholeQuantity = totalCount;
    while (wholeQuantity > 0) {
      let cell = document.createElement('button');
      cell.classList.add('cell');
      cell.id = id;
      field.append(cell);
      wholeQuantity -= 1;
      id += 1;
    }
    localStorage.setItem('count-bombs', bombs);
  }

  timeSec.innerHTML = time;
  click.innerHTML = clicks;
}

function createBobms(count, bombs, openedCellId) {
  arrayOfBobmsIndexes.length = 0;
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  while (arrayOfBobmsIndexes.length < +bombs) {
    const index = getRandom(1, count * count + 1);

    if (index !== +openedCellId) {
      if (arrayOfBobmsIndexes.indexOf(index) < 0) {
        arrayOfBobmsIndexes.push(index);
      }
    }
  }

  localStorage.setItem('bombs', JSON.stringify(arrayOfBobmsIndexes));
  createArrayOfNotBombs();
}

function createArrayOfNotBombs() {
  arrayOfAllNotBombs.length = 0;
  let cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    if (arrayOfBobmsIndexes.indexOf(+cell.id) < 0) {
      arrayOfAllNotBombs.push(cell);
    }
  });
  localStorage.setItem('not-bombs', JSON.stringify(arrayOfAllNotBombs));
}

function checkWinner() {
  let cells = document.querySelectorAll('.cell');
  let filter = arrayOfAllNotBombs.filter((el) => el.disabled == false);

  if (filter.length === 0) {
    clearInterval(interval);
    let date = getDate();
    arrayOfResults.unshift({
      date: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`,
      result: 'winner',
    });
    let resultToSubmit = arrayOfResults.slice(0, 10);
    localStorage.setItem('result', JSON.stringify(resultToSubmit));
    disableModeBtns();
    modalResult.innerHTML = '<img src="./assets/cool.gif" alt="cool">';
    modal.style.backgroundColor = 'transparent';
    modal.classList.add('active');
    modalBackground.classList.add('active-modal');
    winSound.play();
    setTimeout(() => {
      cells.forEach((cell) => {
        if (!cell.disabled) {
          cell.innerHTML = 'X';
          cell.disabled = true;
          modal.style.backgroundColor = '#271029c4';
          modalResult.innerHTML = `<div class="modal-result">
          Hooray! You found all mines in ${time} seconds and ${clicks} moves!
          <br>`;
          modalResult.append(closeBtn);
          closeBtn.addEventListener('click', () => {
            closeModal();
          });
          clearLocalStorage();
        }
      });
    }, 2000);
  }
}

function closeModal() {
  modal.classList.remove('active');
  modalBackground.classList.remove('active-modal');
  enableModeBtns();
}

function isBomb(id) {
  return JSON.parse(localStorage.getItem('bombs')).includes(+id);
}
function getDate() {
  let day = new Date();
  return day;
}

function openCell(id) {
  let value = Number(id);
  let cell = document.getElementById(id);
  cell.classList.remove('flagged-cell');
  if (
    id < 0 ||
    id > SIZE * SIZE ||
    cell.disabled == true ||
    cell.classList.contains('flagged-cell')
  ) {
    return;
  }

  let countNeighbourBombs = getNeighbourBombCount(id);

  if (isBomb(id) && !loss) {
    loss = true;
    let date = getDate();
    arrayOfResults.unshift({
      date: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`,
      result: 'loser',
    });

    localStorage.setItem('result', JSON.stringify(arrayOfResults));
    cell.innerHTML = 'X';
    cell.disabled = true;
    clearInterval(interval);
    disableModeBtns();
    modalResult.innerHTML = '<img src="./assets/boomm-1.gif" alt="boom">';
    boomSound.play();
    modal.classList.add('active');
    modal.style.backgroundColor = 'transparent';
    modalBackground.classList.add('active-modal');

    setTimeout(() => {
      const cells = document.querySelectorAll('.cell');
      cells.forEach((cell) => openCell(cell.id));
      clearLocalStorage();
      modal.style.backgroundColor = '#271029c4';
      modalResult.innerHTML = `Game over. Try again!`;
      modalResult.append(closeBtn);
      closeBtn.addEventListener('click', () => {
        closeModal();
      });
    }, 1300);
    return;
  } else if (isBomb(id) && loss) {
    cell.innerHTML = 'X';
    cell.disabled = true;
    return;
  } else if (countNeighbourBombs !== 0) {
    cell.innerHTML = countNeighbourBombs;
    colorGenerator(countNeighbourBombs, cell);
    cell.disabled = true;
    return;
  } else {
    cell.disabled = true;
    //  top left corner cell
    if (value == 1) {
      for (let y = 0; y < SIZE * 2; y += SIZE) {
        for (let x = value; x < value + 2; x++) {
          openNeighbourCells(x + y);
        }
      }
    }
    //  top horizontal row cells
    else if (value > 1 && value < SIZE) {
      for (let y = 0; y < SIZE * 2; y += SIZE) {
        for (let x = value - 1; x < value + 2; x++) {
          openNeighbourCells(x + y);
        }
      }
    }
    //  top right corner cell
    else if (value == SIZE) {
      for (let y = 0; y < SIZE * 2; y += SIZE) {
        for (let x = value - 1; x < value + 1; x++) {
          openNeighbourCells(x + y);
        }
      }
    }
    //   left vertical row cells
    else if (value > SIZE && (value - 1) % SIZE == 0 && id < SIZE * SIZE - SIZE) {
      for (let y = 0; y < SIZE * 3; y += SIZE) {
        for (let x = value - SIZE; x < value - SIZE + 2; x++) {
          openNeighbourCells(x + y);
        }
      }
    }
    //  left bottom corner cell
    else if (value == SIZE * SIZE - SIZE + 1) {
      for (let y = 0; y < SIZE * 2; y += SIZE) {
        for (let x = value - SIZE; x < value - SIZE + 2; x++) {
          openNeighbourCells(x + y);
        }
      }
    }
    //  bottom horizontal row cells
    else if (value > SIZE * SIZE - SIZE + 1 && value < SIZE * SIZE) {
      for (let y = 0; y < SIZE * 2; y += SIZE) {
        for (let x = value - SIZE - 1; x < value - SIZE + 2; x++) {
          openNeighbourCells(x + y);
        }
      }
    }
    //  bottom right corner cell
    else if (value == SIZE * SIZE) {
      for (let y = 0; y < SIZE * 2; y += SIZE) {
        for (let x = value - SIZE - 1; x < value - SIZE + 1; x++) {
          openNeighbourCells(x + y);
        }
      }
    }
    //   right vertical row cells
    else if (value > SIZE && value % SIZE == 0 && value < SIZE * SIZE) {
      for (let y = 0; y < SIZE * 3; y += SIZE) {
        for (let x = value - SIZE - 1; x < value - SIZE + 1; x++) {
          openNeighbourCells(x + y);
        }
      }
    }
    //   all  inner cells
    else if (value > SIZE + 1 && value < SIZE * SIZE - SIZE - 1) {
      for (let y = 0; y < SIZE * 3; y += SIZE) {
        for (let x = value - SIZE - 1; x < value - SIZE + 2; x++) {
          openNeighbourCells(x + y);
        }
      }
    }
  }
}

function clearLocalStorage() {
  localStorage.removeItem('state');
  localStorage.removeItem('mode');
  localStorage.removeItem('bombs');
  localStorage.removeItem('clicks');
  localStorage.removeItem('time');
  localStorage.removeItem('flags');
  localStorage.removeItem('bombs-count');
}
function colorGenerator(digit, cell) {
  switch (digit) {
    case 1:
      cell.style.color = 'darkgreen';
      break;
    case 2:
      cell.style.color = 'blue';
      break;
    case 3:
      cell.style.color = 'purple';
      break;
    case 4:
      cell.style.color = 'brown';
      break;
    case 5:
      cell.style.color = 'orange';
      break;
    case 6:
      cell.style.color = 'yellow';
      break;
    case 7:
      cell.style.color = 'pink';
      break;
    case 8:
      cell.style.color = 'darkgrey';
      break;
    default:
      break;
  }
}

function openNeighbourCells(id) {
  if (+id > 0 && +id <= totalCount) {
    let cell = document.getElementById(id);
    let countNeighbourBombs = getNeighbourBombCount(id);

    if (isBomb(id)) {
      return;
    } else if (countNeighbourBombs !== 0) {
      cell.innerHTML = countNeighbourBombs;
      switch (countNeighbourBombs) {
        case 1:
          cell.style.color = 'darkgreen';
          break;
        case 2:
          cell.style.color = 'blue';
          break;
        case 3:
          cell.style.color = 'purple';
          break;
        case 4:
          cell.style.color = 'brown';
          break;
        default:
          break;
      }
      cell.disabled = true;
      return;
    } else {
      openCell(id);
    }
  }
}

function getNeighbourBombCount(id) {
  let neighbourCells = [];
  let neighbourBombsCount = 0;

  //If first column
  if (id == 1 || (+id - 1) % SIZE == 0) {
    for (let x = +id - SIZE; x < +id - SIZE + 2; x++) {
      neighbourCells.push(x);
    }
    neighbourCells.forEach((el) => {
      neighbourCells.push(el + Number(SIZE));
      neighbourCells.push(el + Number(SIZE) * 2);
    });
    neighbourCells.forEach((el) => {
      arrayOfBobmsIndexes.forEach((bombIndex) => {
        el == bombIndex ? (neighbourBombsCount += 1) : '';
      });
    });
  }
  //If last column
  else if (+id % SIZE == 0) {
    for (let x = +id - SIZE - 1; x < +id - SIZE + 1; x++) {
      neighbourCells.push(x);
    }
    neighbourCells.forEach((el) => {
      neighbourCells.push(el + Number(SIZE));
      neighbourCells.push(el + Number(SIZE) * 2);
    });
    neighbourCells.forEach((el) => {
      arrayOfBobmsIndexes.forEach((bombIndex) => {
        el == bombIndex ? (neighbourBombsCount += 1) : '';
      });
    });
  }
  // For  all inner cells
  else {
    for (let x = +id - SIZE - 1; x < +id - SIZE + 2; x++) {
      neighbourCells.push(x);
    }
    neighbourCells.forEach((el) => {
      neighbourCells.push(el + Number(SIZE));
      neighbourCells.push(el + Number(SIZE) * 2);
    });

    neighbourCells.forEach((el) => {
      arrayOfBobmsIndexes.forEach((bombIndex) => {
        el == bombIndex ? (neighbourBombsCount += 1) : '';
      });
    });
  }

  return neighbourBombsCount;
}

function cliskCount() {
  clicks += 1;
  click.innerHTML = clicks;
  localStorage.setItem('clicks', clicks);
}
function placedFlagsCount() {
  flags -= 1;
  flag.innerHTML = flags;
  localStorage.setItem('flags', flags);
}
function removedFlagsCount() {
  flags += 1;
  flag.innerHTML = flags;
  localStorage.setItem('flags', flags);
}

function disableModeBtns() {
  let modeBtns = document.querySelectorAll('.mode-btn');
  modeBtns.forEach((el) => {
    el.disabled = true;
  });
}

function enableModeBtns() {
  let modeBtns = document.querySelectorAll('.mode-btn');
  modeBtns.forEach((el) => {
    el.disabled = false;
  });
}

export function switchScreenMode() {
  if (!localStorage.getItem('screen-mode')) {
    localStorage.setItem('screen-mode', 'light');
  }
  const screenMode = localStorage.getItem('screen-mode');
  if (screenMode == 'light') {
    modeSwitcher.src = './assets/moon-icon.png';
    modeSwitcher.alt = 'moon icon';

    titleImg.src = './assets/title-black.png';
    titleImg.alt = 'dark title';
    document.body.className = 'light-mode';
  } else if (screenMode == 'dark') {
    modeSwitcher.src = './assets/sun-icon.png';
    modeSwitcher.alt = 'sun icon';

    titleImg.src = './assets/title-light.png';
    titleImg.alt = 'light title';
    document.body.className = 'dark-mode';
  }
}

export function switchSoundMode() {
  const soundMode = localStorage.getItem('sound-mode');
  const audios = document.querySelectorAll('audio');

  if (soundMode == 'on' || !soundMode) {
    soundSwitcher.src = './assets/sound-icon.png';
    soundSwitcher.alt = 'sound icon';
    audios.forEach((el) => {
      el.muted = false;
    });
  } else if (soundMode == 'off') {
    soundSwitcher.src = './assets/muted-icon.png';
    soundSwitcher.alt = 'muted sound icon';
    audios.forEach((el) => {
      el.muted = true;
    });
  }
}

function generateResults(results) {
  modalResult.innerHTML = '';
  let resultToSubmit = results.slice(0, 10);
  resultToSubmit.forEach((res, i) => {
    let row = document.createElement('div');
    row.className = 'result-row';
    let number = document.createElement('div');
    number.innerHTML = i + 1;
    number.className = 'row-flex-item-number';
    let date = document.createElement('div');
    date.innerHTML = `${res.date}`;
    date.className = 'row-flex-item-middle';
    let winLoss = document.createElement('div');
    winLoss.innerHTML = res.result;
    winLoss.className = 'row-flex-item';
    row.append(number, date, winLoss);

    modalResult.append(row);
  });

  modalResult.append(closeBtn);
  modal.classList.add('active');
  modalBackground.classList.add('active-modal');
  disableModeBtns();
  closeBtn.addEventListener('click', () => {
    closeModal();
  });
}

function saveState() {
  const cells = document.querySelectorAll('.cell');
  let arr = [];
  cells.forEach((el) => {
    let cell = {};
    cell.id = el.id;
    cell.content = el.innerHTML;
    cell.state = el.disabled;
    arr.push(cell);
  });
  localStorage.setItem('state', JSON.stringify(arr));
}
function changeModeOfBombs(size, bombs) {
  clearInterval(interval);
  modal.classList.remove('active');
  modalBackground.classList.remove('active-modal');
  field.innerHTML = '';
  field.className = `field-${localStorage.getItem('mode')}`;
  flag.innerHTML = bombs;
  localStorage.setItem('flags', bombs);
  createField(size, bombs);
}

field.addEventListener('click', (event) => {
  clickSound.play();
  let cell = event.target;
  if (localStorage.getItem('state')) {
    cliskCount();
    openCell(cell.id);
    saveState();
    checkWinner();
  } else {
    createBobms(SIZE, bombsQuantity, cell.id);
    openCell(cell.id);
    time = 1;
    timeSec.innerHTML = time;
    interval = setInterval(() => {
      time++;
      timeSec.innerHTML = time;
      localStorage.setItem('time', time);
    }, 1000);
    cell.disabled = true;
    cliskCount();
    saveState();
    checkWinner();
  }
});

field.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  flagSound.play();
  let cell = event.target;
  if (!localStorage.getItem('state')) {
    return;
  }
  if (cell.innerHTML == '⚐' && cell.disabled === true) {
    cell.innerHTML = '';
    cell.disabled = false;
    cell.classList.remove('flagged-cell');
    saveState();
    removedFlagsCount();
  } else if (cell.disabled === true) {
    return;
  } else {
    if (flags > 0) {
      cell.disabled = true;
      cell.innerHTML = '&#9872';
      cell.style.color = 'red';
      cell.classList.add('flagged-cell');
      placedFlagsCount();
      saveState();
    }

    localStorage.setItem('placed-flags', JSON.stringify(arrOfPlacedFlags));
  }
});

easyBtn.addEventListener('click', () => {
  clearLocalStorage();
  changeModeOfBombs(10, 10);
  localStorage.setItem('mode', 10);
  localStorage.setItem('bombs-count', 10);
  bombsChoice.value = 10;
});

mediumBtn.addEventListener('click', () => {
  clearLocalStorage();
  changeModeOfBombs(15, 15);
  localStorage.setItem('mode', 15);
  localStorage.setItem('bombs-count', 15);
  bombsChoice.value = 15;
});
hardBtn.addEventListener('click', () => {
  clearLocalStorage();
  changeModeOfBombs(25, 25);
  localStorage.setItem('mode', 25);
  localStorage.setItem('bombs-count', 25);
  bombsChoice.value = 25;
});

resultBtn.addEventListener('click', () => {
  if (arrayOfResults.length > 0) {
    generateResults(arrayOfResults);
  }
});

modeSwitcher.addEventListener('click', () => {
  const screenMode = localStorage.getItem('screen-mode');
  if (screenMode == 'light') {
    localStorage.setItem('screen-mode', 'dark');
  } else if (screenMode == 'dark') {
    localStorage.setItem('screen-mode', 'light');
  }
  switchScreenMode();
});

soundSwitcher.addEventListener('click', () => {
  const soundMode = localStorage.getItem('sound-mode');

  if (soundMode == 'on' || !soundMode) {
    localStorage.setItem('sound-mode', 'off');
  } else if (soundMode == 'off') {
    localStorage.setItem('sound-mode', 'on');
  }
  switchSoundMode();
});

changeBombsBtn.addEventListener('click', () => {
  clearLocalStorage();
  bombsQuantity = Number(bombsChoice.value);
  localStorage.setItem('flags', bombsQuantity);
  localStorage.setItem('count-bombs', bombsQuantity);
  changeModeOfBombs(SIZE, bombsQuantity);
  flag.innerHTML = bombsQuantity;
});

bombsChoice.addEventListener('change', () => {
  if (bombsChoice.value > 99 || bombsChoice.value < 10) {
    changeBombsBtn.disabled = true;
  } else {
    changeBombsBtn.disabled = false;
  }
});

modalBackground.addEventListener('click', () => {
  modalBackground.classList.remove('active-modal');
  modal.classList.remove('active');
  enableModeBtns();
});
