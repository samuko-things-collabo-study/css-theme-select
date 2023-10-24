const root = document.documentElement
const darkButton = document.querySelector('.dark');
const calmButton = document.querySelector('.calm');
const lightButton = document.querySelector('.light');
const themeBtns = document.querySelectorAll('.theme > .btn');

darkButton.style.setProperty('border', '1px solid black');
calmButton.style.setProperty('border', '1px solid black');
lightButton.style.setProperty('border', 'none');

themeBtns.forEach((btn) => {
  btn.addEventListener('click', handleThemeUpdate);
})

function handleThemeUpdate(e) {
  switch(e.target.value) {
    case 'dark': 
      root.style.setProperty('--theme-color', 'black')
      root.style.setProperty('--text-color', 'white')
      darkButton.style.setProperty('border', 'none');
      calmButton.style.setProperty('border', '1px solid white');
      lightButton.style.setProperty('border', '1px solid white');
      break
    case 'calm': 
      root.style.setProperty('--theme-color', '#B3E5FC')
      root.style.setProperty('--text-color', '#37474F')
      darkButton.style.setProperty('border', '1px solid #37474F');
      calmButton.style.setProperty('border', 'none');
      lightButton.style.setProperty('border', '1px solid #37474F');
      break
    case 'light':
      root.style.setProperty('--theme-color', 'white')
      root.style.setProperty('--text-color', 'black')
      darkButton.style.setProperty('border', '1px solid black');
      calmButton.style.setProperty('border', '1px solid black');
      lightButton.style.setProperty('border', 'none');
      break
  }
}