# Lesson 01 Tasks: Getting Started with JavaScript

---

## Task 1: GUIDED EXAMPLE - Your First JavaScript Page

**Follow these steps exactly to create your first JavaScript program.**

### Step 1: Create Your HTML File
1. Open VS Code
2. Create a new file called `hello.html`
3. Copy and paste this code:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1>Hello JavaScript!</h1>
    <p>Open the console (F12) to see messages.</p>
    
    <script>
        // Display an alert
        alert('Welcome to JavaScript!');
        
        // Log messages to the console
        console.log('Hello from the console!');
        console.log('JavaScript is running!');
        
        // Write to the page
        document.write('<p>This text was added by JavaScript.</p>');
    </script>
</body>
</html>
```

### Step 2: Open Your File
1. Right-click on `hello.html` in VS Code
2. Choose "Open with Live Server" (or just open it in your browser)

### Step 3: Test It
1. You should see an alert box - click OK
2. Press F12 to open the console or right-click and select `inspect`
3. Look for your console messages
4. See the text that JavaScript added to the page

**Checkpoint:** You should see an alert, console messages, and text added to your page.

---

## Task 2: Console Practice

**Goal:** Practice using `console.log()` to display different messages.

### Instructions:
1. Create a new file called `console-practice.html`
2. Set up a basic HTML structure with a `<script>` tag
3. Inside the script tag, use `console.log()` to display:
   - Your name
   - Your favorite color
   - Your age
   - A fun fact about yourself

### Expected Output in Console:
```
John Smith
Blue
25
I love pizza!
```

**💡 Hint:** Each `console.log()` creates a new line in the console.

---

## Task 3: Multi-Method Output

**Goal:** Use all three output methods (alert, console.log, document.write).

### Instructions:
1. Create a file called `three-outputs.html`
2. Create a page about your favorite hobby
3. Use JavaScript to:
   - Show an **alert** with a greeting message
   - **Log to console**: "Learning JavaScript is fun!"
   - **Write to the page**: A heading that says "My Favorite Hobby"
   - **Write to the page**: A paragraph describing your hobby

### Success Criteria:
- ✅ Alert appears when page loads
- ✅ Console shows at least one message
- ✅ Page displays a heading and paragraph created by JavaScript

---

## Task 4: Comments Challenge

**Goal:** Practice writing clear comments in your code.

### Instructions:
1. Create a file called `comments.html`
2. Copy this code and add comments to explain what each line does:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Comments Practice</title>
</head>
<body>
    <h1>My Page</h1>
    
    <script>
        console.log('Starting the program...');
        
        alert('Welcome!');
        
        document.write('<p>JavaScript is awesome!</p>');
        
        console.log('Program finished!');
    </script>
</body>
</html>
```

### Requirements:
- Add a comment above EACH line of JavaScript code
- Each comment should explain what that line does
- Use proper single-line comment syntax (`//`)

**Example of what a comment should look like:**
```javascript
// Display a message in the console
console.log('Hello!');
```

---

## Task 5: External JavaScript File

**Goal:** Practice using external JavaScript files (best practice).

### Instructions:
1. Create two files:
   - `external.html`
   - `script.js`
   </br>
   </br>
2. In `external.html`:
   - Create a basic HTML structure
   - Link to `script.js` using a `<script src="">` tag
   - Add a heading that says "External JavaScript" </br>

   **💡 Hint:** If you don't recall what the script should look like, review the lesson material again. 
   </br>
   </br>
3. In `script.js`:
   - Add a comment at the top with your name
   - Use `console.log()` to display "External file loaded!"
   - Use `document.write()` to add a paragraph about what you learned today

### Success Criteria:
- ✅ HTML file is separate from JavaScript file
- ✅ JavaScript file is linked correctly
- ✅ Console shows the message
- ✅ Page displays the paragraph

**💡 Troubleshooting:** If your JavaScript doesn't run, check:
- Is the file path correct in the `src` attribute?
- Is the `<script>` tag at the end of the `<body>`?
- Are both files in the same folder?

---

## Task 6: Debug the Code

**Goal:** Practice finding and fixing errors.

### Instructions:
1. Create a file called `debug.html`
2. Copy this code (it has errors!):

```html
<!DOCTYPE html>
<html>
<head>
    <title>Debug Challenge</title>
</head>
<body>
    <h1>Find the Errors</h1>
    
    <script>
        // Alert message
        alert('Welcome!)
        
        // Console message
        console.log("Hello World');
        
        // Write to page
        document.write('<p>Fixed the code!</p>')
    </script>
</body>
</html>
```

3. Open the file in your browser
4. Open the console (F12) to see error messages
5. Fix all the errors until the code works properly

### Errors to Find:
- There are 3 errors in this code
- Look for mismatched quotes
- Look for missing semicolons
- Read the console error messages carefully

**Success:** When fixed, you should see the alert, console message, and page text with no errors in the console.

---

## Challenge Task: Personal Introduction Page

**Goal:** Combine everything you've learned into one project.

### Instructions:
Create a complete introduction page with:
1. A file called `about-me.html`
2. An external JavaScript file called `about-me.js`
3. The page should:
   - Show an alert welcoming visitors
   - Use JavaScript to write your name as a heading
   - Use JavaScript to write 3 paragraphs about yourself
   - Log at least 3 messages to the console
   - Include comments explaining your code

### Bonus Challenges (Optional):
- Use multi-line comments to create a header block at the top of your JS file
- Add the current date to the page using `document.write()`
- Log more detailed information to the console (like "Page loaded at [time]")

### Grading Yourself:
- Alert works on page load
- External JS file is properly linked
- Content appears on the page
- Console shows messages
- Code has clear comments
- No errors in the console


### Submitting Your Work:
- Create a new Repo in GitHub called SEWD1JavaScript
- Ensure all of your files you've made for this task are in the same folder and push them all to the GitHub Repo you made
- Submit a link to the public Repo in Google Classroom

---

## Tips for Success
1. **Test frequently** - Open the page after each change
2. **Use the console** - It shows errors and helps you debug
3. **Read error messages** - They tell you what's wrong and where
4. **Comment your code** - Explain what you're doing
5. **Save often** - Don't lose your work!

## Need Help?
- Check your syntax (quotes, parentheses, semicolons)
- Make sure file paths are correct
- Look at the guided example again
- Read the error messages in the console