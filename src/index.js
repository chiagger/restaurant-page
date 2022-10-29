import './style.css';
import Icon from './bckr.jpg';
import './page-load.js';

const load = require('./page-load.js');

const element = document.createElement('div');

const myIcon = new Image();
myIcon.src = Icon;

element.appendChild(myIcon);

load.createHTML();