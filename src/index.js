import dishesArray from './menu.json';
import dishesTemplates from './templates/dishcard.hbs';



const dishesList = document.querySelector('.js-menu');
const themeSwitchIcon = document.querySelector ('#theme-switch-toggle');
const bodyTag = document.querySelector ('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

    
 dishesList.innerHTML = dishesTemplates(dishesArray);
let isCheckedTheme = localStorage.getItem('checkedTheme');


if(!isCheckedTheme) {
    isCheckedTheme = Theme.LIGHT
    bodyTag.classList.toggle(isCheckedTheme);
    localStorage.setItem('checkedTheme', Theme.LIGHT);  
} 
else
{
    bodyTag.classList.toggle(isCheckedTheme); 

    if (isCheckedTheme === Theme.LIGHT) {
        themeSwitchIcon.checked = false;
      } else {
        themeSwitchIcon.checked = true;
      }
}




themeSwitchIcon.addEventListener('change', changeThemeBody);





function changeThemeBody (event) {
    
    if(isCheckedTheme === Theme.LIGHT) { 
        isCheckedTheme = Theme.DARK;
    } else {
        isCheckedTheme = Theme.LIGHT;
    }
    bodyTag.classList = isCheckedTheme;
    localStorage.setItem('checkedTheme', isCheckedTheme);  
}













