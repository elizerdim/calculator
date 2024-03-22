# Calculator App

This is a calculator app coded with vanilla JavaScript according to the design from [FrontendMentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- Bonus: Have their initial theme preference checked using prefers-color-scheme and have any additional changes saved in the browser

### Screenshot

![]()

### Links

- [View Code]()
- [Live Preview]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid

### What I learned

- Event propagation and event delegation - capturing and bubbling
- closest() method is useful when event bubbling is used - it traverses the element and then its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.
```js
e.target.closest('button')
```

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Acknowledgments

Thanks to Kevin Powell and Zell Liew for this [tutorial](https://www.youtube.com/watch?v=f0SG2j6d-Kg). I learned closest() method and ...