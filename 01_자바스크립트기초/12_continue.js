var total = 0;

// 1~100까지 3의 배수만 더한 총합을 continue를 활용해 작성하세요.
for(var i = 0; i <= 100; i++){
    if(i % 3 !== 0){
        continue;
    }
    total += i;
}
console.log(total);