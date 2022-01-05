# How to start a new HTML/JS project
- Create a project directory to work within.
- Create an `index.html` file and include the following code:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello world</title>
  </head>
  <body>
    <h1>Hello world</h1>
  </body>
  <script src="script.js"></script>
</html>
```

- Create a script.js file and include this basic script:

```js
const h1 = document.querySelector('h1');
h1.innerHTML = "Hi there world!"
```

- Open the `index.html` file in a web browser and voila!
