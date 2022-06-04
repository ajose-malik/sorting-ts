"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
// // Number sorter
// const numbersCollection = new NumbersCollection([10, 3, -5, 50])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data);
// // Character sorter
// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data);
// Linkedlist sorter
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
console.log(linkedList.print);
