const btnStart = document.querySelector(".btnStart");
const wndStart = document.querySelector(".start");
const wndQuestion = document.querySelector(".question");
const wndResult = document.querySelector(".result");
const boxQusetion = document.querySelector(".question-box");
const boxResult = document.querySelector(".result .title");
const boxSub = document.querySelector(".result .subscript");
const type01 = document.querySelector(".type01");
const type02 = document.querySelector(".type02");
const retry = document.querySelector(".retry");
const bar = document.querySelector(".question .progress .bar");
const score = [
  { id: "EI", num: 0 },
  { id: "SN", num: 0 },
  { id: "TF", num: 0 },
  { id: "JP", num: 0 },
];
let imageShare = 0;
let numQuestion = 0;

btnStart.addEventListener("click", function () {
  console.log("click");
  wndStart.classList.remove("on");
  wndQuestion.classList.add("on");
  loadQuestion();
});
type01.addEventListener("click", function () {
  getScore();
  numQuestion++;
  loadQuestion();
});
type02.addEventListener("click", function () {
  numQuestion++;
  loadQuestion();
});
retry.addEventListener("click", function () {
  wndQuestion.classList.add("on");
  wndResult.classList.remove("on");
  numQuestion = 0;
  score.map((item) => {
    item.num = 0;
  });
  bar.style.width = `${(numQuestion / 11) * 100}%`;
});

function loadQuestion() {
  if (numQuestion < 11) {
    boxQusetion.textContent = dataQuestion[numQuestion].title;
    type01.textContent = dataQuestion[numQuestion].answera;
    type02.textContent = dataQuestion[numQuestion].answerb;
    bar.style.width = `${(numQuestion / 11) * 100}%`;
  } else {
    wndQuestion.classList.remove("on");
    wndResult.classList.add("on");
    getMBTI();
  }
}
function getScore(start = false) {
  score.map(function (item, idx) {
    if (item.id === dataQuestion[numQuestion].type) {
      item.num++;
      return;
    }
  });
}
function getMBTI() {
  boxResult.innerHTML = "";
  score.map((item) => {
    if (item.num > 1) {
      boxResult.innerHTML += item.id[0];
    } else {
      boxResult.innerHTML += item.id[1];
    }
  });
  dataResult.map((item) => {
    if (boxResult.textContent === item.best) {
      boxSub.innerHTML = `
        <div class="photo">
            <img src="${item.image}" class="cat">
        </div>
        <span class="desc">${item.desc}</span>
        `;
      // <h5>${item.name}</h5>
      boxResult.innerHTML = item.name;
      imageShare = item.image;
    }
    return;
  });
}

