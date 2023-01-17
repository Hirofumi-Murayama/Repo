'use strict'
//1行目に記載している 'use strict' は削除しないでください

/**
* @param {{ [key: string]: number }} obj
* @returns {{ [key: string]: number }} 与えられたオブジェクトと同じ値を持つが、数値には 1 が足されたオブジェクト
*/
function incrementNumbers(obj){
    const result = {};
        for(const key in obj){
        if(typeof obj[key] === "number"){
            result[key] = obj[key] + 1;
        }else{
            result[key] = obj[key];
        }        
    }
    return result;
}

test(incrementNumbers({ a: 1, b: 2, 1: 3, d: "hello" }), {
    a: 2,
    b: 3,
    1: 4,
    d: "hello",
});

test(incrementNumbers({ a: 2, b: 3, 1: 4, d: "hello" }), {
    a: 3,
    b: 4,
    1: 5,
    d: "hello",
});

test(incrementNumbers({ a: 2, b: 3, 1: 4, d: false }), {
    a: 3,
    b: 4,
    1: 5,
    d: false,
});