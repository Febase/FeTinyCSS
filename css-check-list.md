# CSS 자가 체크리스트

> 아래 테오님의 블로그 글의 체크 리스트 내용을 참고 했습니다.
> https://velog.io/@teo/css-self-checklist

🔰: 입문
🔥: 쉬운데 실무에도 자주 쓰여서 꼭 알아야 하는 것
🎯: 디자인툴(피그마)에 있기 때문에 꼭 알아야 하는 것들
😎: 알고 있으면 좋은 것
🤔: 몰라도 크게 상관은 없는데 결국 배우게 되는 것들

## CSS 입문

🔰 inline-style을 쓸 줄 안다.
🔰 link로 css를 연결할 수 있다.
🔰 태그에 스타일을 적용할 수 있다.
🔥 HTML에 class를 만들어서 스타일을 적용할 수 있다.
🔰 Selector을 이용해서 하위 영역에 스타일을 적용할 수 있다.
🔰 a의 target attribute가 "\_target"인 노드만 스타일을 적용할 수 있다.

## CSS 이론

🔰 selector, rule등 css의 구성요소와 문법체계를 알고 있다.
🤔 CSS 렌더링 순서를 설명할 수 있다.
🤔 Cascading을 설명할 수 있다.
😎 Selector의 상세도(Specificity)에 의한 우선순위 개념을 알고 있다.
🤔 같은 상세도를 가졌을때 우선순위에 대해서 알고 있다.
🔥 inherit의 개념을 알고 있다.
😎 initial의 개념을 알고 있다.
🤔 unset, revert에 대해서 알고 있다.
🔥 !important에 대해서 알고 잇다.
😎 아래 코드가 무슨 의미인지 안다.

```css
/_ specificity: 0101 _/
#outer a { background-color: red;}

/_ specificity: 0201 _/
#outer #inner a { background-color: blue;}

/_ specificity: 0104 _/
#outer div ul li a { color: yellow; }

/_ specificity: 0113 _/
#outer div ul .nav a { color: white; }

/_ specificity: 0024 _/
div div li:nth-child(2) a:hover { border: 10px solid black; }

/_ specificity: 0023 _/
div li:nth-child(2) a:hover { border: 10px dashed black; }

/_ specificity: 0033 _/
div div .nav:nth-child(2) a:hover { border: 10px double black;}"

```

## CSS Selector

🔰 selector가 뭔지 알고 있다.
🔰 id selector가 뭔지 알고 있다.
🔥 class selector가 뭔지 알고 있다.
🔥 Universal selector가 뭔지 알고 있다.
🔰 하위 요소를 선택할 수 있다.
🔰 a의 target attribute가 "\_target"인 노드만 스타일을 적용할 수 있다.
🔰 자식 노드를 선택할 수 있다.
😎 인접 노드 선택자를 알고 있다.
😎 범위 지정 선택자를 알고 있다.
🔥 마우스 hover시 색상을 바꿀 수 있다.
🔰 Pseudo class를 알고 있다.
😎 드래그 했을때 선택영역의 색상을 바꿀 수 있다.
😎 input의 placeholder 색상을 바꿀 수 있다.
🔰 Pseudo element를 알고 있다.
🔰 ::after나 ::before 그리고 content를 알고 있다.
😎 ::after나 ::before 그리고 content에서 실전에서 사용되는 팁을 알고 있다.
🔥 :root를 알고 있다.

## CSS Value

🔰 px, pt를 알고 있다.
🔰 em을 알고 있다.
😎 rem을 알고 있다.

## 색상

🔰 #f00 이 무슨 색인지 알고 있다.
🔰 r, g, b 값이 있으면 색상을 만들 수 있다.
🔰 반투명한 색상을 만들 수 있다.
😎 hsl가 뭔지 알고 있다.
😎 svg의 색상을 글자 색상으로 바꿀 수 있다.

CSS Box Model
🔰 Normal Flow가 무슨 뜻인지 알고 있다.
🔰 Block와 Inline을 알고 있다.
🔰 Box Model을 알고 있다. (margin, border, padding, content)
🔥 box-sizing: content-box 와 border-box의 차이를 알고 있다.
🔥 디자인을 보고 여기 간격을 지정할때 margin을 써야 하는지, padding을 써야할 지 감이 온다.
🔰 margin collapse가 뭔지 알고 있다.
🔥 border와 outline의 그려지는 차이를 알고 있다.