const dataQuestion = [
  {
    id: 1,
    title: "새로운 고양이를 데려왔다! 나의 반응은?",
    answera: "참을수 없는 궁금증, 고양이는 무엇을 합니까? 저는 대화를 시도합니다 고양이에게게.",
    answerb: "그는 고독을 즐깁니까? 저는 시간을 할당합니다 고양이에게.",
    type: "EI",
  },
  {
    id: 2,
    title: "고양이에 대한 모든 것이 궁금해졌다. 나의 행동은?",
    answera: "많은 고양이 사람들과 나누어지는 정보들. 저는 열정적인 활동 합니다 공산주의에서의.",
    answerb: "공산주의에 참가한다 그러나 희귀한 활동, 저는 혼자 공부합니다.",
    type: "EI",
  },
  {
    id: 3,
    title: "아무리봐도 우리 고양이가 정말 이쁜 것 같다. 나의 행동은?",
    answera: "매우 아름답습니다 이 너구리. 저는 위로 불러들입니다 많은 사진들.",
    answerb: "많고 많은 귀여움 그리고 고양이. 저는 사진첩에 저장합니다 고양이.",
    type: "EI",
  },
  {
    id: 4,
    title: "고양이 유튜브를 시작하려고 한다. 나는 어떤 유튜브를 만들고 싶은가?",
    answera: "우리는 합니다 많은 참고자료의 Youtuber들. 나는 그들에게 배웁니다.",
    answerb: "멋지고 새로운 해결방법. 새로운 나는 만들어냅니다.",
    type: "SN",
  },
  {
    id: 5,
    title: "고양이에 대해서 모르는 부분들을 검색을 하고 있다. 내가 글을 읽는 방법은?",
    answera: "나는 놓치지 않게되는 많은 꼼꼼한 단어들을 읽는다",
    answerb: "나는 모두의 의미를 붙잡고 읽는다.",
    type: "SN",
  },
  {
    id: 6,
    title: "고양이 밥을 주려고 한다 나의 방법은?",
    answera: "나의 손은 자유롭다 나의 저울로부터.",
    answerb: "그는 비만할 수 없습니다. 나의 저울은 모두 제어한다 그의 식사.",
    type: "SN",
  },
  {
    id: 7,
    title: "같은 집사 친구가 고양이가 아픈 것 같아 슬퍼하고있다. 나의 반응은?",
    answera: "그에게는 가능성이 있습니다 우리는 함께 찾는다 고양이의 수리방법.",
    answerb: "나는 알지 못합니다 내가 해야할 일. 나는 그를 올려보냅니다.",
    type: "TF",
  },
  {
    id: 8,
    title: "고양이를 키우는데 가족과의 마찰이 생겼다. 이럴땐?",
    answera: "나는 고귀하며 가지고 있다 무결점의 논리. 그들은 나를 막을 수 없습니다.",
    answerb: "나는 가지고있습니다 모든 방법 모두의 행복. 그들은 기꺼이 대화합니다.",
    type: "TF",
  },
  {
    id: 9,
    title: "고양이가 아파서 병원을 고르려고 리뷰를 보았다. 내가 갈 병원은?",
    answera: "결과는 달립니다 모든것의 앞에. 나는 훌륭한 병원을 갑니다.",
    answerb: "인간성은 가장 중대합니다. 나는 만납니다 훌륭한 의사.",
    type: "TF",
  },
  {
    id: 10,
    title: "고양이 사료를 급여하는 방법은?",
    answera:
      "그는 5킬로그램을 넘습니다. 우리는 필요한 모든방법 조절되어야한다 그의 식사. 나는 통제합니다.",
    answerb:
      "그는 행복합니다 다음과 같은 방법으로 그는 자유롭게 식사합니다. 나는 나의 고양이를 신뢰한다.",
    type: "JP",
  },
  {
    id: 11,
    title: "고양이 사료가 우연히 여러 종류가 생겼다. 급여방법은?",
    answera:
      "피할수 없다 모든 사료의 실험. 고양이는 잘 먹습니까? 먹이고 먹이고 먹인다 모든것은 기호를 위해.",
    answerb: "사료는 나의 기분을 따릅니다.",
    type: "JP",
  },
  {
    id: 12,
    title: "자기전 나는?",
    answera: "앞선 미래는 나의 행동을 확정짓습니다.",
    answerb: "누워있습니다 나는 이제 끝입니다.",
    type: "JP",
  },
];

