# Lab 5 - JavaScript

## Part 1: Event Listeners

- Create a new folder to hold the project
- Inside the folder, create the following files:
- index.html – The HTML structure. (in the repo as index1.html)
- script.js – The JavaScript file with event listeners. (in the repo as script1.js)

This is the code for the 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Listeners Lab</title>
  <style>
    #colorBox {
      width: 200px;
      height: 100px;
      background-color: lightgray;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid black;
      font-size: 16px;
      cursor: pointer;
      user-select: none;
    }
  </style>
</head>
<body>
  <h1>Event Listeners Lab</h1>
  <div id="colorBox">Hover or Click Me!</div>

  <script src="script.js"></script>
</body>
</html>
```

- `<div id="colorBox">`: The element that will respond to events.
- Basic styling for visibility and interaction. 
- Yes we are cutting corners by not having a stylesheet, but this is the sort of situation where you use an embedded stylesheet, a one-off small app

### Step 2: Create script.js

This is the event handler code

```javascript

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

```

Testing Instructions
- Open index.html in your web browser.
- Hover over the box: The background color changes to yellow.
- Move the mouse away: The background color resets to light gray.
- Click the box: The text color cycles through red, green, blue, purple, and orange and text updates to display the current color.

Edge Cases:
- Click rapidly to ensure no glitches occur during color cycling.
- Hover and click simultaneously to test event handling priority.

Key Takeaways
- Event listeners handle user interactions like clicks and hovers.
- addEventListener allows multiple events to be attached to the same element.
- Testing should include normal use cases, rapid interactions, and edge cases.

## Part 2: 

Lab Setup

- Create a folder to hold the file.
- Inside the folder, create the following files:
  - index.html – For the webpage structure. (index2.html in the repo)
  - script.js – For JavaScript event handling. (script2.js in the repo)
  
### Step 1: Create index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hide and Reveal Elements Lab</title>
  <style>
    #content {
      padding: 20px;
      background-color: lightblue;
      border: 2px solid navy;
      width: 300px;
      text-align: center;
      margin: 20px auto;
    }

    #toggleButton {
      display: block;
      margin: 10px auto;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1 style="text-align:center;">Hide and Reveal Elements Lab</h1>
  <button id="toggleButton">Hide Content</button>
  <div id="content">
    <p>This content can be hidden or revealed.</p>
  </div>

  <script src="script.js"></script>

</body>
</html>

```

- `<button>`: Used to trigger the hide/reveal functionality.
- `<div id="content">`: Contains the content that will be shown or hidden.
- Inline styles ensure visibility and focus on functionality.

### Step 2: Create script.js

```javascript

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

```

Testing Instructions

- Open index.html in your browser.
- Click the "Hide Content" button:
  - The content box disappears.
  - Button text changes to "Show Content".
- Click the "Show Content" button:
  - The content box reappears.
  - Button text reverts to "Hide Content".

Testing Considerations

Functional Testing:
- Confirm that the content hides and reveals correctly.
- Verify that the button text changes accordingly.

Edge Cases:
- Click the button multiple times rapidly.
- Check initial visibility after page reload.
- Ensure content state resets if the page is refreshed.

Accessibility Checks:
- Test if keyboard users can trigger the button (Tab + Enter/Space).
- Ensure the hidden content is not focusable (can take keyboard input) when hidden.


## Part 3: Modifying a DOM Tree

In this section of the lab, you will use JavaScript to add new elements to an existing DOM tree

- Create a new folder
- Inside the folder, create the following files:
  - index.html – For the web page structure. (index3.html in the repo)
  - script.js – For JavaScript DOM manipulation. (script3.js)
  
**Note**: To get a better sense of what is happening, when you first load the page, open devtools and watch the dom tree as you click the button that adds the elements. You should see new paragraph elements appearing in the DOM tree

### Step 1: Create index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Manipulation Lab</title>
  <style>
    #content {
      margin: 20px auto;
      width: 80%;
      padding: 10px;
      border: 2px solid #333;
      background-color: #f9f9f9;
      font-family: Arial, sans-serif;
    }

    #addParagraphBtn {
      display: block;
      margin: 20px auto;
      padding: 10px 15px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1 style="text-align:center;">Add Paragraph to DOM Lab</h1>
  <button id="addParagraphBtn">Add New Paragraph</button>
  <div id="content">
    <h2>Content Area</h2>
    <p>This is an existing paragraph in the content area.</p>
  </div>

  <script src="script.js"></script>

</body>
</html>
```
- `<button id="addParagraphBtn">`: Triggers adding a new paragraph.
- `<div id="content">`: Container where new paragraphs will be added.

### Step 2: Create script.js

```javascript

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

```

Testing Instructions

- Open index.html in your browser.
- Open devtools so that you are seeing the DOM tree
- Click the "Add New Paragraph" button.
  - A new paragraph appears under the existing content.
  - Each paragraph includes the current time to distinguish additions.
  - Click the button multiple times to see multiple paragraphs added.
- Confirm in the devtools that the new elements are added
- Reload the page and notice that the tree no longer has the new paragraphs because it was rebuilt from the original HTML

Testing Considerations

Functionality:
- Confirm that a new paragraph is added each time the button is clicked.
- Verify that the timestamp in the new paragraph is correct.
 
Edge Cases:
- Click the button rapidly to check for unexpected behavior.
- Verify what happens if the contentDiv element is missing.

