"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
// // Number sorter
// const numbersCollection = new NumbersCollection([10, -200, -5, 50])
// numbersCollection.sort()
// console.log(numbersCollection.data);
// // Character sorter
// const charactersCollection = new CharactersCollection('XaDyb');
// charactersCollection.sort()
// console.log(charactersCollection.data);
// Linkedlist sorter
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
console.log(linkedList.print());
