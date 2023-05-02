// ES5시절 문법으로 태그요소 표현
// var sentence = '<ul>/n/t<li>/n/t/t<a>add</a>';

// ES6의 문자열 리터럴
let sentence = `
<ul>
    <li>
        <a>aaaa</a>
    </li>
</ul>
`;
// console.log(sentence);

var month = 5;
var day = 5;
var anniversary = '어린이날';

// ES5식 문자 사이에 변수 끼워넣기.
// var message = month + '월 '
//                     + day + '일은 '
//                     + anniversary + '입니다.';

// ES6식 문자 사이에 변수 끼워넣기
let message = `${month}월 ${day}일은 ${anniversary}입니다.`;
// console.log(message);

// 논리 자료형
var flag = false;
console.log(flag);

//객체 자료형
var lulu = {
    name : '룰루',
    age : 4,
    kind : '스코티시 폴드',
};

console.log(lulu);