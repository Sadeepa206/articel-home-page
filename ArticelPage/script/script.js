const themeToggle = document.getElementById('themeToggle');
        
// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateButtonText(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
});

function updateButtonText(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}



const button = document.querySelector('.animated-btn');

button.addEventListener('click', function() {
    // Add click animation class
    this.classList.add('clicked');
    
    // Change button text
    this.textContent = 'Clicked!';
    
    // Remove animation class after animation completes
    setTimeout(() => {
        this.classList.remove('clicked');
        this.textContent = 'Click Me!';
    }, 600);
    
    // Add haptic feedback if supported
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
});

// Prevent button from getting stuck in clicked state
button.addEventListener('mouseup', function() {
    setTimeout(() => {
        this.blur();
    }, 500);
});