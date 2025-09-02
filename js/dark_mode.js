const toggleSwitch = document.querySelector('#toggleSwitch');
const currentMode = localStorage.getItem('mode');

// Function to set the mode based on the toggle state
function setMode() {
    if (toggleSwitch.checked) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('mode', 'light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark-mode');
    }
}

// Check if mode is saved in localStorage
if (currentMode) {
    document.body.classList.add(currentMode);
    if (currentMode === 'light-mode') {
        toggleSwitch.checked = true;
    }
} else {
    // Default to light mode if nothing is stored
    setMode();
}

// Event listener for the toggle switch
toggleSwitch.addEventListener('change', setMode);


var loader = document.getElementById("preLoader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})






