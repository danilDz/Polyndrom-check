"use strict";

polyndrom("anbnbna");

function polyndrom(str){
    let s = 0;
    for (let i = str.length-1; i >= 0; i--) {
        if (str[i] === str[str.length-1-i]) {
            s++;
        }
    }
    if (s == str.length) {
        console.log('Polyndrom');
    } else {
        console.log('Not a polyndrom');
    }
}