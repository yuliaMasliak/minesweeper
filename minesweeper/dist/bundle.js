/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./minesweeper/src/elements.js":
/*!*************************************!*\
  !*** ./minesweeper/src/elements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bombsChoice\": () => (/* binding */ bombsChoice),\n/* harmony export */   \"boomSound\": () => (/* binding */ boomSound),\n/* harmony export */   \"changeBombsBtn\": () => (/* binding */ changeBombsBtn),\n/* harmony export */   \"click\": () => (/* binding */ click),\n/* harmony export */   \"clickSound\": () => (/* binding */ clickSound),\n/* harmony export */   \"clicksCounter\": () => (/* binding */ clicksCounter),\n/* harmony export */   \"closeBtn\": () => (/* binding */ closeBtn),\n/* harmony export */   \"easyBtn\": () => (/* binding */ easyBtn),\n/* harmony export */   \"field\": () => (/* binding */ field),\n/* harmony export */   \"flag\": () => (/* binding */ flag),\n/* harmony export */   \"flagCounter\": () => (/* binding */ flagCounter),\n/* harmony export */   \"flagSound\": () => (/* binding */ flagSound),\n/* harmony export */   \"hardBtn\": () => (/* binding */ hardBtn),\n/* harmony export */   \"mediumBtn\": () => (/* binding */ mediumBtn),\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"modalResult\": () => (/* binding */ modalResult),\n/* harmony export */   \"modeSwitcher\": () => (/* binding */ modeSwitcher),\n/* harmony export */   \"resultBtn\": () => (/* binding */ resultBtn),\n/* harmony export */   \"soundSwitcher\": () => (/* binding */ soundSwitcher),\n/* harmony export */   \"timeSec\": () => (/* binding */ timeSec),\n/* harmony export */   \"timer\": () => (/* binding */ timer),\n/* harmony export */   \"titleImg\": () => (/* binding */ titleImg),\n/* harmony export */   \"winSound\": () => (/* binding */ winSound)\n/* harmony export */ });\nconst title = document.createElement('div');\r\ntitle.className = 'title';\r\n\r\nconst titleImg = document.createElement('img');\r\ntitle.append(titleImg);\r\n\r\nconst subTitle = document.createElement('p');\r\nsubTitle.innerHTML = 'Press right mouse click to place the <span class=\"flag\">&#9872</span>';\r\nsubTitle.classList.add('sub-title');\r\nconst field = document.createElement('div');\r\nfield.classList.add('field-10');\r\n\r\nconst modeBtns = document.createElement('div');\r\nmodeBtns.classList.add('mode-btns-block');\r\nconst easyBtn = document.createElement('button');\r\neasyBtn.classList.add('mode-btn');\r\neasyBtn.innerHTML = 'Easy';\r\nconst mediumBtn = document.createElement('button');\r\nmediumBtn.classList.add('mode-btn');\r\nmediumBtn.innerHTML = 'Medium';\r\nconst hardBtn = document.createElement('button');\r\nhardBtn.classList.add('mode-btn');\r\nhardBtn.innerHTML = 'Hard';\r\n\r\nconst resultBtn = document.createElement('button');\r\nresultBtn.classList.add('mode-btn');\r\nresultBtn.innerHTML = 'Results';\r\n\r\nmodeBtns.append(easyBtn, mediumBtn, hardBtn, resultBtn);\r\n\r\nlet closeBtn = document.createElement('button');\r\ncloseBtn.className = 'close-btn';\r\ncloseBtn.innerHTML = 'Close';\r\n\r\nconst modal = document.createElement('div');\r\nmodal.className = 'hidden';\r\n\r\nconst modalResult = document.createElement('div');\r\nmodalResult.className = 'modal-result';\r\nmodal.append(modalResult);\r\nconst timer = document.createElement('div');\r\ntimer.className = 'timer';\r\ntimer.innerHTML = 'Time: ';\r\n\r\nconst timeSec = document.createElement('span');\r\ntimer.className = 'time';\r\ntimer.append(timeSec);\r\n\r\nconst clicksCounter = document.createElement('div');\r\nclicksCounter.className = 'clicks-counter';\r\nclicksCounter.innerHTML = 'Clicks: ';\r\nconst click = document.createElement('span');\r\nclick.className = 'click';\r\nclicksCounter.append(click);\r\nlet flagCounter = document.createElement('div');\r\nflagCounter.className = 'flags-counter';\r\nflagCounter.innerHTML = '<img src=\"./assets/flag1-icon.png\">: ';\r\nconst flag = document.createElement('span');\r\nflag.className = 'flag';\r\nflagCounter.append(flag);\r\nconst scoreBoard = document.createElement('div');\r\nscoreBoard.className = 'score-board';\r\n\r\nscoreBoard.append(timer, clicksCounter, flagCounter);\r\n\r\nconst modeSwitcher = document.createElement('img');\r\nmodeSwitcher.className = 'mode-switcher';\r\nconst soundSwitcher = document.createElement('img');\r\nsoundSwitcher.className = 'sound-switcher';\r\n\r\nlet clickSound = document.createElement('audio');\r\nclickSound.src = './assets/click.mp3';\r\nlet flagSound = document.createElement('audio');\r\nflagSound.src = './assets/flag.mp3';\r\nlet winSound = document.createElement('audio');\r\nwinSound.src = './assets/win.mp3';\r\nlet boomSound = document.createElement('audio');\r\nboomSound.src = './assets/boom.mp3';\r\n\r\nlet bombsCounter = document.createElement('div');\r\nbombsCounter.className = 'bombs-selector';\r\n\r\nlet bombsChoiceLabel = document.createElement('label');\r\nbombsChoiceLabel.innerHTML = 'Choose bombs quantity ';\r\nlet bombsChoice = document.createElement('input');\r\nbombsChoice.type = 'number';\r\nbombsChoice.min = 1;\r\nbombsChoice.max = 99;\r\nlet changeBombsBtn = document.createElement('button');\r\nchangeBombsBtn.innerHTML = 'Change';\r\n\r\nbombsCounter.append(bombsChoiceLabel, bombsChoice, changeBombsBtn);\r\n\r\ndocument.body.append(\r\n  modeSwitcher,\r\n  soundSwitcher,\r\n  title,\r\n  subTitle,\r\n  scoreBoard,\r\n  modeBtns,\r\n  bombsCounter,\r\n  field,\r\n  modal,\r\n  clickSound,\r\n  flagSound,\r\n  winSound,\r\n  boomSound\r\n);\r\n\r\n\r\n\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/elements.js?");