Box 꾸미기
🎯 border
🎯 outline
🎯 box-shadow
🎯 배경색을 바꿀 수 있다.
🎯 배경이미지를 바꿀 수 있다.
🔥 cover, contain의 차이를 알고 있고 적절히 쓸 수 있다.
🔥 img태그에도 cover, contain을 적용할 수 있다.
🔥 배경이미지를 컨텐츠가 비율이 찌그러지지 않게 크기를 조절할 수 있다.
🔥 3:2, 4:3, 16:9등 자동으로 비율에 맞는 크기의 상자를 만들 수 있다
😎 IE에서도 위 작업을 할 수 있다.
😎 스크롤시 배경이미지를 고정하는 CSS 효과를 줄 수 있다.

🔥 flexbox 레이아웃 (제일 중요!)
🔥 flexbox를 알고 있습니다.
🔥 main-axis, cross-axis의 의미와 그에 맞는 property를 알고 있습니다.
🔥 flexbox로 가로로 컨텐츠를 배치 할 수 있습니다.
🔥 flexbox를 이용해서 컨텐츠를 가운데에 배치할 수 있습니다.
🔥 flexbox를 이용해서 컨텐츠를 원하는 위치에 배치할 수 있습니다.
🔥 flexbox로 컨텐츠간의 고정 간격을 지정 할 수 있습니다.
🔥 flexbox로 컨텐츠간의 반응형으로 간격을 지정 할 수 있습니다.
🔥 flexbox내의 컨텐츠를 반응형으로 크기를 지정할 수 있습니다.
🔥 flex:1, flex:2 의 숫자 값의 의미를 알고 있습니다.
🔥 flexbox내의 컨텐츠의 순서를 html의 편집없이 변경할 수 있습니다.
🔥 flexbox로 여러줄의 Grid 뷰를 만들 수 있습니다.
🔥 flexbox에서 그리드 형태일때 배치하는 방법을 알고 있습니다.
😎 디자인을 보고 어디에 어떤 flexbox을 써야 할 지 판단하고 작성할 수 있습니다.
😎 나만의 flexbox를 작성하는 루틴이 있습니다.
😎 flexbox에서 img나 svg의 크기가 자동으로 줄어들때 대처 방법을 알고 있습니다.
😎 flexbox에서 컨텐츠의 원본크기를 유지하는 방법을 알고 있습니다.

## 레이아웃(grid)

😎 디자인에서 grid 시스템이 무엇인지 알고 있다.
😎 css grid로 grid 시스템 반응형 레이아웃을 만들 수 있다.
🔥 gird 템플릿을 작성할 수 있다.
🔥 grid에서 gap의 의미를 알고 있다.
🔥 repeat와 1fr의 의미를 알고 있다.
🔥 auto-fill, auto-fit을 적절히 쓸 줄 안다.
🤔 minmax, min-content, max-content를 알고 있다.
🤔 fit-content를 알고 있다.
😎 grid에서 line의 의미를 알고 있다.
😎 grid에서 span의 의미를 알고 있다.
🤔 grid에서 dence의 의미를 알고 있다.
🤔 grid-area를 이용해서 사이트 레이아웃을 작성할 수 있다.

## 반응형 크기

🔥 min-width, max-width를 알고 있다.
🔥 vh, vw를 알고 있다.
🔥 vmin, vmax를 알고 있다.
🔥 aspect-ratio를 알고 있다.
🔰 width에서 %를 입력하면 어느값의 %인지 알고 있다.
🔰 height에서 %를 입력하면 어느값의 %인지 알고 있다.
😎 margin에서 %를 입력하면 어느값의 %인지 알고 있다.
😎 padding에서 %를 입력하면 어느값의 %인지 알고 있다.
😎 position:absolute시 top, left 에서 %를 입력하면 어느값의 %인지 알고 있다.
🔥 transform: translateX 에서 %를 입력하면 어느값의 %인지 알고 있다.
😎 flexbox에서 width, max-width, min-width, flex-basis, flex의 상관관계를 알고 있다.
😎 미디어 쿼리 없이 적절한 반응형 크기를 만들어 낼 수 있다.

