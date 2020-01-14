# javascript-course

## This is most of my WIP javascript tests/projects. CSS Framework = TailwindCSS

### Tutorial to import TailwindCSS to my project =

- Clone the git file
- Open VSCODE with my file
- Open a vscode terminal
- Type `npm init -y` to initialize the package.json that will help execute the script to build TAILWINDCSS everytime you use advanced customization
- In "**scripts**" section in the package.json file, type = `"build:css": "tailwind build src/style.css -o dist/style.css"` (including double quotes)
- Type **npm install tailwindcss** if you want the build script to work (that will install all tailwindcss node modules)
- Type **npx tailwind init** to generate **tailwind.config.js** file
- (This will help center the container) Replace **tailwind.config.js** file content by 

```javascript
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {},
  plugins: []
}
```

### That should be it! If you want to run the build script after some customizations in the tailwind.config.js or @apply customs in src/style.css stylesheet, then type **npm run build:css**
