import dishesArray from './menu.json';
import dishesTemplates from './templates/dishcard.hbs';



const dishesList = document.querySelector('.js-menu');
const themeSwitch = document.querySelector ('#theme-switch-toggle');

console.log(themeSwitch);

themeSwitch.addEventListener('change', )



dishesList.innerHTML = dishesTemplates(dishesArray);



