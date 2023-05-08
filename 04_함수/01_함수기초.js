// 함수 정의하기(실행과는 별개임)
function makeFood(sause) {
    console.log(`면을 삶습니다.`);
    console.log(`${sause}소스를 넣고 면수와 볶습니다.`);
    console.log(`${sause} 스파게티 완성!`);
}

// 함수 호출
makeFood(`미트소스`);

function calcCircle(r) {
    return 3.14 * r * r;
    console.log(`원의 넓이: ${3.14 * r * r}`);
}

console.log(calcCircle(3));
