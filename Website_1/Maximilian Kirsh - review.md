# Review — AI-Assisted Web Development

## Enter your Spec prompt here: 

"Hey, I need you to help me build a website using html and CSS and JavaScript. I want this website to be a Yu-Gi-OH website. This website will have all sorts of features on it for the Yu-Gi-Oh TCG, Dual Links, and Master Dual communities. I want this website to have an online shop portion. this page of the website will sell all Yu-Gi-Oh cards, binders, sleeves, deck boxes, and Rare single cards like The Blue Eyes White Dragon LOB 1st Edition., etc. I want you to use other online websites as an example and try your best to replicate their functions. This website will also include a digital Life Point (LP) counter. Also, it will have a virtual dice roll and coin flip to see who will go first and second during their duals. I want this website to be VERY functional, easy to use, and appealing to the user. I want this website to have different tabs at the top of the page that take you to different parts of the website. For example, one tab will take you to the online card shop portion, another tab will take you to the LP counter and coin flip, etc.  For the styling, I want the styling to be made in a separate CSS file. I want this website to look sci-fi and neon and very dramatic. I want it to look like a Yu-Gi-Oh dual."

---

## First Impressions (After Version 1)

**Does the page match your spec?** Somewhat, it still needs some improvements.


**What did the AI get right?**  It was very accurate with the different aspects of the game.


**What did the AI get wrong or miss?**  The variety of the game. I wanted to see more products being displayed


**Is the HTML semantic?** (Does it use `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>` — or is it all `<div>` soup?)  Yes


**Is the CSS organized or messy?**  The CSS is very well organized


**Does the JavaScript work? Any issues?**  JavaScript works very well and I experienced no issues.


**Is it responsive?** (Did you resize your browser to check?)  Yes, it autmatically made it responsive 


**Do images have `alt` attributes?**  I think


---

## Code Review

| Category | What to Check | Rating (1-5) | Notes |
|----------|--------------|:---:|-------|
| **Semantic HTML** | Proper use of HTML5 elements, not just divs everywhere | | |
| **CSS Organization** | Logical grouping, consistent naming, no redundant rules | | |
| **Responsive Design** | Works on mobile, tablet, and desktop | | |
| **Accessibility** | Alt text, contrast, keyboard nav, ARIA labels if needed | | |
| **JavaScript Quality** | Clean code, no errors | | |
| **Spec Compliance** | Does it actually match what you asked for? | | |
| **Overall Result** | Does it look professional? Would you show this to a client? | | |

---

## Iteration Log

### Round 1

**Problem:**  Websites calculator and dice functions were a bit wonky


**Prompt I gave:** "I also want you to add some cool animation to the coin flip and the dice roll. If you can, I would like to see an actual 6 die and a coin on the page that flips and rolls when clicked on" 


**Result:**  Gave me an animation when i clicked on the coin and dice.


---

### Round 2

**Problem:**  Dice was Transparent in color and was hard to use


**Prompt I gave:**  "The dice is transparent, which makes it hard to see what number it is. i would like for the dice to be a solid color."


**Result:**  Gave me a solid blue dice and was much easier to read


---

### Round 3

**Problem:**  Only gave me the chunk of code we discused instead of the full page. it made it hard to find where the code went


**Prompt I gave:**  "Yes please build me a deck builder page. also, from now on, instead of just giving me the certain section of code, could you instead give me the full page with the added bit that we agreed upon?"


**Result:**  Gave me the full HTML, CSS, and JavaScript pages with the added bits.

---

## Reflection

**1. How close was the first AI output to what you actually wanted? What percentage of your spec did it nail on the first try?**  It was close but still needed a lot more aspects. About 50% of it came out the way i wanted on the fist try.


**2. What types of things did the AI get right easily? What did it struggle with?**  It got the styling easily and made everything look good. But the javascript needed more clarification to make it exact.


**3. Look at your iteration prompts. Did your prompts get more specific and technical as you went? Give an example of how your prompting improved.**  I became more clear with specific parts of the website that i thought could be improved. With the coin flip, I wanted it to look a bit more 3D rather than looking clonky in the beginning.


**4. What HTML/CSS/JS knowledge did you need to have in order to do this exercise effectively? Could someone with zero web knowledge have done this?**  I believe you would need to understand the basics of HTML and CSS but you would also need to know how to promt AI the way you want, but overall AI does a lot of the more difficult stuff which makes my life a lot easier.


**5. If you were hiring someone to manage AI-assisted web development, what skills would you look for?**  Good AI Promting. I would want someone who is very specific and can clarify on different parts of a website.
