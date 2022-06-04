import {Sorter} from './Sorter'
import {NumbersCollection} from './NumbersCollection'
import {CharactersCollection} from './CharactersCollection'

// // Number sorter
// const numbersCollection = new NumbersCollection([10, 3, -5, 50])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data);

// Character sorter
const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection)
sorter.sort()
console.log(charactersCollection.data);