/***/ }),

/***/ "./minesweeper/src/events.js":
/*!***********************************!*\
  !*** ./minesweeper/src/events.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createField\": () => (/* binding */ createField),\n/* harmony export */   \"switchScreenMode\": () => (/* binding */ switchScreenMode),\n/* harmony export */   \"switchSoundMode\": () => (/* binding */ switchSoundMode)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./minesweeper/src/elements.js\");\n\r\n//images\r\n\r\nlet arrayOfBobmsIndexes = [];\r\nlet loss = false;\r\nlet SIZE = 10;\r\nlet bombsQuantity = 10;\r\nlet clicks = 0;\r\nlet time = 0;\r\nlet interval;\r\nlet arrayOfAllNotBombs = [];\r\nlet arrayOfResults = [];\r\nlet totalCount;\r\nlet flags = 10;\r\nlet arrOfPlacedFlags = [];\r\n\r\nfunction createField(count, bombs) {\r\n  SIZE = count;\r\n  bombsQuantity = bombs;\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.bombsChoice.value = bombs;\r\n\r\n  totalCount = count * count;\r\n  switch (count) {\r\n    case 10:\r\n      _elements_js__WEBPACK_IMPORTED_MODULE_0__.field.className = 'field-10';\r\n      break;\r\n    case 15:\r\n      _elements_js__WEBPACK_IMPORTED_MODULE_0__.field.className = 'field-15';\r\n      break;\r\n    case 25:\r\n      _elements_js__WEBPACK_IMPORTED_MODULE_0__.field.className = 'field-25';\r\n      break;\r\n    default:\r\n      break;\r\n  }\r\n  addNewGame(bombs);\r\n}\r\n\r\nfunction addNewGame(bombs) {\r\n  clearInterval(interval);\r\n\r\n  if (localStorage.getItem('state')) {\r\n    let arrayOfCells = JSON.parse(localStorage.getItem('state'));\r\n    arrayOfCells.forEach((el) => {\r\n      let cell = document.createElement('button');\r\n      cell.classList.add('cell');\r\n      cell.id = el.id;\r\n      cell.disabled = el.state;\r\n      cell.innerHTML = el.content;\r\n      colorGenerator(+el.content, cell);\r\n      _elements_js__WEBPACK_IMPORTED_MODULE_0__.field.append(cell);\r\n    });\r\n    arrayOfBobmsIndexes = JSON.parse(localStorage.getItem('bombs'));\r\n\r\n    clicks = Number(localStorage.getItem('clicks'));\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.click.innerHTML = clicks;\r\n    time = Number(localStorage.getItem('time'));\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.timeSec.innerHTML = time;\r\n    interval = setInterval(() => {\r\n      time++;\r\n      _elements_js__WEBPACK_IMPORTED_MODULE_0__.timeSec.innerHTML = time;\r\n      localStorage.setItem('time', time);\r\n    }, 1000);\r\n    flags = Number(localStorage.getItem('flags'));\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.flag.innerHTML = flags;\r\n  } else {\r\n    let id = 1;\r\n    clicks = 0;\r\n    time = 0;\r\n    loss = false;\r\n    flags = bombs;\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.flag.innerHTML = flags;\r\n    let wholeQuantity = totalCount;\r\n    while (wholeQuantity > 0) {\r\n      let cell = document.createElement('button');\r\n      cell.classList.add('cell');\r\n      cell.id = id;\r\n      _elements_js__WEBPACK_IMPORTED_MODULE_0__.field.append(cell);\r\n      wholeQuantity -= 1;\r\n      id += 1;\r\n    }\r\n    localStorage.setItem('count-bombs', bombs);\r\n  }\r\n  createBobms(SIZE, bombs);\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.timeSec.innerHTML = time;\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.click.innerHTML = clicks;\r\n}\r\n\r\nfunction createBobms(count, bombs) {\r\n  arrayOfBobmsIndexes.length = 0;\r\n  while (arrayOfBobmsIndexes.length < +bombs) {\r\n    const index = Math.floor(Math.random() * (count * count - 1) + 1);\r\n    if (arrayOfBobmsIndexes.indexOf(index) < 0) {\r\n      arrayOfBobmsIndexes.push(index);\r\n    }\r\n  }\r\n  createArrayOfNotBombs();\r\n  localStorage.setItem('bombs', JSON.stringify(arrayOfBobmsIndexes));\r\n}\r\n\r\nfunction createArrayOfNotBombs() {\r\n  arrayOfAllNotBombs.length = 0;\r\n  let cells = document.querySelectorAll('.cell');\r\n  cells.forEach((cell) => {\r\n    if (arrayOfBobmsIndexes.indexOf(+cell.id) < 0) {\r\n      arrayOfAllNotBombs.push(cell);\r\n    }\r\n  });\r\n  localStorage.setItem('not-bombs', JSON.stringify(arrayOfAllNotBombs));\r\n}\r\n\r\nfunction checkWinner() {\r\n  let cells = document.querySelectorAll('.cell');\r\n  let filter = arrayOfAllNotBombs.filter((el) => el.disabled == false);\r\n\r\n  if (filter.length === 0) {\r\n    clearInterval(interval);\r\n    let date = getDate();\r\n    arrayOfResults.unshift({\r\n      date: `${date.getDate()}/${\r\n        date.getMonth() + 1\r\n      }/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`,\r\n      result: 'winner',\r\n    });\r\n    let resultToSubmit = arrayOfResults.slice(0, 10);\r\n    localStorage.setItem('result', JSON.stringify(resultToSubmit));\r\n    disableModeBtns();\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.modalResult.innerHTML = '<img src=\"./assets/cool.gif\">';\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.modal.style.backgroundColor = 'transparent';\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.modal.classList.add('active');\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.winSound.play();\r\n    setTimeout(() => {\r\n      cells.forEach((cell) => {\r\n        if (!cell.disabled) {\r\n          cell.innerHTML = 'X';\r\n          cell.disabled = true;\r\n          _elements_js__WEBPACK_IMPORTED_MODULE_0__.modal.style.backgroundColor = '#271029c4';\r\n          _elements_js__WEBPACK_IMPORTED_MODULE_0__.modalResult.innerHTML = `<div class=\"modal-result\">\r\n          Hooray! You found all mines in ${time} seconds and ${clicks} moves!\r\n          <br>`;\r\n          _elements_js__WEBPACK_IMPORTED_MODULE_0__.modalResult.append(_elements_js__WEBPACK_IMPORTED_MODULE_0__.closeBtn);\r\n          _elements_js__WEBPACK_IMPORTED_MODULE_0__.closeBtn.addEventListener('click', () => {\r\n            _elements_js__WEBPACK_IMPORTED_MODULE_0__.modal.classList.remove('active');\r\n            enableModeBtns();\r\n          });\r\n          clearLocalStorage();\r\n        }\r\n      });\r\n    }, 2000);\r\n  }\r\n}\r\n\r\nfunction isBomb(id) {\r\n  return JSON.parse(localStorage.getItem('bombs')).includes(+id);\r\n}\r\nfunction getDate() {\r\n  let day = new Date();\r\n  return day;\r\n}\r\n\r\nfunction openCell(id) {\r\n  let value = Number(id);\r\n  let cell = document.getElementById(id);\r\n\r\n  if (id < 0 || id > SIZE * SIZE || cell.disabled == true) return;\r\n  let countNeighbourBombs = getNeighbourBombCount(id);\r\n\r\n  if (isBomb(id) && !loss) {\r\n    loss = true;\r\n    let date = getDate();\r\n    arrayOfResults.unshift({\r\n      date: `${date.getDate()}/${\r\n        date.getMonth() + 1\r\n      }/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`,\r\n      result: 'loser',\r\n    });\r\n    let resultToSubmit = arrayOfResults.slice(0, 10);\r\n    localStorage.setItem('result', JSON.stringify(resultToSubmit));\r\n    cell.innerHTML = 'X';\r\n    cell.disabled = true;\r\n    clearInterval(interval);\r\n    disableModeBtns();\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.modalResult.innerHTML = '<img src=\"./assets/boomm-1.gif\">';\r\n\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.boomSound.play();\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.modal.classList.add('active');\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.modal.style.backgroundColor = 'transparent';\r\n\r\n    setTimeout(() => {\r\n      const cells = document.querySelectorAll('.cell');\r\n      cells.forEach((cell) => openCell(cell.id));\r\n      clearLocalStorage();\r\n      _elements_js__WEBPACK_IMPORTED_MODULE_0__.modal.style.backgroundColor = '#271029c4';\r\n      _elements_js__WEBPACK_IMPORTED_MODULE_0__.modalResult.innerHTML = `Game over. Try again!`;\r\n      _elements_js__WEBPACK_IMPORTED_MODULE_0__.modalResult.append(_elements_js__WEBPACK_IMPORTED_MODULE_0__.closeBtn);\r\n      _elements_js__WEBPACK_IMPORTED_MODULE_0__.closeBtn.addEventListener('click', () => {\r\n        _elements_js__WEBPACK_IMPORTED_MODULE_0__.modal.classList.remove('active');\r\n        enableModeBtns();\r\n      });\r\n    }, 1300);\r\n    return;\r\n  } else if (isBomb(id) && loss) {\r\n    cell.innerHTML = 'X';\r\n    cell.disabled = true;\r\n    return;\r\n  } else if (countNeighbourBombs !== 0) {\r\n    cell.innerHTML = countNeighbourBombs;\r\n    colorGenerator(countNeighbourBombs, cell);\r\n    cell.disabled = true;\r\n    return;\r\n  } else {\r\n    cell.disabled = true;\r\n    //  top left corner cell\r\n    if (value == 1) {\r\n      for (let y = 0; y < SIZE * 2; y += SIZE) {\r\n        for (let x = value; x < value + 2; x++) {\r\n          openNeighbourCells(x + y);\r\n        }\r\n      }\r\n    }\r\n    //  top horizontal row cells\r\n    else if (value > 1 && value < SIZE) {\r\n      for (let y = 0; y < SIZE * 2; y += SIZE) {\r\n        for (let x = value - 1; x < value + 2; x++) {\r\n          openNeighbourCells(x + y);\r\n        }\r\n      }\r\n    }\r\n    //  top right corner cell\r\n    else if (value == SIZE) {\r\n      for (let y = 0; y < SIZE * 2; y += SIZE) {\r\n        for (let x = value - 1; x < value + 1; x++) {\r\n          openNeighbourCells(x + y);\r\n        }\r\n      }\r\n    }\r\n    //   left vertical row cells\r\n    else if (value > SIZE && (value - 1) % SIZE == 0 && id < SIZE * SIZE - SIZE) {\r\n      for (let y = 0; y < SIZE * 3; y += SIZE) {\r\n        for (let x = value - SIZE; x < value - SIZE + 2; x++) {\r\n          openNeighbourCells(x + y);\r\n        }\r\n      }\r\n    }\r\n    //  left bottom corner cell\r\n    else if (value == SIZE * SIZE - SIZE + 1) {\r\n      for (let y = 0; y < SIZE * 2; y += SIZE) {\r\n        for (let x = value - SIZE; x < value - SIZE + 2; x++) {\r\n          openNeighbourCells(x + y);\r\n        }\r\n      }\r\n    }\r\n    //  bottom horizontal row cells\r\n    else if (value > SIZE * SIZE - SIZE + 1 && value < SIZE * SIZE) {\r\n      for (let y = 0; y < SIZE * 2; y += SIZE) {\r\n        for (let x = value - SIZE - 1; x < value - SIZE + 2; x++) {\r\n          openNeighbourCells(x + y);\r\n        }\r\n      }\r\n    }\r\n    //  bottom right corner cell\r\n    else if (value == SIZE * SIZE) {\r\n      for (let y = 0; y < SIZE * 2; y += SIZE) {\r\n        for (let x = value - SIZE - 1; x < value - SIZE + 1; x++) {\r\n          openNeighbourCells(x + y);\r\n        }\r\n      }\r\n    }\r\n    //   right vertical row cells\r\n    else if (value > SIZE && value % SIZE == 0 && value < SIZE * SIZE) {\r\n      for (let y = 0; y < SIZE * 3; y += SIZE) {\r\n        for (let x = value - SIZE - 1; x < value - SIZE + 1; x++) {\r\n          openNeighbourCells(x + y);\r\n        }\r\n      }\r\n    }\r\n    //   all  inner cells\r\n    else if (value > SIZE + 1 && value < SIZE * SIZE - SIZE - 1) {\r\n      for (let y = 0; y < SIZE * 3; y += SIZE) {\r\n        for (let x = value - SIZE - 1; x < value - SIZE + 2; x++) {\r\n          openNeighbourCells(x + y);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction clearLocalStorage() {\r\n  localStorage.removeItem('state');\r\n  localStorage.removeItem('mode');\r\n  localStorage.removeItem('bombs');\r\n  localStorage.removeItem('clicks');\r\n  localStorage.removeItem('time');\r\n  localStorage.removeItem('flags');\r\n  localStorage.removeItem('bombs-count');\r\n}\r\nfunction colorGenerator(digit, cell) {\r\n  switch (digit) {\r\n    case 1:\r\n      cell.style.color = 'darkgreen';\r\n      break;\r\n    case 2:\r\n      cell.style.color = 'blue';\r\n      break;\r\n    case 3:\r\n      cell.style.color = 'purple';\r\n      break;\r\n    case 4:\r\n      cell.style.color = 'brown';\r\n      break;\r\n    case 5:\r\n      cell.style.color = 'orange';\r\n      break;\r\n    case 6:\r\n      cell.style.color = 'yellow';\r\n      break;\r\n    case 7:\r\n      cell.style.color = 'pink';\r\n      break;\r\n    case 8:\r\n      cell.style.color = 'darkgrey';\r\n      break;\r\n    default:\r\n      break;\r\n  }\r\n}\r\n\r\nfunction openNeighbourCells(id) {\r\n  if (+id > 0 && +id <= totalCount) {\r\n    let cell = document.getElementById(id);\r\n    let countNeighbourBombs = getNeighbourBombCount(id);\r\n\r\n    if (isBomb(id)) {\r\n      return;\r\n    } else if (countNeighbourBombs !== 0) {\r\n      cell.innerHTML = countNeighbourBombs;\r\n      switch (countNeighbourBombs) {\r\n        case 1:\r\n          cell.style.color = 'darkgreen';\r\n          break;\r\n        case 2:\r\n          cell.style.color = 'blue';\r\n          break;\r\n        case 3:\r\n          cell.style.color = 'purple';\r\n          break;\r\n        case 4:\r\n          cell.style.color = 'brown';\r\n          break;\r\n        default:\r\n          break;\r\n      }\r\n      cell.disabled = true;\r\n      return;\r\n    } else {\r\n      openCell(id);\r\n    }\r\n  }\r\n}\r\n\r\nfunction getNeighbourBombCount(id) {\r\n  let neighbourCells = [];\r\n  let neighbourBombsCount = 0;\r\n  let bombsIndexes = JSON.parse(localStorage.getItem('bombs'));\r\n  //If first column\r\n  if (id == 1 || (+id - 1) % SIZE == 0) {\r\n    for (let x = +id - SIZE; x < +id - SIZE + 2; x++) {\r\n      neighbourCells.push(x);\r\n    }\r\n    neighbourCells.forEach((el) => {\r\n      neighbourCells.push(el + Number(SIZE));\r\n      neighbourCells.push(el + Number(SIZE) * 2);\r\n    });\r\n    neighbourCells.forEach((el) => {\r\n      bombsIndexes.forEach((bombIndex) => {\r\n        el == bombIndex ? (neighbourBombsCount += 1) : '';\r\n      });\r\n    });\r\n  }\r\n  //If last column\r\n  else if (+id % SIZE == 0) {\r\n    for (let x = +id - SIZE - 1; x < +id - SIZE + 1; x++) {\r\n      neighbourCells.push(x);\r\n    }\r\n    neighbourCells.forEach((el) => {\r\n      neighbourCells.push(el + Number(SIZE));\r\n      neighbourCells.push(el + Number(SIZE) * 2);\r\n    });\r\n    neighbourCells.forEach((el) => {\r\n      bombsIndexes.forEach((bombIndex) => {\r\n        el == bombIndex ? (neighbourBombsCount += 1) : '';\r\n      });\r\n    });\r\n  }\r\n  // For  all inner cells\r\n  else {\r\n    for (let x = +id - SIZE - 1; x < +id - SIZE + 2; x++) {\r\n      neighbourCells.push(x);\r\n    }\r\n    neighbourCells.forEach((el) => {\r\n      neighbourCells.push(el + Number(SIZE));\r\n      neighbourCells.push(el + Number(SIZE) * 2);\r\n    });\r\n\r\n    neighbourCells.forEach((el) => {\r\n      bombsIndexes.forEach((bombIndex) => {\r\n        el == bombIndex ? (neighbourBombsCount += 1) : '';\r\n      });\r\n    });\r\n  }\r\n\r\n  return neighbourBombsCount;\r\n}\r\n\r\nfunction cliskCount() {\r\n  clicks += 1;\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.click.innerHTML = clicks;\r\n  localStorage.setItem('clicks', clicks);\r\n}\r\nfunction placedFlagsCount() {\r\n  flags -= 1;\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.flag.innerHTML = flags;\r\n  localStorage.setItem('flags', flags);\r\n}\r\nfunction removedFlagsCount() {\r\n  flags += 1;\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.flag.innerHTML = flags;\r\n  localStorage.setItem('flags', flags);\r\n}\r\n\r\nfunction disableModeBtns() {\r\n  let modeBtns = document.querySelectorAll('.mode-btn');\r\n  modeBtns.forEach((el) => {\r\n    el.disabled = true;\r\n  });\r\n}\r\n\r\nfunction enableModeBtns() {\r\n  let modeBtns = document.querySelectorAll('.mode-btn');\r\n  modeBtns.forEach((el) => {\r\n    el.disabled = false;\r\n  });\r\n}\r\n\r\nfunction switchScreenMode() {\r\n  if (!localStorage.getItem('screen-mode')) {\r\n    localStorage.setItem('screen-mode', 'light');\r\n  }\r\n  const screenMode = localStorage.getItem('screen-mode');\r\n  if (screenMode == 'light') {\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.modeSwitcher.src = './assets/moon-icon.png';\r\n\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.titleImg.src = './assets/title-black.png';\r\n    document.body.className = 'light-mode';\r\n  } else if (screenMode == 'dark') {\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.modeSwitcher.src = './assets/sun-icon.png';\r\n\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.titleImg.src = './assets/title-light.png';\r\n    document.body.className = 'dark-mode';\r\n  }\r\n}\r\n\r\nfunction switchSoundMode() {\r\n  const soundMode = localStorage.getItem('sound-mode');\r\n  const audios = document.querySelectorAll('audio');\r\n\r\n  if (soundMode == 'on' || !soundMode) {\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.soundSwitcher.src = './assets/sound-icon.png';\r\n    audios.forEach((el) => {\r\n      el.muted = false;\r\n    });\r\n  } else if (soundMode == 'off') {\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.soundSwitcher.src = './assets/muted-icon.png';\r\n    audios.forEach((el) => {\r\n      el.muted = true;\r\n    });\r\n  }\r\n}\r\n\r\nfunction generateResults(results) {\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.modalResult.innerHTML = '';\r\n\r\n  results.forEach((res, i) => {\r\n    let row = document.createElement('div');\r\n    row.className = 'result-row';\r\n    let number = document.createElement('div');\r\n    number.innerHTML = i + 1;\r\n    number.className = 'row-flex-item-number';\r\n    let date = document.createElement('div');\r\n    date.innerHTML = `${res.date}`;\r\n    date.className = 'row-flex-item-middle';\r\n    let winLoss = document.createElement('div');\r\n    winLoss.innerHTML = res.result;\r\n    winLoss.className = 'row-flex-item';\r\n    row.append(number, date, winLoss);\r\n\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.modalResult.append(row);\r\n  });\r\n\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.modalResult.append(_elements_js__WEBPACK_IMPORTED_MODULE_0__.closeBtn);\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.modal.classList.add('active');\r\n\r\n  disableModeBtns();\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.closeBtn.addEventListener('click', () => {\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.modal.classList.remove('active');\r\n    enableModeBtns();\r\n  });\r\n}\r\n\r\nfunction saveState() {\r\n  const cells = document.querySelectorAll('.cell');\r\n  let arr = [];\r\n  cells.forEach((el) => {\r\n    let cell = {};\r\n    cell.id = el.id;\r\n    cell.content = el.innerHTML;\r\n    cell.state = el.disabled;\r\n    arr.push(cell);\r\n  });\r\n  localStorage.setItem('state', JSON.stringify(arr));\r\n}\r\nfunction changeModeOfBombs(size, bombs) {\r\n  clearInterval(interval);\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.modal.classList.remove('active');\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.field.innerHTML = '';\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.field.className = `field-${localStorage.getItem('mode')}`;\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.flag.innerHTML = bombs;\r\n  localStorage.setItem('flags', bombs);\r\n  createField(size, bombs);\r\n}\r\n\r\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.field.addEventListener('click', (event) => {\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.clickSound.play();\r\n  let cell = event.target;\r\n  if (localStorage.getItem('state')) {\r\n    cliskCount();\r\n    openCell(cell.id);\r\n    saveState();\r\n    checkWinner();\r\n  } else {\r\n    createBobms(SIZE, bombsQuantity);\r\n    if (arrayOfBobmsIndexes.indexOf(+cell.id) > 1) {\r\n      createBobms(SIZE, bombsQuantity);\r\n    } else {\r\n      openCell(cell.id);\r\n    }\r\n    time = 1;\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.timeSec.innerHTML = time;\r\n    interval = setInterval(() => {\r\n      time++;\r\n      _elements_js__WEBPACK_IMPORTED_MODULE_0__.timeSec.innerHTML = time;\r\n      localStorage.setItem('time', time);\r\n    }, 1000);\r\n    cell.disabled = true;\r\n    cliskCount();\r\n    saveState();\r\n    checkWinner();\r\n  }\r\n});\r\n\r\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.field.addEventListener('contextmenu', (event) => {\r\n  event.preventDefault();\r\n  if (flags > 0) {\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.flagSound.play();\r\n    let cell = event.target;\r\n    if (cell.innerHTML == '⚐') {\r\n      cell.innerHTML = '';\r\n      removedFlagsCount();\r\n    } else {\r\n      cell.disabled = false;\r\n      cell.innerHTML = '&#9872';\r\n      placedFlagsCount();\r\n    }\r\n\r\n    localStorage.setItem('placed-flags', JSON.stringify(arrOfPlacedFlags));\r\n  }\r\n});\r\n\r\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.easyBtn.addEventListener('click', () => {\r\n  clearLocalStorage();\r\n  changeModeOfBombs(10, 10);\r\n  localStorage.setItem('mode', 10);\r\n  localStorage.setItem('bombs-count', 10);\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.bombsChoice.value = 10;\r\n});\r\n\r\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.mediumBtn.addEventListener('click', () => {\r\n  clearLocalStorage();\r\n  changeModeOfBombs(15, 15);\r\n  localStorage.setItem('mode', 15);\r\n  localStorage.setItem('bombs-count', 15);\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.bombsChoice.value = 15;\r\n});\r\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.hardBtn.addEventListener('click', () => {\r\n  clearLocalStorage();\r\n  changeModeOfBombs(25, 25);\r\n  localStorage.setItem('mode', 25);\r\n  localStorage.setItem('bombs-count', 25);\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.bombsChoice.value = 25;\r\n});\r\n\r\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.resultBtn.addEventListener('click', () => {\r\n  if (localStorage.getItem('result')) {\r\n    let arrOfResults = JSON.parse(localStorage.getItem('result'));\r\n    generateResults(arrOfResults);\r\n  }\r\n});\r\n\r\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.modeSwitcher.addEventListener('click', () => {\r\n  const screenMode = localStorage.getItem('screen-mode');\r\n  if (screenMode == 'light') {\r\n    localStorage.setItem('screen-mode', 'dark');\r\n  } else if (screenMode == 'dark') {\r\n    localStorage.setItem('screen-mode', 'light');\r\n  }\r\n  switchScreenMode();\r\n});\r\n\r\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.soundSwitcher.addEventListener('click', () => {\r\n  const soundMode = localStorage.getItem('sound-mode');\r\n\r\n  if (soundMode == 'on' || !soundMode) {\r\n    localStorage.setItem('sound-mode', 'off');\r\n  } else if (soundMode == 'off') {\r\n    localStorage.setItem('sound-mode', 'on');\r\n  }\r\n  switchSoundMode();\r\n});\r\n\r\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.changeBombsBtn.addEventListener('click', () => {\r\n  clearLocalStorage();\r\n  bombsQuantity = Number(_elements_js__WEBPACK_IMPORTED_MODULE_0__.bombsChoice.value);\r\n  localStorage.setItem('flags', bombsQuantity);\r\n  localStorage.setItem('count-bombs', bombsQuantity);\r\n  changeModeOfBombs(SIZE, bombsQuantity);\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.flag.innerHTML = bombsQuantity;\r\n});\r\n\r\n_elements_js__WEBPACK_IMPORTED_MODULE_0__.bombsChoice.addEventListener('change', () => {\r\n  if (_elements_js__WEBPACK_IMPORTED_MODULE_0__.bombsChoice.value > 99) {\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.changeBombsBtn.disabled = true;\r\n  } else {\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.changeBombsBtn.disabled = false;\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/events.js?");

