
// Select the element by its ID
const colorBox = document.getElementById('colorBox');

// Array of colors to cycle through
const colors = ['red', 'green', 'blue', 'purple', 'orange'];
let clickCount = 0;

// Event listener for 'click' event
colorBox.addEventListener('click', () => {
    clickCount++;
    const color = colors[clickCount % colors.length]; // Cycle through colors
    colorBox.style.color = color;
    colorBox.textContent = `Clicked! Color: ${color}`;
});

// Event listener for 'mouseover' event
colorBox.addEventListener('mouseover', () => {
    colorBox.style.backgroundColor = 'yellow';
});

// Event listener for 'mouseout' event to reset background color
colorBox.addEventListener('mouseout', () => {
    colorBox.style.backgroundColor = 'lightgray';
});