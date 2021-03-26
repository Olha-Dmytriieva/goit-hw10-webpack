import './styles.css';
import menu from './menu.json';
import template from './templates/menu.hbs';

const markup = template(menu)
const HTMLitem = document.querySelector('.js-menu')
HTMLitem.insertAdjacentHTML('afterbegin', markup)


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };



  

const bodyRef = document.querySelector('body');
bodyRef.classList.add(`${Theme.LIGHT}`)

const checkboxThemeSwitcher = document.getElementById('theme-switch-toggle');
checkboxThemeSwitcher.addEventListener('click', isChecked)

function isChecked(event){
  event.currentTarget.setAttribute('checked', true);

  if(checkboxThemeSwitcher.checked){
    bodyRef.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`) 
  } else {
    bodyRef.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`)
  }
  
}



// console.log(checkboxThemeSwitcher.checked)
