'use strict'; 

class Collection {
    constructor (n, callback) {
        this.map = new Map(null);
        this.n = n; 
        this.callback = callback;
        this.keys = [];
    }

    add (key, value) {
        if (this.keys.length >= this.n) {
            this.callback(); 
            return;
        }
        this.map[key] = value;
        this.keys.push(key);
        return this; 
    } 
}
const fn = () => console.log("It's an end!");

const myCollection = new Collection( 3, fn );
myCollection.add(1, 'Van'); 
myCollection.add(2, 'Billy'); 
myCollection.add(3, 'Mark Wolf'); 
myCollection.add(4, 'Misha'); 
myCollection.add(5, 'Dungeon'); 
console.dir(myCollection);
console.log('\n');

const myCollectionGay = new Collection( 3, fn );
myCollectionGay.add(1, 'хуй'); 
myCollectionGay.add(2, 'сперма'); 
myCollectionGay.add(3, 'анал'); 
myCollectionGay.add(4, 'говно'); 
myCollectionGay.add(5, 'гомосексуализм'); 
console.dir(myCollectionGay);