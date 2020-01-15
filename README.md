# javascript-course

## This is most of my WIP javascript tests/projects. CSS Framework = TailwindCSS

```diff
- You can use this project to group your courses, tests, projects into one only responsive website using tailwindCSS framework. There is 3 courses by default (Table, Carousel, Noughts and Crosses).
```

### Tutorial to import TailwindCSS to my project =

- Clone the git file
- Open VSCODE with my file
- Open a vscode terminal
- Type `npm init -y` to initialize the package.json that will help execute the script to build TAILWINDCSS everytime you use advanced customization
- In "**scripts**" section in the **package.json** file, type = `"build:css": "tailwind build src/style.css -o dist/style.css"` (including double quotes)
- Type `npm install tailwindcss` if you want the build script to work (that will install all tailwindcss node modules)
- Type `npx tailwind init` to generate **tailwind.config.js** file
- (This will help center the container) Replace **tailwind.config.js** file content by

```javascript
module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem"
    }
  },
  variants: {},
  plugins: []
};
```

- Type `npm run build:css` to update changes

### That should be it! Don't forget to type

`npm run build:css`

### after some customizations in the **tailwind.config.js** or **@apply customs** in **src/style.css** stylesheet.
