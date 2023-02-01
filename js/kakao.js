const share = document.querySelector(".share");

share.addEventListener("click", function () {
  shareKakao();
});

Kakao.init("5fc07696d6aad52a46d99a4b299272a0");

function shareKakao() {
  Kakao.Share.createScrapButton({
    container: ".share",
    requestUrl: "https://nobodyhavecat.netlify.app",
  });
}
