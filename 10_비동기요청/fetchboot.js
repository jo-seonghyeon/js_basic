// fetch()를 이용해서 rest서버에 요청을 넣거나 결과를 받아올 수 있습니다.
async function loadPersonList(){
    // fetch의 첫번째 파라미터는 요청 주소입니다.
    // 요청을 넣은 이후 동작은 then() 안에 함수를 작성해 처리
    const response = await fetch("http://localhost:8080/resttest/person-list") // GET
    // 요청의 괄과로 받은 response 객체의 body에 담긴 json만 추출해줍니다.
    const jsonData = await response.json();
    console.log(jsonData);

}

// http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101

// function loadPersonList(){
//     // fetch의 첫번째 파라미터는 요청 주소입니다.
//     const response = fetch(`http://localhost:8080/resttest/person-list`)
//     console.log("-------응답내역-------");
//     console.dir(response);
//     // fetch의 결과로 받은 response의 body에 들어있던 json을 뽑아낼 수 있습니다.
//     const jsonData = response.json();
//     console.log("-------응답된 json데이터-------");
//     console.log(jsonData);
// }