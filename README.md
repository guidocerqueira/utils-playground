## A simple library to practice asynchronous programming

# Usage

```javascript
const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

const getCityFromZipcode('01001000')
        .then(a => console.log(a))
        .catch(a => console.log(a.message));

// São Paulo

const getStateFromZipcode('01001000')
        .then(a => console.log(a))
        .catch(a => console.log(a.message));

// SP
```
