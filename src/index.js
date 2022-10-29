import './style.css';
import Icon from './bckr.jpg';
import './page-load.js';
import './page-menu.js';
import './page-home.js';

const load = require('./page-load.js');
const menu = require('./page-menu.js');
const home = require('./page-home.js');

const element = document.createElement('div');

const myIcon = new Image();
myIcon.src = Icon;

element.appendChild(myIcon);

load.createHTML();

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener('click', menu.makeMenu);

const homeBtn = document.getElementById("home");
console.log(homeBtn);
homeBtn.addEventListener('click', home.makeHome);