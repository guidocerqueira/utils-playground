## A simple library to practice asynchronous programming

# Usage

```javascript
const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground")

getCityFromZipcode("01001000")
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// São Paulo

getStateFromZipcode("01001000")
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// SP

getPackageDescriptionNpm("express")
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// Return express package description

listarPokemons(2)
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// Return list of Pokemons
// argument page is optional

detalharPokemon(1)
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// returns the information of the bulbasaur pokemon

detalharPokemon("bulbasaur")
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// returns the information of the bulbasaur pokemon
```
