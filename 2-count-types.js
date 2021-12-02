'use strict';

const source = [1, 2, undefined, 4, 5, 6, null, 8, 9, 10, 11, 12, 13, 14, {}, 16, ()=>{}, 'loh', true];

const countTypesInArray = (array) => {
    const counter = {};
    for (let i = 0; i < array.length; i++) {
        if (!counter[typeof array[i]]) counter[typeof array[i]] = 0;
        counter[typeof array[i]]++;
    }
    return counter;
};

console.log(countTypesInArray(source));
