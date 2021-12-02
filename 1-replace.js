'use strict';

//90

function Replace2 (string, replacable, replacing) {

    if (replacing == '') return string;

    let start = 0;
    let stringUp = string.toUpperCase();
    let replacableUp = replacable.toUpperCase();
    let pos = stringUp.indexOf(replacableUp, start); 

    if (pos == -1) return string;

    let stringResult = '';
    let l = replacable.length;

    while (pos >= 0) {
        stringResult += string.substring(start, pos) + replacing;
        start = pos + l;
        pos = stringUp.indexOf(replacableUp, start); 
    }

    stringResult += string.substr(start);
    return stringResult;
}

//95

const Replace3 = (source, replaceWhat, replaceWith) => {
    let pos = source.indexOf(replaceWhat);
    if (pos == -1) return source; 
    return source.substring(0, pos) + replaceWith + Replace3(source.substring(pos + replaceWhat.length), replaceWhat, replaceWith);
};

//console.log(Replace2('loshara','osh', 'loh'));
console.log(Replace3('Nazar','a', 'i'));