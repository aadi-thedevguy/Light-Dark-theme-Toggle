
const headingText = document.querySelector('h2');
const sunMoonContainer = document.querySelector('.sun-moon-container');
const toggleButton = document.querySelector('.theme-toggle-button');
const audio = document.querySelector('.audio');


// setTimeout(customTheme,5000)
 
 function customTheme() {
        confirm('Did not like our Themes, Want to create your own ?')
        let color = prompt('Just Type the Color you want','skyblue, gray, crimson')

        if (color === null) return
        document.body.style.backgroundColor = color
        toggleButton.style.display = 'none'
        headingText.innerHTML = `<span style="color:white;">Custom Theme is active now</span>`
        
 }



toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleButton.classList.toggle('dark');
    audio.play()
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
    sunMoonContainer.style.setProperty('--rotation',currentRotation + 180);
})