// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');

// Listen for button click to toggle dark mode
toggleButton.addEventListener('click', () => {
    // Toggle the "dark-mode" class on the body element
    document.body.classList.toggle('dark-mode');
});