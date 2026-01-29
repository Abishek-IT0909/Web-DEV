const colorBox   = document.getElementById('colorBox');
const colorPicker = document.getElementById('colorPicker');
const resetBtn    = document.getElementById('resetBtn');
const defaultColor = '#094718';

colorPicker.addEventListener('input', (e) => {
  colorBox.style.backgroundColor = e.target.value;
});

resetBtn.addEventListener('click', () => {
  colorBox.style.backgroundColor = defaultColor;
  colorPicker.value = defaultColor;   
});