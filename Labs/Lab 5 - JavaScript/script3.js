// Select the button and content container
const addParagraphBtn = document.getElementById('addParagraphBtn');
const contentDiv = document.getElementById('content');

// Event listener for the button
addParagraphBtn.addEventListener('click', () => {
    // Step 1: Create a new paragraph element
    const newParagraph = document.createElement('p');

    // Step 2: Add text content to the paragraph
    newParagraph.textContent = `This is a new paragraph added at ${new Date().toLocaleTimeString()}.`;

    // Step 3: Optional - Add a CSS class for styling (if needed)
    newParagraph.classList.add('new-paragraph');

    // Step 4: Append the new paragraph to the content div
    contentDiv.appendChild(newParagraph);
});
