# Framy - Very simple CSS Framework

__INFO__ WIP - completely rewritte a few days ago - going to update Website / Docu / Demo soon!

__Website__ http://www.framycss.org

__Demo__ http://www.framycss.org/demo

## How to use

### CDN

Just include a specific version like this:
```
// CSS
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aaroniker/framy-css@2.8/dist/css/framy.min.css">

// JS
<script src="https://cdn.jsdelivr.net/gh/aaroniker/framy-css@2.8/dist/js/framy.js"></script>
```

Or just the CSS flexbox grid:
```
// Just the CSS flexbox grid
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aaroniker/framy-css@2.8/dist/css/framy.grid.min.css">
```

https://www.jsdelivr.com/package/gh/aaroniker/framy-css

[![](https://data.jsdelivr.com/v1/package/gh/aaroniker/framy-css/badge)](https://www.jsdelivr.com/package/gh/aaroniker/framy-css)

### Install with npm
```
npm install framy-css
```
Then include CSS and JS files like this:
```
<link rel="stylesheet" href="node_modules/framy-css/dist/css/framy.min.css">

<script src="node_modules/framy-css/dist/js/framy.js"></script>
```

### Install with Bower
```
bower install framy-css
```
Then include CSS and JS files like this:
```
<link rel="stylesheet" href="bower_components/framy-css/dist/css/framy.min.css">

<script src="bower_components/framy-css/dist/js/framy.js"></script>
```

## Development
You'll need:
* [git](https://git-scm.com/)
* [npm](https://www.npmjs.com/get-npm)

First clone this repository using [git](https://git-scm.com/):
```
git clone https://github.com/aaroniker/framy-css.git
```
Now you'll have to install all needed [npm](https://www.npmjs.com/get-npm) dependencies:
```
npm install
```
After that you could use the following commands:
```
// Load & compile all icons to an icon font from ./src/icons/*.svg to ./dist/fonts/*
npm run icons

// Compile all .scss files to ./dist/css/framy.min.css
npm run css

// Compile all grid related .scss files to ./dist/css/framy.grid.min.css
npm run css-grid

// Watch all .scss files and recompile ./dist/css/framy.min.css & ./dist/css/framy.grid.min.css if they changed
npm run watch-css
```

## Resources

* Interface Font https://github.com/rsms/inter
* Ikons http://ikons.piotrkwiatkowski.co.uk
