# easy-script-loader
Easily Load a Script.  Returns a Promise.

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

