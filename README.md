# easy-script-loader
> Easily Load a Script.  Returns a Promise.

# load via script tag
```bash
<script src="https://unpkg.com/easy-script-loader"></script>
```

# install via npm
```bash
npm install easy-script-loader
```

# usage
```javascript
const loadScript = require("easy-script-loader");
```
or
```javascript
import loadScript from 'easy-script-loader';
```
or
```html
<head>
    <script src="https://unpkg.com/easy-script-loader"></script>
</head>
<body>
    <script>
        loadScript("https://unpkg.com/georaster").then(() => {
            console.log("loaded georaster!");
        });
    </script>
</body>
```

# debugging
You can pass in an options object with `debug` set to true for additional logging.
```html
<head>
    <script src="https://unpkg.com/easy-script-loader"></script>
</head>
<body>
    <script>
        loadScript("https://unpkg.com/georaster", { debug: true });
    </script>
</body>
```
will output
```
[easy-script-loader] starting to load  https://unpkg.com/georaster
[easy-script-loader] successfully loaded  https://unpkg.com/georaster
```
