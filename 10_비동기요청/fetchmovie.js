// // fetch()를 이용해서 rest서버에 요청을 넣거나 결과를 받아올 수 있습니다.
// async function loadMovieList(){
//     // fetch의 첫 번째 파라미터는 요청 주소입니다.
//     const response = await fetch("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"); //GET
//     // 요청의 결과로 받은 response객체의 body에 담긴 json만 추출해줍니다.
//     const jsonData = await response.json();
//     console.log(jsonData);
// }

function loadMovieList(){
    fetch("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101")
    .then((response) => response.json()) // (response)는 이전 fetch(주소) 리턴자료
    .then((result) => console.log(result)); // (result)는 response.json()으로 얻어진 json자료
}