/***/ }),

/***/ "./minesweeper/src/index.js":
/*!**********************************!*\
  !*** ./minesweeper/src/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.js */ \"./minesweeper/src/events.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ \"./minesweeper/src/elements.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ \"./minesweeper/style.css\");\n/* harmony import */ var _assets_moon_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/moon-icon.png */ \"./minesweeper/src/assets/moon-icon.png\");\n/* harmony import */ var _assets_moon_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_moon_icon_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_sun_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/sun-icon.png */ \"./minesweeper/src/assets/sun-icon.png\");\n/* harmony import */ var _assets_sun_icon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_sun_icon_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_title_light_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/title-light.png */ \"./minesweeper/src/assets/title-light.png\");\n/* harmony import */ var _assets_title_light_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_title_light_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_title_black_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/title-black.png */ \"./minesweeper/src/assets/title-black.png\");\n/* harmony import */ var _assets_title_black_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_title_black_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_boomm_1_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/boomm-1.gif */ \"./minesweeper/src/assets/boomm-1.gif\");\n/* harmony import */ var _assets_boomm_1_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_boomm_1_gif__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_cool_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/cool.gif */ \"./minesweeper/src/assets/cool.gif\");\n/* harmony import */ var _assets_cool_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_cool_gif__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_finish_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/finish.png */ \"./minesweeper/src/assets/finish.png\");\n/* harmony import */ var _assets_finish_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_finish_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_flag_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/flag-icon.png */ \"./minesweeper/src/assets/flag-icon.png\");\n/* harmony import */ var _assets_flag_icon_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_flag_icon_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_flag1_icon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/flag1-icon.png */ \"./minesweeper/src/assets/flag1-icon.png\");\n/* harmony import */ var _assets_flag1_icon_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_flag1_icon_png__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _assets_sound_icon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/sound-icon.png */ \"./minesweeper/src/assets/sound-icon.png\");\n/* harmony import */ var _assets_sound_icon_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_sound_icon_png__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _assets_muted_icon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/muted-icon.png */ \"./minesweeper/src/assets/muted-icon.png\");\n/* harmony import */ var _assets_muted_icon_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_muted_icon_png__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _assets_title_pink_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/title-pink.png */ \"./minesweeper/src/assets/title-pink.png\");\n/* harmony import */ var _assets_title_pink_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_title_pink_png__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _assets_boom_mp3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/boom.mp3 */ \"./minesweeper/src/assets/boom.mp3\");\n/* harmony import */ var _assets_boom_mp3__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_boom_mp3__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _assets_click_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/click.mp3 */ \"./minesweeper/src/assets/click.mp3\");\n/* harmony import */ var _assets_click_mp3__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_click_mp3__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _assets_flag_mp3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/flag.mp3 */ \"./minesweeper/src/assets/flag.mp3\");\n/* harmony import */ var _assets_flag_mp3__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_flag_mp3__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _assets_win_mp3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/win.mp3 */ \"./minesweeper/src/assets/win.mp3\");\n/* harmony import */ var _assets_win_mp3__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_win_mp3__WEBPACK_IMPORTED_MODULE_18__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n  (0,_events_js__WEBPACK_IMPORTED_MODULE_0__.switchScreenMode)();\r\n  (0,_events_js__WEBPACK_IMPORTED_MODULE_0__.switchSoundMode)();\r\n  if (Number(localStorage.getItem('mode'))) {\r\n    (0,_events_js__WEBPACK_IMPORTED_MODULE_0__.createField)(Number(localStorage.getItem('mode')), Number(localStorage.getItem('bombs-count')));\r\n  } else {\r\n    (0,_events_js__WEBPACK_IMPORTED_MODULE_0__.createField)(10, 10);\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_1__.bombsChoice.value = 10;\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./minesweeper/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./minesweeper/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --font: 'JetBrains Mono', monospace;\\r\\n}\\r\\n\\r\\n.light-mode {\\r\\n  background: #ada996;\\r\\n  background: linear-gradient(to right, #eaeaea, #dbdbdb, #f2f2f2, #dbdad2);\\r\\n  color: #431447;\\r\\n  font-family: var(--font);\\r\\n}\\r\\n.dark-mode {\\r\\n  background: #431447;\\r\\n  background: linear-gradient(to right, #2f2631, #2e2222, #0f0808, #29281d);\\r\\n  color: #f6f1f7;\\r\\n  font-family: var(--font);\\r\\n}\\r\\n.sub-title {\\r\\n  width: fit-content;\\r\\n  margin: 0 auto;\\r\\n  margin-bottom: 20px;\\r\\n  font-size: 18px;\\r\\n}\\r\\n.flag {\\r\\n  color: red;\\r\\n}\\r\\n.mode-btns-block {\\r\\n  width: fit-content;\\r\\n  margin: 0 auto;\\r\\n  margin-top: 15px;\\r\\n}\\r\\n.title img {\\r\\n  width: 30%;\\r\\n  margin: 0px auto;\\r\\n}\\r\\n.title,\\r\\n.time,\\r\\n.clicks-counter,\\r\\n.bombs-selector,\\r\\n.flags-counter {\\r\\n  text-align: center;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.field-10,\\r\\n.field-15,\\r\\n.field-25 {\\r\\n  display: grid;\\r\\n  margin: 0px auto;\\r\\n  margin-top: 20px;\\r\\n  max-width: fit-content;\\r\\n  border: 1px solid grey;\\r\\n  border-radius: 3px;\\r\\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,\\r\\n    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\\r\\n}\\r\\n.field-10 {\\r\\n  grid-template-columns: repeat(10, 33px);\\r\\n  grid-template-rows: repeat(10, 33px);\\r\\n}\\r\\n.field-15 {\\r\\n  grid-template-columns: repeat(15, 33px);\\r\\n  grid-template-rows: repeat(15, 33px);\\r\\n}\\r\\n.field-25 {\\r\\n  grid-template-columns: repeat(25, 33px);\\r\\n  grid-template-rows: repeat(25, 33px);\\r\\n}\\r\\n\\r\\n.cell {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  font-weight: 700;\\r\\n  font-size: 1rem;\\r\\n  text-align: center;\\r\\n  justify-content: center;\\r\\n  cursor: pointer;\\r\\n  color: red;\\r\\n  border-radius: 3px;\\r\\n  background-color: #948596;\\r\\n}\\r\\n.cell:disabled {\\r\\n  border: 1px solid grey;\\r\\n  background-color: #cfcdcf;\\r\\n}\\r\\n.mode-btns-block {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  column-gap: 15px;\\r\\n  margin-bottom: 15px;\\r\\n}\\r\\n.mode-btn,\\r\\n.close-btn {\\r\\n  align-items: center;\\r\\n  background-color: #fcfcfd;\\r\\n  border-radius: 4px;\\r\\n  border-width: 0;\\r\\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,\\r\\n    #d6d6e7 0 -3px 0 inset;\\r\\n  box-sizing: border-box;\\r\\n  color: #431447;\\r\\n  cursor: pointer;\\r\\n  display: inline-flex;\\r\\n  font-family: (--font);\\r\\n  height: 28px;\\r\\n  justify-content: center;\\r\\n  line-height: 1;\\r\\n  list-style: none;\\r\\n  overflow: hidden;\\r\\n  padding-left: 16px;\\r\\n  padding-right: 16px;\\r\\n  position: relative;\\r\\n  text-align: left;\\r\\n  text-decoration: none;\\r\\n  transition: box-shadow 0.15s, transform 0.15s;\\r\\n  font-size: 18px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n.close-btn {\\r\\n  display: block;\\r\\n  margin: 0px auto;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n.mode-btn:hover {\\r\\n  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,\\r\\n    #d6d6e7 0 -3px 0 inset;\\r\\n}\\r\\n\\r\\n.mode-btn:disabled {\\r\\n  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,\\r\\n    #d6d6e7 0 -3px 0 inset;\\r\\n  color: grey;\\r\\n}\\r\\n.hidden {\\r\\n  visibility: hidden;\\r\\n  position: absolute;\\r\\n}\\r\\n.active {\\r\\n  visibility: visible;\\r\\n  width: fit-content;\\r\\n  position: fixed;\\r\\n  float: left;\\r\\n  left: 50%;\\r\\n  top: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  border-radius: 5px;\\r\\n  text-align: center;\\r\\n  background-color: #271029c4;\\r\\n  padding: 50px;\\r\\n  color: white;\\r\\n  font-size: 30px;\\r\\n  z-index: 99;\\r\\n}\\r\\n.active img {\\r\\n  width: 60vw;\\r\\n}\\r\\n.result-row {\\r\\n  display: flex;\\r\\n  justify-content: start;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n.row-flex-item {\\r\\n  width: 50px;\\r\\n  border: 0.5px dotted white;\\r\\n  padding: 5px;\\r\\n}\\r\\n.row-flex-item-number {\\r\\n  width: 30px;\\r\\n  border: 0.5px dotted white;\\r\\n  padding: 5px;\\r\\n}\\r\\n.row-flex-item-middle {\\r\\n  width: 150px;\\r\\n  border: 0.5px dotted white;\\r\\n  padding: 5px;\\r\\n}\\r\\n.mode-switcher,\\r\\n.sound-switcher {\\r\\n  width: 45px;\\r\\n  cursor: pointer;\\r\\n  position: absolute;\\r\\n}\\r\\n.mode-switcher {\\r\\n  top: 5%;\\r\\n  left: 5%;\\r\\n}\\r\\n.sound-switcher {\\r\\n  top: 5%;\\r\\n  right: 5%;\\r\\n}\\r\\n.flags-counter img {\\r\\n  width: 25px;\\r\\n}\\r\\n.score-board {\\r\\n  display: grid;\\r\\n  border: 3px solid rgb(173, 119, 119);\\r\\n  max-width: fit-content;\\r\\n  margin: 0px auto;\\r\\n  padding: 10px;\\r\\n  border-radius: 6px;\\r\\n  box-shadow: rgba(163, 160, 160, 0.17) 0px -23px 25px 0px inset,\\r\\n    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(155, 148, 148, 0.1) 0px -79px 40px 0px inset,\\r\\n    rgba(139, 132, 132, 0.06) 0px 2px 1px, rgba(145, 138, 138, 0.09) 0px 4px 2px,\\r\\n    rgba(139, 133, 133, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,\\r\\n    rgba(0, 0, 0, 0.09) 0px 32px 16px;\\r\\n}\\r\\n.bombs-selector input {\\r\\n  border: none;\\r\\n  border-radius: 8px;\\r\\n  border-bottom: 2px solid grey;\\r\\n  border-right: 2px solid grey;\\r\\n  text-align: center;\\r\\n  color: #431447;\\r\\n  font-weight: 700;\\r\\n  margin-right: 5px;\\r\\n}\\r\\n\\r\\n.bombs-selector button {\\r\\n  background-color: #fff;\\r\\n  border: 1px solid #d5d9d9;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;\\r\\n  box-sizing: border-box;\\r\\n  color: #0f1111;\\r\\n  cursor: pointer;\\r\\n  display: inline-block;\\r\\n  font-family: 'Amazon Ember', sans-serif;\\r\\n  font-size: 13px;\\r\\n  line-height: 29px;\\r\\n  padding: 0 10px 0 11px;\\r\\n  position: relative;\\r\\n  text-align: center;\\r\\n  text-decoration: none;\\r\\n  user-select: none;\\r\\n  -webkit-user-select: none;\\r\\n  touch-action: manipulation;\\r\\n  vertical-align: middle;\\r\\n  width: 100px;\\r\\n}\\r\\n\\r\\n.bombs-selector button:hover {\\r\\n  background-color: #f7fafa;\\r\\n}\\r\\n\\r\\n@media (max-width: 900px) {\\r\\n  .field-25 {\\r\\n    grid-template-columns: repeat(25, 25px);\\r\\n    grid-template-rows: repeat(25, 25px);\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 680px) {\\r\\n  .field-25 {\\r\\n    grid-template-columns: repeat(25, 18px);\\r\\n    grid-template-rows: repeat(25, 18px);\\r\\n  }\\r\\n  .field-15 {\\r\\n    grid-template-columns: repeat(15, 25px);\\r\\n    grid-template-rows: repeat(15, 25px);\\r\\n  }\\r\\n  .mode-btn {\\r\\n    padding-left: 8px;\\r\\n    padding-right: 8px;\\r\\n    font-size: 14px;\\r\\n    font-weight: 700;\\r\\n  }\\r\\n  .mode-switcher {\\r\\n    width: 35px;\\r\\n    top: 2%;\\r\\n    left: 2%;\\r\\n  }\\r\\n  .sound-switcher {\\r\\n    width: 35px;\\r\\n    top: 2%;\\r\\n    right: 2%;\\r\\n  }\\r\\n}\\r\\n@media (max-width: 400px) {\\r\\n  .field-25 {\\r\\n    grid-template-columns: repeat(25, 12px);\\r\\n    grid-template-rows: repeat(25, 12px);\\r\\n  }\\r\\n  .field-15 {\\r\\n    grid-template-columns: repeat(15, 20px);\\r\\n    grid-template-rows: repeat(15, 20px);\\r\\n  }\\r\\n  .field-10 {\\r\\n    grid-template-columns: repeat(10, 25px);\\r\\n    grid-template-rows: repeat(10, 25px);\\r\\n  }\\r\\n  .mode-switcher {\\r\\n    width: 25px;\\r\\n    top: 2%;\\r\\n    left: 2%;\\r\\n  }\\r\\n  .sound-switcher {\\r\\n    width: 25px;\\r\\n    top: 2%;\\r\\n    right: 2%;\\r\\n  }\\r\\n  .cell {\\r\\n    font-size: 0.6rem;\\r\\n  }\\r\\n  .sub-title {\\r\\n    font-size: 12px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./minesweeper/src/assets/boom.mp3":
