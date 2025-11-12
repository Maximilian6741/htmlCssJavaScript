# Lesson 01: Introduction to JavaScript

## What is JavaScript?

JavaScript is a programming language that makes web pages interactive and dynamic. While HTML provides structure and CSS provides style, JavaScript provides behavior and interactivity.

### What Can JavaScript Do?
- Respond to user actions (clicks, typing, hovering)
- Change HTML content dynamically
- Modify CSS styles on the fly
- Validate form inputs
- Create animations and effects
- Load data without refreshing the page

### JavaScript Runs in the Browser
Unlike some programming languages that need special software, JavaScript runs directly in your web browser. Every modern browser has a JavaScript engine built in.

---

## Adding JavaScript to Your HTML

There are three ways to include JavaScript in your web pages:

### Method 1: Inline JavaScript
JavaScript can be written directly in HTML attributes. **Not recommended for real projects**, but simple to understand:

```html
<button onclick="alert('Hello!')">Click Me</button>
```

In the example above, the `onclick` is an HTML event attribute, and the `alert` is the JavaScript Function.  Try the code by copying and pasting in VS Code and opening in Live Server.   

### Method 2: Internal JavaScript (Script Tag)
JavaScript can be written inside `<script>` tags in your HTML file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1>Hello World</h1>
    
    <script>
        // JavaScript code goes here
        alert('Welcome to JavaScript!');
    </script>
</body>
</html>
```

**Important Notes:**
- The `<script>` tag is usually placed at the end of the `<body>` tag
- This ensures the HTML loads before JavaScript runs
- Comments in JavaScript use `//` for single lines

### Method 3: External JavaScript File (Best Practice)
JavaScript can be written in a separate `.js` file and linked to your HTML:

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <script src="script.js"></script>
</body>
</html>
```

**script.js:**
```javascript
alert('Hello from external file!');
```

**Why external files are best:**
- Keeps code organized and separated
- Can reuse the same JavaScript on multiple pages
- Easier to maintain and update
- Browser can cache the file for faster loading

---

## Your First JavaScript Program

Let's create a complete example that demonstrates basic JavaScript output:

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Test</title>
</head>
<body>
    <h1>My First JavaScript</h1>
    
    <script>
        // This is a comment - JavaScript ignores this line
        
        // Show a message box (alert)
        alert('Hello, World!');
        
        // Write to the browser console (press F12 to see it)
        console.log('This appears in the console');
        
        // Write directly to the page
        document.write('JavaScript is working!');
    </script>
</body>
</html>
```

### Three Ways to Output Information

1. **`alert()`** - Shows a popup message box
   - Good for testing and getting user attention
   - Blocks the page until user clicks OK
   - Not used much in real websites

2. **`console.log()`** - Writes to the browser console
   - **Most important for learning and debugging!**
   - Open Developer Tools (F12) to see the Console tab
   - Doesn't interrupt the user experience

3. **`document.write()`** - Writes directly to the HTML page
   - Only useful for simple testing
   - Can cause problems if used after page loads
   - Better methods exist (we'll learn them soon)

---

## The Browser Console: Your Best Friend

The console is where you'll spend a lot of time as you learn JavaScript.

### How to Open the Console:
- **Windows/Linux:** Press `F12` or `Ctrl + Shift + I`
- **Mac:** Press `Cmd + Option + I`
- Then click on the **"Console"** tab

### What You Can Do in the Console:
- See messages from `console.log()`
- See error messages when something goes wrong
- Type JavaScript code directly and test it immediately
- Debug your programs

### Try It:
1. Open any webpage
2. Open the console (F12)
3. Type: `console.log("Hello from console!")`
4. Press Enter
5. You'll see your message appear!

---

## Comments in JavaScript

Comments are notes in your code that JavaScript ignores. They're for humans to read.

```javascript
// This is a single-line comment

/*
This is a 
multi-line comment
It can span multiple lines
*/

// Use comments to explain what your code does
let age = 25;  // Store the user's age
```

**When to use comments:**
- Explain complex or confusing code
- Leave notes for yourself or other developers
- Temporarily disable code while testing
- Document what functions do

---

## Summary

In this lesson, you learned:
- ✅ JavaScript makes web pages interactive
- ✅ Three ways to add JavaScript to HTML (inline, internal, external)
- ✅ How to use `alert()`, `console.log()`, and `document.write()`
- ✅ How to open and use the browser console (F12)
- ✅ How to write comments in JavaScript

### Next Lesson Preview:
In the next lesson, we'll learn about **variables** - how to store and work with information in JavaScript.

---

## Key Terms
- **JavaScript**: Programming language that adds interactivity to web pages
- **Console**: A tool in the browser for viewing messages and errors
- **Comment**: Text in code that JavaScript ignores, used for notes
- **alert()**: Function that shows a popup message
- **console.log()**: Function that writes to the console