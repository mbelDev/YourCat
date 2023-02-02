const share = document.querySelector(".share");
// const shareResult = document.querySelector(".btnResult");

share.addEventListener("click", function () {
  // Kakao.Link.sendDefault({
  //   objectType: "feed",
  //   content: {
  //     title: "당신의 고양이 이것이다.",
  //     description: `${item.desc}`,
  //     imageUrl: `"${item.image}"`,
  //     // imageWidth: 600,
  //     // imageHeight: 600,
  //     link: {
  //       mobileWebUrl: "https://nobodyhavecat.netlify.app",
  //       webUrl: "https://nobodyhavecat.netlify.app",
  //     },
  //   },
  //   buttons: [
  //     {
  //       title: "나도 테스트 해보기", // 버튼 이름
  //       link: {
  //         mobileWebUrl: "https://nobodyhavecat.netlify.app",
  //         webUrl: "https://nobodyhavecat.netlify.app",
  //       },
  //     },
  //   ],
  // });
  const targetTitle = document.querySelector(".result .title").textContent;
  const targetImg = document.querySelector(".result .inner .cat").src;
  const targetDesc = document.querySelector(".result .inner .desc").textContent;
  console.log(targetImg);
  Kakao.Share.sendDefault({
    // container: "#share",
    objectType: "feed",
    content: {
      title: targetTitle,
      description: targetDesc,
      imageUrl: targetImg,
      imageWidth: 600,
      imageHeight: 600,
      link: {
        mobileWebUrl: "https://nobodyhavecat.netlify.app",
        webUrl: "https://nobodyhavecat.netlify.app",
      },
    },
    itemContent: {
      profileText: "당신의 고양이 이것이다.",
      profileImageUrl: `${targetImg}`,
    },
    buttons: [
      {
        title: "나도 테스트 해보기", // 버튼 이름
        link: {
          mobileWebUrl: "https://nobodyhavecat.netlify.app",
          webUrl: "https://nobodyhavecat.netlify.app",
        },
      },
    ],
  });
  // Kakao.Share.createDefaultButton({
  //   container: "#share",
  //   objectType: "text",
  //   text: "이것은 훌륭한 고양이 실험입니다. 당신의 인성을 분열시킨다 16가지 유형으로 우리는 그것을 추천하여 고양이를 제공한다. 당신의 고양이는 안녕하신가?",
  //   link: {
  //     mobileWebUrl: "https://nobodyhavecat.netlify.app",
  //     webUrl: "https://nobodyhavecat.netlify.app",
  //   },
  // });
});

// shareResult.addEventListener("click", function () {
//   Kakao.Share.createDefaultButton({
//     container: "#share",
//     objectType: "text",
//     text: "이것은 훌륭한 고양이 실험입니다. 당신의 인성을 분열시킨다 16가지 유형으로 우리는 그것을 추천하여 고양이를 제공한다. 당신의 고양이는 안녕하신가?",
//     link: {
//       mobileWebUrl: "https://nobodyhavecat.netlify.app",
//       webUrl: "https://nobodyhavecat.netlify.app",
//     },
//   });
// });