## calc()

🔰 calc가 뭔지 알고 있다.
😎 calc에서 반드시 띄어쓰기를 해야 하는 곳을 알고 있다.
🔥 calc를 언제 사용해야 되는지 알고 있다.
🔥 calc를 실전에서 사용해본적이 있다.

## 글자

🎯 글자 색상을 바꿀 줄 안다
🎯 글자 크기를 바꿀 줄 안다.
🎯 글꼴을 바꿀 줄 안다
🔰 웹 안전 폰트를 설정할 줄 안다.
🔥 구글 웹 폰트를 연동할 줄 안다.
😎 설치형 웹 폰트를 연동할 줄 안다.
😎 디자이너가 원하는 폰트를 웹폰트로 만들어서 설치 할 줄 안다.
🎯 bold, 기울임, 밑줄, 취소선 등을 적용할 줄 안다.
🔰 글자 굵기의 100~900까지의 차이를 알고 있다.
🎯 line-height의 개념을 알고 있다.
🎯 line-height의 값이 %과 숫자의 차이를 알고 있다.
🎯 font shorthand의 구성을 모두 알고 있다.
🤔 글자에 그림자를 넣을 줄 안다.
🤔 기타 글자 관련된 속성들을 알고 있다.
font-variant: 작은 대문자와 일반 글꼴 사이를 전환합니다.
font-kerning: 글꼴 커닝 옵션을 켜고 끕니다.
font-feature-settings: 다양한 스위치 오픈타입 글꼴 기능을 켜고 끕니다.
font-variant-alternates: 주어진 글꼴에 대한 대체 글리프의 사용을 제어합니다.
font-variant-caps: 대체 대문자 글리프의 사용을 제어합니다.
font-variant-east-asian: 일본어 및 중국어와 같은 동아시아 스크립트에 대한 대체 글리프의 사용을 제어합니다.
font-variant-ligatures: 텍스트에 사용되는 합자 및 컨텍스트 형식을 제어합니다.
font-variant-numeric: 숫자, 분수 및 서수 마커에 대한 대체 글리프의 사용을 제어합니다.
font-variant-position: 위 첨자 또는 아래 첨자로 배치된 더 작은 크기의 대체 글리프 사용을 제어합니다.
font-size-adjust: 실제 글꼴 크기와 별도로 글꼴의 시각적 크기를 조정합니다.
font-stretch: 주어진 글꼴의 가능한 대체 확장 버전 간에 전환합니다.
text-underline-position: text-decoration-line속성 underline값을 이용하여 설정한 밑줄의 위치를 지정합니다 .
text-rendering: 일부 텍스트 렌더링 최적화를 수행해 보십시오.
😎 text-indent: 텍스트 내용의 첫 줄 시작 전에 수평 공간을 얼마나 남겨야 하는지 지정합니다.
text-overflow: 표시되지 않는 오버플로 콘텐츠가 사용자에게 어떻게 신호되는지 정의합니다.
😎 white-space: 요소 내부의 공백 및 관련 줄 바꿈을 처리하는 방법을 정의합니다.
😎 word-break: 단어 내에서 줄 바꿈 여부를 지정합니다.
direction: 텍스트 방향을 정의합니다(이는 언어에 따라 다르며 일반적으로 HTML이 해당 부분을 텍스트 내용과 연결되어 있으므로 처리하도록 하는 것이 좋습니다.)
hyphens: 지원되는 언어에 대해 하이픈 넣기를 켜고 끕니다.
line-break: 아시아 언어의 줄바꿈을 완화하거나 강화합니다.
text-align-last: 강제 줄 바꿈 직전의 블록이나 줄의 마지막 줄을 정렬하는 방법을 정의합니다.
text-orientation: 줄에서 텍스트의 방향을 정의합니다.
😎 overflow-wrap: 오버플로를 방지하기 위해 브라우저가 단어 내에서 줄을 깰 수 있는지 여부를 지정합니다.
😎 writing-mode: 텍스트의 행을 가로 또는 세로로 배치할지 여부와 다음 행이 흐르는 방향을 정의합니다

