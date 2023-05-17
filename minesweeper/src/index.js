import { createField, switchScreenMode, switchSoundMode } from './events.js';
import { bombsChoice } from './elements.js';
import '../style.css';
import './assets/moon-icon.png';
import './assets/sun-icon.png';
import './assets/title-light.png';
import './assets/title-black.png';
import './assets/boomm-1.gif';
import './assets/cool.gif';
import './assets/finish.png';
import './assets/flag-icon.png';
import './assets/flag1-icon.png';
import './assets/sound-icon.png';
import './assets/sun-icon.png';
import './assets/muted-icon.png';
import './assets/title-pink.png';
import './assets/boom.mp3';
import './assets/click.mp3';
import './assets/flag.mp3';
import './assets/win.mp3';

window.addEventListener('load', () => {
  switchScreenMode();
  switchSoundMode();
  if (Number(localStorage.getItem('mode'))) {
    createField(Number(localStorage.getItem('mode')), Number(localStorage.getItem('bombs-count')));
  } else {
    createField(10, 10);
    bombsChoice.value = 10;
  }
});
