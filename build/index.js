"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// // Number sorter
// const numbersCollection = new NumbersCollection([10, 3, -5, 50])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data);
// Character sorter
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
