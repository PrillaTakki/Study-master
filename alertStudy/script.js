let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};

let year = prompt('В каком году родилась я?', '');

if (year == 1995) {
  alert( 'Молодца!' )
}
else if (year > 1995){
  alert('Я старше...');
}
else if (year < 1995){
  alert('Я моложе!');
}