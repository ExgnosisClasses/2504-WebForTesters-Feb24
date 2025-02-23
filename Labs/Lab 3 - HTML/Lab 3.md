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