## Text

🎯 글자를 왼쪽, 가운데, 오른쪽, 혼합정렬을 할줄 안다.
🔥 글자가 넘칠때 글자 단위로 줄바꿈을 할줄 안다.
🔥 띄어쓰기 공백이 없을때 글자가 넘치는 현상을 막을 줄 안다.
🔰 2칸 이상의 띄어쓰기를 할 줄 안다.
🔥 띄어쓰기나 줄바꿈을
없이 사용할 줄 안다.
🔥 white-space의 개념을 알고 있다.
🔰 글자를 강제로 대문자로 바꿀 줄 안다.
🤔 글자에 그림자를 넣을 줄 안다.
🤔 세로로 글씨를 쓸 줄 안다.
🤔 writing-mode를 알고 있다.
🤔 margin-block-, padding-block- 에 대해 알고 있다.
🤔 margin-inline-, padding-inline-에 대해 알고 있다.

## Text Overflow

🔥 넘치는 글자를 ... 말줄임을 할 수 있다.
🔥 2~3줄 단위로 ... 말줄임을 할 수 있다.
🔥 가운데 부분만 ... 말줄임을 할 수 있다.

## Overflow와 스크롤

🎯 삐져나가는 컨텐츠를 안 보이게 할 수 있다.
🔰 컨텐츠에 scroll바를 달 수 있다.
🔰 컨텐츠에 y방향에만 scroll를 달 수 있다.
🔰 컨텐츠에 항상 스크롤바가 보이게 할 수 있다
🔰 스크롤바를 원하는 모양으로 변경할 수 있다.

## scroll snap

🔰 scroll snap이 뭔지 알고 있다.
😎 js없이 캐로셀을 만들 수 있다.
😎 스크롤시 지정된 위치에 멈추게 할 수 있다.
😎 어떤 점이 css로 scroll snap이 js보다 좋은지 어떤 점이 반대로 어떤 점이 한계인지 설명할 수 있다.

## overscroll-behavior

😎 overscroll-behavior 프로퍼티가 뭔지 알고 있다.
😎 중복된 scroll이 있을때 부모 스크롤까지 이동해버리는 현상을 막을 줄 알다.

## 링크

🔰 링크의 색상 종류가 어떤 것이 있는 줄 안다.
🔰 이미 방문한 링크의 스타일을 변경할 줄 안다.

## 목록

🤔 숫자 목록, 기호 목록을 만들줄 안다.
🤔 숫자 목록의 타입을 a,b,c로 바꿀 줄 안다.
🤔 숫자 목록의 시작값을 바꿀 줄 안다.
🤔 목록의 모양에 이미지를 적용할 줄 안다.

## Table

😎 table-layout 속성의 차이를 알고 있다.
😎 border-collapse의 차이를 알고 있다.
😎 tr와 td의 스타일링 차이를 알고 있다.

## 레이아웃(기타)

🔰 float가 뭔지 언제써야 하는지 알고 있습니다.
🔰 clear가 뭔지 언제써야 하는지 알고 있습니다.
😎 꼭 float을 써야만 하는 상황을 알고 있습니다. float으로 레이아웃 하지 않습니다.
🤔 글을 2단, 3단으로 나눌 줄 압니다.

## Overlay

🔰 엘리먼트를 원하는 위치에 값을 통해서 이동할수 있습니다.
🔥 position: absolue와 relative의 차이를 알고 있습니다.
🔥 viewport의 개념을 알고 있습니다.
🔰 top: left의 %값이 어떤 값의 %인지 알고 있습니다.
🔰 right와 bottom의 의미를 알고 있습니다.
🔥 position: fixed의 의미를 알고 있습니다.
🔥 position: sticky의 사용법을 알고 있습니다.
🔥 z-index의 값이 어떻게 반영이 되는지 알고 있습니다.
🔥 같은 z-index의 값일 경우 position에 따라 어떤 순서대로 배치되는지 알고 있습니다.
https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension

## Animation

