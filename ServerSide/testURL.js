// testURL.js
const url = require('url')
const adr = 'http://123.4.5.6:8080/hello.html?fruit=apple&beverage=coffee';
const q = url.parse(adr, true);

console.log(q.host); // 123.4.5.6:8080
console.log(q.pathname); // hello.html
console.log(q.search); // ?fruit=apple&beverage=coffee

const qdata = q.query;
console.log(qdata); // [Object: null prototype] { fruit: 'apple',  beverage: 'coffee' }
console.log(qdata.beverage); //coffee
console.log(qdata.pet); // undefined