const dataResult = [
  {
    id: 1,
    name: "러시안 블루",
    best: "ESTJ",
    desc: "닭이다. 소심한 고양이는 평화로운 성격이 불러왔다. 그는 낯짝을 판별한다. 신규 고양이 연인에게 좋은 고양이는 모든 물건과 충돌하고 즐겁다 그것은 거대한 호기심때문.",
    image: `../images/cat/Russianblue.jpg`,
  },
  {
    id: 2,
    name: "샴",
    best: "ESFP",
    desc: "빠르지않음과 평화로움이 자주 보인다. 그는 훌륭한 외로움 운전수고 강한 광전사다. 그는 독립된 편의 소속이지만 가지고있다 기이함 좋아하는것 사람 손 탑승.",
    image: `../images/cat/Siamese.jpg`,
  },
  {
    id: 3,
    name: "페르시안",
    best: "ENTJ",
    desc: "이것은 개 입니까? 많은 고요함과 부드러운 마음. 그는 북슬북슬하기때문에 긴 털을 갖고있다. 당신의 아이는 안녕하다 고양이가 독립된 편에 소속되었기 때문에.",
    image: `../images/cat/Persian.jpg`,
  },
  {
    id: 4,
    name: "뱅갈",
    best: "INTP",
    desc: "놀라운 활동 그것은 고양이다. 당신의 집사는 아주 놀라울만큼 탈진한다 그것은 고양이가 활동으로 불러들였다.",
    image: `../images/cat/Bengal.jpg`,
  },
  {
    id: 5,
    name: "터키쉬 앙고라",
    best: "INTJ",
    desc: "아름다움 긴 털을 가졌다 이 고양이. 그러나 주의하라! 그는 복수를 즐기며 빠른 인성을 가졌다. 그러나 안심하라 많은 인성이 있다 고양이에게.",
    image: `../images/cat/Turkishangora.jpg`,
  },
  {
    id: 6,
    name: "아비시니안",
    best: "ISTJ",
    desc: "매우 빠름 많은 호기심 그리고 지적이다 고양이. 말이 많은 고양이는 대답한다 MEOW. 물을 좋아하는 고양이는 편안하다 소나기를 획득하십시오. 그러나 그는 모든 물체와 충돌합니다 그것은 고양이의 호기심으로 비롯되었다.",
    image: `../images/cat/Abyssinian.jpg`,
  },
  {
    id: 7,
    name: "노르웨이 숲",
    best: "ESTP",
    desc: "고양이들중 하나이다 침묵하고 좋아하는것 사람. 그는 잔혹한 사냥꾼 왜냐하면 살고있었다 숲에. 그의 덩치는 거대하다 그래서 먹는다 많이.",
    image: `../images/cat/Norwegianforest.jpg`,
  },
  {
    id: 8,
    name: "아메리칸 숏헤어",
    best: "INFP",
    desc: "많은 표현과 애정 훌륭한 호기심. 그러나 강력한 소유 그리고 욕심 그것은 굉장하다. 당신은 이미 가지고있습니까? 많은 고양이. 주의하십시오! 그 고양이는 입을 벌려 소리냅니다 다른 고양이에게...",
    image: `../images/cat/Ameshort.png`,
  },
  {
    id: 9,
    name: "코리안 숏헤어",
    best: "ISFP",
    desc: "그 고양이의 혈액에는 많은 고양이가 있다. 그들의 대부분은 활동적이고 눈부신 인성을 갖고 있다, 또한 영리하며 상냥하다. 그는 추격과 살해를 즐긴다 그것은 뛰어난 본능이 이끌었다.",
    image: `../images/cat/Korshort.jpg`,
  },
  {
    id: 10,
    name: "엑죠틱",
    best: "ISFJ",
    desc: "낯짝을 판별하지 않는다, 즐거운 하루하루 그것은 당신의 곁에서 이루어진다. 그러나 주의하십시오! 많지않은 운동은 초래한다 비만과 고양이.",
    image: `../images/cat/Exotic.jpg`,
  },
  {
    id: 11,
    name: "스코티쉬 폴드",
    best: "ENFP",
    desc: "굉장히 귀여움 그것은 귀가 접혀있다! 들리지 않는 울음소리 친절하고 느리다! 고양이를 때리고 그것은 많은 애교를 가진 팀에 속해있다 당신의 뒤를 쫓는다 그것은 매우 귀찮음!",
    image: `../images/cat/Scottishfold.jpg`,
  },
  {
    id: 12,
    name: "먼치킨",
    best: "INFJ",
    desc: "색이 입혀진 형상을 가진 고양이는 다리가 짧다. 짧은 다리는 모든 장소를 방문하는 과충전 고양이. 머리가 좋다 표현이 뛰어나다 그 팀에 소속되어있는 고양이.",
    image: `../images/cat/Munchkin.png`,
  },
  {
    id: 13,
    name: "렉돌",
    best: "ESFJ",
    desc: "그 고양이는 많은 심장을 강탈한다 긴 털을 가졌기 때문에! 그것의 이름은 봉제인형이다 당신의 집사는 그것을 인형으로 삼아 안는다! 고양이들중 하나이다 지나치게 부드러운 그리고 좋아한다 당신의 집사를.",
    image: `../images/cat/Ragdoll.jpg`,
  },
  {
    id: 14,
    name: "브리티쉬 숏헤어",
    best: "ENTP",
    desc: "이름은 동일하다 영국신사와! 남을 베려한다 그것을 위해 침묵하고 강한 인내심을 가졌다. 당신의 옆구리를 노린다 그것은 덩치가 크기 떄문에 무릎보다 선호한다.",
    image: `../images/cat/British.jpg`,
  },
  {
    id: 15,
    name: "스핑크스",
    best: "ISTP",
    desc: "그것은 유일하다 털이 갖지 않음으로써! 그것은 비교된다 생김새와 골드리트리버는 그것의 성격이다! 그러나 주의하시길 그는 쉽게 얻는 병이다 피부에게.",
    image: `../images/cat/Sphinx.jpg`,
  },
  {
    id: 16,
    name: "메인쿤",
    best: "ENFJ",
    desc: "고양이의 행성은 거인 신사라는 이름이다! 그 고양이는 대적한다 사자 그리고 호랑이 머리가 좋고 큰 덩치를 가지고 있기 때문에 온화하다 조용한것은 성격이다.",
    image: `../images/cat/Mainecoon.jpg`,
  },
];
