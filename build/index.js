"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
// Number sorter
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, -200, -5, 50]);
numbersCollection.sort();
console.log(numbersCollection.data);
// // Character sorter
// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data);
// // Linkedlist sorter
// const linkedList = new LinkedList()
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);
// const sorter = new Sorter(linkedList)
// sorter.sort()
// console.log(linkedList.print());
