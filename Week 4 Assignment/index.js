const colorBox   = document.getElementById('colorBox');
const colorPicker = document.getElementById('colorPicker');
const resetButton    = document.getElementById('resetButton');
const defaultColor = '#094718';

colorPicker.addEventListener('input', (e) => {
  colorBox.style.backgroundColor = e.target.value;
});

resetButton.addEventListener('click', () => {
  colorBox.style.backgroundColor = defaultColor;
  colorPicker.value = defaultColor;   

});