/*!*****************************************!*\
  !*** ./minesweeper/src/assets/boom.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/boom.mp3\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/boom.mp3?");

/***/ }),

/***/ "./minesweeper/src/assets/boomm-1.gif":
/*!********************************************!*\
  !*** ./minesweeper/src/assets/boomm-1.gif ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/boomm-1.gif\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/boomm-1.gif?");

/***/ }),

/***/ "./minesweeper/src/assets/click.mp3":
/*!******************************************!*\
  !*** ./minesweeper/src/assets/click.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/click.mp3\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/click.mp3?");

/***/ }),

/***/ "./minesweeper/src/assets/cool.gif":
/*!*****************************************!*\
  !*** ./minesweeper/src/assets/cool.gif ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/cool.gif\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/cool.gif?");

/***/ }),

/***/ "./minesweeper/src/assets/finish.png":
/*!*******************************************!*\
  !*** ./minesweeper/src/assets/finish.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/finish.png\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/finish.png?");

/***/ }),

/***/ "./minesweeper/src/assets/flag-icon.png":
/*!**********************************************!*\
  !*** ./minesweeper/src/assets/flag-icon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/flag-icon.png\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/flag-icon.png?");

/***/ }),

/***/ "./minesweeper/src/assets/flag.mp3":
/*!*****************************************!*\
  !*** ./minesweeper/src/assets/flag.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/flag.mp3\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/flag.mp3?");

/***/ }),

