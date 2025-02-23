# Lab 3 - HTML

## Part 1: Using XML Validators

### Step 1 Create a Sample XML File

Create a file named sample.xml and add the following code:

```xml 
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book category="fiction">
    <title lang="en">The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price>10.99</price>
  <!-- Missing closing tag for book -->
  <book category="programming">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>
</bookstore>
```

- There is an intention error in the code, closing tag for the first `<book>` element is missing.
- The code is also available in the file `sample.xml` in the lab repo.

### Step 2: Use an XML Validator

- Open the [W3C XML Validator](https://www.w3schools.com/xml/xml_validator.asp)
- Copy and paste the above XML code into the input box.
- Click Check.

Expected Output:
- Error indicating a missing closing tag.
- Line number pointing to where the error occurs.

### Step 3: Correct the error and revalidate it

Add the missing tag and revalidate. 


## Step 4: Create Files for Validating an XML Document Against an XML Schema (XSD)

The previous example was syntactic validation. In this example, you will validate an XML document against a schema

Create the schema file (also in the repo) `bookstore.xsd`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

  <xs:element name="bookstore">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="book" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="title">
                <xs:complexType>
                  <xs:simpleContent>
                    <xs:extension base="xs:string">
                      <xs:attribute name="lang" type="xs:string" use="required"/>
                    </xs:extension>
                  </xs:simpleContent>
                </xs:complexType>
              </xs:element>
              <xs:element name="author" type="xs:string"/>
              <xs:element name="year" type="xs:gYear"/>
              <xs:element name="price" type="xs:decimal"/>
            </xs:sequence>
            <xs:attribute name="category" type="xs:string" use="required"/>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>

</xs:schema>
```

The semantic rules the schema defines include:
- Defines the bookstore element containing multiple book elements.
- Each book must have attributes (category) and child elements (title, author, year, price).
- The title element has a required lang attribute.


Create a file named bookstore.xml with the following content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:noNamespaceSchemaLocation="bookstore.xsd">
  <book category="fiction">
    <title lang="en">The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price>10.99</price>
  </book>
  <book category="programming">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>
</bookstore>

```

### Step 4: Use an Online Validator

- Go to [XMLValidation.com]()
- Cut and paste the bookstore.xml document
- Click Validate.
- Because the XML references a schemas (DTD), you will be prompted for the schema
- Copy the contest of bookstore.xsd into the text field
- Click validate
- There should be no errors

### Step 5: Create and Error

Modify the bookstore.xml file to remove the author tag.

```xml

<?xml version="1.0" encoding="UTF-8"?>
<bookstore xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:noNamespaceSchemaLocation="bookstore.xsd">
  <book category="fiction">
    <title lang="en">The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price>10.99</price>
  </book>
  <book category="programming">
    <title lang="en">Learning XML</title>
<!--    <author>Erik T. Ray</author> -->
    <year>2003</year>
    <price>39.95</price>
  </book>
</bookstore>
```

Redo the validation and see the error. Notice that if you just validate the file without a DTD, it is syntactically correct, but the schema says a book element must have a child author element

## Part 2: HTML Validation

### Step 1: Create a Sample HTML File

Create a file named sample.html and add the following code (also in the repo)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test Page</title>
</head>
<body>
  <h1>Welcome to the Test Page<h1>
  <p>This is a paragraph.</p>
  <img src="image.jpg" alt>
  <a href="#">Click me</a>
</body>
</html>
```
Intentional Errors:
- Improperly closed `<h1>` tag.
- `<img>` tag missing the alt attribute value.

## Step 2: Use an HTML Validator

- Open the [W3C HTML Validator](https://validator.w3.org/).
- Select the Validate by Direct Input tab.
- Paste the above HTML code and click Check.

Expected Output:
- Error for improperly closed <h1> tag.
- Warning for empty alt attribute in the <img> tag.

🛠️ Step 3: Fix the Errors

Corrected code:

```html
<h1>Welcome to the Test Page</h1>
<img src="image.jpg" alt="Descriptive image">
```

Revalidate and confirm no errors are present.

## Step 3: Validating a URI

- Select the tab  "verify uri" tab and enter a URI. 
- Try several different ones.

Try with "https://exgnosis.org/cashflow/index.html"
- Notice that an error for no closing tag is raised.
- This is because the DOCTYPE tag specifies that the HTML version being used in XHTML
- Look at the source of the URI to see this

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
</html>
```

### Testing Considerations

Why Validate?
- Prevents browser rendering issues.
- Enhances accessibility and user experience.
- Ensures cross-browser compatibility.

What to Test:
- Proper nesting of elements.
- Correct attribute usage.
- Compliance with standards (HTML5 or XML schemas).

Takeaways
- Validation tools help detect syntax errors in XML and HTML.
- Properly structured code improves compatibility, accessibility, and performance.
- Regular validation is crucial during the development and testing phases.

---

## Part 2: Basic Web Page

    Create a new folder named html-lab.
    Inside the folder, create a file named index.html.
    Use a text editor to write and save the HTML code.

### Step 1: Create the Basic HTML Skeleton

- Create a new folder to hold your work
- In the folder, create a file called index.html and add the following code (saved as index1.html in the lab folder)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome to My Web Page</h1>
  <p>This is a paragraph describing the purpose of the page.</p>
</body>
</html>

```
- `<!DOCTYPE html>`: Declares the document type - HTML 5
- `<html>`: Root element containing the page content.
- `<head>`: Contains metadata and the page title.
- `<body>`: Holds all visible content.

- Save the file and open it in your browser.
- Verify the heading and paragraph appear correctly.

### Step 2: Insert Images and Links

Enhance your page by adding an image and a link in the body. This is done in the file index2.html

```html
<img src="hhttps://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Placeholder Image">
<p>Visit <a href="https://www.example.com" target="_blank">Example.com</a> for more information.</p>
```

-  `<img>`: Displays an image. The alt attribute provides alternative text.
- `<a>`: Creates a hyperlink. The target="_blank" opens the link in a new tab.

-  Refresh your browser to see the image and clickable link.
-  Test the link to ensure it opens in a new tab.

### Step 3: Create Ordered and Unordered Lists

Add the following code into the body of your page. This is done in the file index3.html

```html
<h2>My Hobbies</h2>
<ul>
  <li>Reading</li>
  <li>Coding</li>
  <li>Running</li>
</ul>

<h2>Steps to Make Tea</h2>
<ol>
  <li>Boil water.</li>
  <li>Add tea leaves.</li>
  <li>Pour into a cup.</li>
</ol>
```

- `<ul>`: Unordered list with bullet points.
- `<ol>`: Ordered list with numbered items.

Check that both lists display correctly in the browser.

### Step 4: Add a Table

Add the following code to your file. This is also done as index4.html in the repository

```html
<h2>Weekly Schedule</h2>
<table >
  <tr>
    <th>Day</th>
    <th>Activity</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Gym</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>Work</td>
  </tr>
</table>
```

- `<table>`: Creates a table.
- `<tr>`: Table row, `<th>`: Header cell, `<td>`: Data cell.

Verify that the table appears with borders and correct alignment.

## Step 5: Add a User Input Form

Add the following to the body of your web page. This is also done as index5.html in the repository

```html
<h2>Contact Form</h2>
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required><br><br>

<label for="email">Email:</label>
<input type="email" id="email" name="email" required><br><br>

<label for="message">Message:</label><br>
<textarea id="message" name="message" rows="4" cols="30"></textarea><br><br>

<button type="submit">Submit</button>
</form>
```

- `<form>`: Collects user input.
- `<label>`: Provides labels for form fields.
- `<input>` and `<textarea>`: Allow data entry.

- Fill out and submit the form.
- Note that we aren't actually submitting it anywhere
- Observe how required fields behave when left empty.

## Step 6: Inspect and Test Elements

- Right-click on your web page and select "Inspect" to open DevTools.
- Use the Elements tab to view the HTML structure.
- Experiment by editing text and attributes directly in DevTools.
- Use the Network tab to monitor form submission behavior.

## Loading Resources

### Step 1: Use Google Fonts

- Visit [Google Fonts](https://fonts.google.com/).
- Search for and select the "Roboto" font. 
- Click "Get Embed Code" and copy the provided `<link>` tag.

Example code

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

### Step 2: Add the Font to the <head> Tag

In your index.html file, add the link inside the <head> section: The head section should look like this

```html
<head>
  <meta charset="UTF-8">
  <title>My Enhanced Web Page</title>
 <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
    }
  </style>
</head>
```
This is also in file index6.html in the repository

✅ Task:

- Save and refresh your browser.
- Notice the change in the text’s font style.

Bonus
- Disable the internet connection and reload the page. Check if the fallback font (sans-serif) is applied correctly.

### Step 3: Create a JavaScript File

- In your project folder, create a new file named script.js.
- Add the following code:

```javascript
window.onload = function() {
alert("Welcome to My Enhanced Web Page!");
};
```
In index.html, add this line inside the <head> section: This is in index7.html
```html
<script src="script.js" defer></script>
```

- src="script.js": Links to your JavaScript file.
- defer: Ensures the script runs after the HTML is fully loaded, preventing rendering delays.

- Save and refresh your browser.
- Verify that an alert box appears with the welcome message.

To Try
- Remove the defer attribute and observe the difference (the script may block rendering if placed in the head without defer).



