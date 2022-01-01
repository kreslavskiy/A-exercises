'use strict';

const clone = (obj) => Object.assign({}, obj);

const pidor = {
    1: 23,
    2: 49,
    3: {
        loh: 6,
    }
}

console.log(clone(pidor));