/***/ "./minesweeper/src/assets/flag1-icon.png":
/*!***********************************************!*\
  !*** ./minesweeper/src/assets/flag1-icon.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/flag1-icon.png\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/flag1-icon.png?");

/***/ }),

/***/ "./minesweeper/src/assets/moon-icon.png":
/*!**********************************************!*\
  !*** ./minesweeper/src/assets/moon-icon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/moon-icon.png\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/moon-icon.png?");

/***/ }),

/***/ "./minesweeper/src/assets/muted-icon.png":
/*!***********************************************!*\
  !*** ./minesweeper/src/assets/muted-icon.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/muted-icon.png\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/muted-icon.png?");

/***/ }),

/***/ "./minesweeper/src/assets/sound-icon.png":
/*!***********************************************!*\
  !*** ./minesweeper/src/assets/sound-icon.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sound-icon.png\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/sound-icon.png?");

/***/ }),

/***/ "./minesweeper/src/assets/sun-icon.png":
/*!*********************************************!*\
  !*** ./minesweeper/src/assets/sun-icon.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sun-icon.png\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/sun-icon.png?");

/***/ }),

/***/ "./minesweeper/src/assets/title-black.png":
/*!************************************************!*\
  !*** ./minesweeper/src/assets/title-black.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/title-black.png\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/title-black.png?");

/***/ }),

/***/ "./minesweeper/src/assets/title-light.png":
/*!************************************************!*\
  !*** ./minesweeper/src/assets/title-light.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/title-light.png\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/title-light.png?");

/***/ }),

/***/ "./minesweeper/src/assets/title-pink.png":
/*!***********************************************!*\
  !*** ./minesweeper/src/assets/title-pink.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/title-pink.png\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/title-pink.png?");

/***/ }),

/***/ "./minesweeper/src/assets/win.mp3":
/*!****************************************!*\
  !*** ./minesweeper/src/assets/win.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/win.mp3\";\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/src/assets/win.mp3?");

/***/ }),

/***/ "./minesweeper/style.css":
/*!*******************************!*\
  !*** ./minesweeper/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./minesweeper/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./minesweeper/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://yuliamasliak-jsfeen2022q3/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./minesweeper/src/index.js");
/******/ 	
/******/ })()
;