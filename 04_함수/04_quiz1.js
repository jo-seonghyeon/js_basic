/*
n의 약수의 개수 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고
 약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
*/
function calcDivisor(n){
    var count = 0;
    for(var i = 1; i <= n; i++){
        if(n % i == 0){
            console.log(i);
            count++;
        }
    }
    console.log(`약수의 개수: ${count}`);
}
calcDivisor(10);