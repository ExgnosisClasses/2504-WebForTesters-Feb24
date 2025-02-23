# Lab 2 - Browser Internals

## Part One: Introduction to Chrome DevTools for Testers

We will be using the devtools that are part of the browser for this class to inspect what is happening in the browser

You can use either the Chrome Devtools or the FireFox Devtools, although the documentation for the lab will focus on the Chrome version because that is the mroe common browser.

---

[Chrome devtools documentation](https://developer.chrome.com/docs/devtools/overview/) 

[Guide To Chrome Developer Tools](https://www.lambdatest.com/blog/chrome-developer-tools/)

---

[Firefox DevTools User Docs](https://firefox-source-docs.mozilla.org/devtools-user/)

[Devtools in Mozilla Firefox Browser](https://www.geeksforgeeks.org/devtools-in-mozilla-firefox-browser/)

---

### Setup

Go to webpage in Chrome. It doesn't really matter what webpage you use for this lab. However, some pages are very complex and too difficult to work with easily

One recommended page is [Wikipedia](wikipedia.org)

A simpler site set up by the instructor for demonstrating automated testing tools is [Cashflow](https://exgnosis.org/cashflow/) This is the one that will be used for the walkthrough

## Step 1: Opening Chrome DevTools

1. Open Google Chrome.
2. Navigate to the webpage you are using.
3. Open DevTools using one of these methods:
   - Right-click on the page → Click Inspect.
   - Press F12 or Ctrl + Shift + I 
   - Click the three-dot menu in _Chrome → More Tools → Developer Tools._

**Checkpoint:** You should see a panel with multiple tabs like Elements, Console, Network, and Sources.

### Step 2: Inspecting and Modifying the DOM (Elements Tab)

1. Go to the Elements tab.
2. Hover over elements in the HTML structure; notice the corresponding elements highlighted on the page.
3. Right-click a <p> tag and select Edit as HTML. Change the text and observe the live changes.
4. Select an element, go to the Styles pane, and modify its CSS (e.g., change color: red to color: blue).

Suggested edits:
- Change the content of the `<h1>` text to "Testing with DevTools".
- Modify a paragraph’s text color and background.

**Checkpoint**: Page updates should reflect your changes immediately.

### Step 3: Executing Commands with the Console Tab

1. Click the Console tab.
2. Type `document.title` and press Enter to view the page title.
    - You may have to run the command `allow pasting` before you can paste code into the console
3. Run `document.body.style.backgroundColor = "lightyellow"` to change the background.
4. Identify any red error messages in the console and note them.
5. Run the command `document.body.style.backgroundllama = "lightyellow"`
6. Notice that if the command is incorrect, it is just ignored.
7. To see an error, just enter a random string of characters and hit return

**Checkpoint**: Background color should change, and console outputs should reflect your commands.

### Step 4: Analyzing Network Activity (Network Tab)

1. Open the Network tab.
2. Reload the page (F5) with the Network tab open.
3. Observe the list of network requests (HTML, CSS, JS, images).
4. Click on a resource to see headers, response data, and timing details.
5. Try this for other websites like `google.com` and `wikipedia.org`

Things to look for
- Identify how long the page took to fully load.
- Find the size of the largest resource loaded.
- Filter requests by type (CSS, JS, images).

**Checkpoint**: Understand which resources affect page load times.

### Step 5: Testing Responsiveness (Device Toolbar)

1. Click the Toggle Device Toolbar icon or press Ctrl + Shift + M.
2. Select different devices (iPhone, Pixel, iPad) from the dropdown.
3. Change the screen resolution and orientation.

Things to look for
- Check how the page looks on a mobile device vs. desktop.
- Identify if any elements overlap or break.

**Checkpoint**: Page layout should adjust to different screen sizes.

[Simulate mobile devices with device mode](https://developer.chrome.com/docs/devtools/device-mode?utm_source=devtools)

### Step 6: Auditing Performance and Accessibility (Lighthouse Tab)

1. Click the Lighthouse tab (or use Chrome DevTools → Lighthouse).
2. Select Performance and Accessibility checks.
3. Click Generate Report.
4. Review recommendations and areas for improvement.

Things to look for
- Note the performance score and list factors affecting it.
- Identify accessibility issues and suggested fixes.

**Checkpoint**: Obtain actionable insights for enhancing page performance and accessibility.


## Step 7: Simulating Network and CPU Throttling

1. In the Network tab, use the Throttling dropdown to select Slow 3G.
2. Reload the page and note loading times.
3. In the Performance tab, record page load under throttled conditions.

**Checkpoint**: Understand how slower networks affect browser performance

---

## Part 2: Webpack

1. Open the [Test Page](https://roddavison.ca). 
2. There is only one element on the page.
3. Right mouse click anywhere on the page and select `View Page Source`
4. Notice that there is no `<h1>` element in the page source
5. Notice that there is a script tag in the `<body>` tag
6. This is the webpack bundle that will create the DOM tree directly
7. Open up the elements tab in dev tools
8. Notice that there is an `<h1>` element in the dom tree.

## Part 3: Shadow Dom

### Step 1: Setting Up the HTML Structure

Note that all the code is already provided for you in the lab repository Lab 2 directory

1. Create a working directory and open the directory in VSCode.
2. Create a html file named index.html
3. Add the code shown below (also in the lab directory in the lab rep)
4. In this setup, there is a `<div>` component with the ID `shadow-host` that will serve as the host for the Shadow DOM.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shadow DOM Lab</title>
  <style>
    /* Global styles */
    p {
      color: blue;
    }
  </style>
</head>
<body>
  <h1>Shadow DOM Demonstration</h1>
  <div id="shadow-host"></div>
  <p>This paragraph is in the light DOM.</p>

  <script src="shadow-dom-lab.js"></script>
</body>
</html>
```

## Step 2: Creating the Shadow DOM

1. Create a new JavaScript file named `shadow-dom-lab.js`.
2. Add the following JavaScript code

```javascript
// Select the shadow host element
const shadowHost = document.querySelector('#shadow-host');

// Attach a shadow root to the host
const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

// Add content to the shadow root
shadowRoot.innerHTML = `
  <style>
    p {
      color: red;
    }
  </style>
  <p>This paragraph is in the Shadow DOM.</p>
`;

```

## Step 3: Observing Encapsulation

1. Open shadow-dom-lab.html in your web browser. 
2. Use the browser's developer tools to inspect the elements.
3. Notice that the paragraph inside the Shadow DOM has red text, as defined by its local styles.
4. The paragraph in the light DOM remains blue, unaffected by the Shadow DOM styles.

This demonstrates that styles within the Shadow DOM are encapsulated and do not leak out to the light DOM, and vice versa.

