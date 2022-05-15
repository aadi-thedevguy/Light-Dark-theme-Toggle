
const headingText = document.querySelector('h2');
const sunMoonContainer = document.querySelector('.sun-moon-container');
const toggleButton = document.querySelector('.theme-toggle-button');
const audio = document.querySelector('.audio');
const modal = document.getElementById('modal')
const btn = document.getElementById('btn')
const open = document.getElementById('open')

const themes = document.querySelectorAll('.color-box span');

themes.forEach(theme => {
       theme.addEventListener('click', () => {
             let bgColor = getComputedStyle(theme).getPropertyValue("background-color")
             let color = getComputedStyle(theme).getPropertyValue("color")
             
             customTheme(bgColor,color)
             audio.play()
             modal.close()
       })
})
 
 function customTheme(bgColor,textColor) {
        document.body.style.backgroundColor = bgColor
        document.body.style.color = textColor
        sunMoonContainer.style.display = 'none'
        toggleButton.style.display = 'none'
           
 }
        open.onclick = () => modal.showModal()
        btn.onclick = () => modal.close()

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleButton.classList.toggle('dark');
    audio.play()
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
    sunMoonContainer.style.setProperty('--rotation',currentRotation + 180);
})