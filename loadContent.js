// 페이지 로드가 완료되면 실행
document.addEventListener("DOMContentLoaded", function() {
  const contentPlaceholder = document.getElementById('content-placeholder');

  // index.html에만 존재하는 #content-placeholder에 아스키 아트를 로드합니다.
  if (contentPlaceholder) {
    // 'heavy-file.html' 파일을 불러옵니다.
    fetch('heavy-file.html')
      .then(response => response.text()) // 응답(response)을 텍스트(HTML 코드)로 변환
      .then(html => {
        // id가 'content-placeholder'인 요소를 찾아서
        // 그 안에 불러온 HTML 코드를 삽입
        contentPlaceholder.innerHTML = html;
      })
      .catch(error => {
        // 파일을 불러오는 데 실패하면 콘솔에 에러를 출력
        console.error('파일을 불러오는 중 오류 발생:', error);
      });
  }
});