🔰 transition을 사용할 줄 안다.
🔰 animation을 사용할 줄 안다.
🔥 transition과 animation의 차이를 알고 있다.
😎 실전에서 transition과 animation 선택지가 있을때 합당한 이유를 들 수 있다.
🔰 critical render path에 대해서 알고 있다.
🔰 하드웨어 가속과 reflow, repaint, compoision의 개념을 알고 있다.
🔥 왜 transform이 더 빠른지 설명할 수 있다.
😎 width, height, top, left 등의 에니메이션을 어떻게든 opacity, transform등으로 대체하도록 에니메이션을 생각해볼 수 있다.
😎 codepen등에서 css animation 샘플을 보면 적절히 응용해서 내 프로젝트에서 넣을 줄 안다.

## CSS Reset

🔥 CSS Reset의 의미가 필요한 이유를 알고 있다.
🔥 reset과 nomalize의 차이를 알고 있다.
🔥 내가 쓸 수 있는 reset이 있다.
🔥 reset에 쓰이는 style의 의미를 알고 있다.

## 미디어 쿼리

🔰 @media 쿼리의 의미를 알고 있다.
🔰 breakpoint 라는 용어를 알고 있다.
🔰 브라우저의 크기에 따라 다른 css를 적용할 줄 안다.
🔥 모바일과 타블렛과 PC를 구분해서 css를 적용할 줄 안다.
🔥 모바일 타블렛의 가로모드와 세로모드를 구분해서 css를 적용할 줄 안다.
🔥 다크모드 대응을 할 줄 안다.

## Mobile

🔥 mobile에서 롱터치에서 나오는 선택영역을 적절하게 다룰 줄 안다.
🔥 mobile에서 hover를 대신해서 터치에 반응하는 CSS를 만들 줄 안다
🔥 터치시 보이는 기본 이펙트를 제거하고 앱과 같은 에니메이션 반응을 만들 수 있다.
😎 iphone 노치영역을 다룰 줄 안다.
😎 가로모드, 세로모드에 대응 할 줄 안다.
😎 모바일 디바이스에서만(반응형X) CSS를 적용되게 할줄 안다.

## Chrome Dev Tool

😎 크롬에서 DevTool을 다룰줄 안다.
😎 원하는 클래스를 추가할 줄 안다.
😎 어떠한 속성이 적용되어 있는지 확인 할 줄 안다.
😎 :hover, :active 등의 조건이 걸린 스타일을 확인 할 줄 안다.

## 클린코드

🔥 나만의 프로퍼티를 작성하는 순서가 있다.
🔥 나만의 class의 이름을 짓는 순서가 있다.
🔥 나만의 selector를 작성하는 순서가 있다.
🔥 OOCSS, BEM 등의 방법론을 알고 있다.
🔥 css variable을 이용해서 테마를 만들어 본 적이 있다.
🔥 나만의 base코드가 있다.
🔥 나만의 style을 분리하는 원칙이 있다.

## CSS 방법론

🔰 방법론이 무엇이며 왜 필요한지 안다.
😎 BEM으로 CSS를 작성할 줄 안다. (이하 동일)
🔥 CSS in JS (Styled Component)
🔥 Atomic CSS (Utiliy-first)
🤔 OOCSS, SCMASS, PRECSS, .. 뭐 아무튼 옛날 방법론등을 알고는 있다.

## 현대 CSS를 다루는 방법

🔥 Sass, Less, Stylus와 같은 Pre-processor를 사용할 줄 안다.
🔥 CSS Module을 사용할 줄 안다.
🔥 CSS in JS를 사용할 줄 안다.
🔥 Bootstrap과 같은 CSS Framework를 알고 있다.
🔥 mui, antd와 같은 CSS 컴포넌트 라이브러리를 사용하고 커스텀 할 수 있다.
🔥 TailwindCSS, AdorableCSS와 같은 Atomic CSS 방식을 쓸 줄 안다.

## CSS Variable

🔰 css variable를 만들 줄 안다.
🔰 :root { --primary: #4f80ff } 가 무슨 의미인지 안다.
🔥 css variable의 적용 범위를 알고 있다.
😎 css variable를 이용해서 테마를 만들고 변경할 수 있다.
🔥 어떤 값들을 css variable로 만들면 좋을지 알고 있다.
