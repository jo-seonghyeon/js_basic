// fetch()를 이용해서 rest서버에 요청을 넣거나 결과를 받아올 수 있습니다.
async function loadPersonList(){
    // fetch의 첫번째 파라미터는 요청 주소입니다.
    // 요청을 넣은 이후 동작은 then() 안에 함수를 작성해 처리
    const response = await fetch("http://localhost:8080/resttest/person-list") // GET
    // 요청의 괄과로 받은 response 객체의 body에 담긴 json만 추출해줍니다.
    // const jsonData = await response.json();
    // console.log(jsonData);
    const jsonArray = await response.json();
    console.log(jsonArray);
    console.log("----------------");
    for(jsonData of jsonArray) { // 향상된 for문 형식으로 개별 json 분리
        console.log(jsonData.id); // json 내부 자료에 대해 멤버변수처럼 호출
        console.log(jsonData.name);
        console.log(jsonData.age);
    }

    // #personInfo 태그 얻어오기
    const $personInfo = document.getElementById("personInfo");
    // 문자열 변수 생성 후, 각 정보를
    // 번호: XXX, 이름: XXX, 나이: XXX 형식으로 문자로 저장
    // 반복문 활용
    let str = "";
    for(jsonData of jsonArray) { // 향상된 for문 형식으로 개별 json 분리
        str += `<h1>번호: ${jsonData.id}, 이름: ${jsonData.name}, 나이: ${jsonData.age}</h1>`
    }
    // #personInfo에 innerHTML을 이용해 끼워넣기
    $personInfo.innerHTML = str; 

}
// getPersonList 버튼을 얻어와서 변수에 저장해주세요.
let $button = document.getElementById("getPersonList");

// 버튼에 loadPersonList()를 클릭시 수행되도록 처리해줍니다.
                // loadPersonList() 로 대입시, 실행 결과자료를 해당 위치에 대입
$button.addEventListener("click", loadPersonList);

//-------------------------------------------------------------------------------------------------------
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