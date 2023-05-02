var a = 5;
var b = '5';

console.log(a === b);
console.log(a !== b);
console.log("====================");

// == 비교는 결과 예측대로 흘러가지 않는 경우가 많음.
// console.log('0' == '');
// console.log(0 == '');
// console.log('0' == 0);
// console.log(false == 'false');
// console.log(false == '0');

console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');

// 문자열 대소비교
console.log("-------------------");
console.log('tomato' <= 'tomaTo');