import './style.css';
import Icon from './bckr.jpg';
import './page-load.js';
import './page-menu.js';
import './page-home.js';
import './page-contact.js';

const load = require('./page-load.js');
const menu = require('./page-menu.js');
const home = require('./page-home.js');
const contact = require('./page-contact.js');

const element = document.createElement('div');

const myIcon = new Image();
myIcon.src = Icon;

element.appendChild(myIcon);

load.createHTML();

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener('click', menu.makeMenu);

const homeBtn = document.getElementById("home");
homeBtn.addEventListener('click', home.makeHome);

const contactBtn = document.getElementById("contactus");
console.log(contactBtn);
contactBtn.addEventListener('click', contact.makeContact);