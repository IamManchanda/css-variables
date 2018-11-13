const swatches = document.querySelectorAll('.swatches > span');
const root = document.querySelector(':root');

swatches.forEach((currentSwatch) => {
  currentSwatch.addEventListener('click', (event) => {
    root.style.setProperty('--primary-color', event.target.style.background);
  });
});
