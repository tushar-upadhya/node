// const superHeroes = require("superheroes");

// const random = superHeroes.random();
// console.log("random:", random);

const { log } = require("console");
let fs = require("fs");

fs.rename("index.txt", "newIndex.txt", (err) => {
  log("file renamed");
});
