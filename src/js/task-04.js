let tablo = document.querySelector('#value');

const buttonMinus = document.querySelector('button[data-action = decrement]');

const buttonPlus = document.querySelector('button[data-action = increment]');


let counterValue = 0;

buttonMinus.addEventListener('click', () => tablo.textContent = counterValue -= 1);

buttonPlus.addEventListener('click', () => tablo.textContent = counterValue += 1);