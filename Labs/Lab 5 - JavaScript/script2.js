// Select the button and content elements
const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('content');

// Event listener for button click
toggleButton.addEventListener('click', () => {
    // Check current display state
    if (content.style.display === 'none') {
        content.style.display = 'block'; // Reveal the content
        toggleButton.textContent = 'Hide Content'; // Update button text
    } else {
        content.style.display = 'none'; // Hide the content
        toggleButton.textContent = 'Show Content'; // Update button text
    }
});
