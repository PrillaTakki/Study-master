'use strict';

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};

let question = prompt('Напиши число?', '');

if (question > 1) {
  alert( 1 );
}
  else if (question < -1) {
  alert(-1);
  }
  else (question === 0) {
  alert(0);
}