# 2021 UI/UX Trend in Japan throughout Woman's view

- **동기**: 프론트엔드 개발자로서 최신 동향에 걸맞는 UI/UX의 사용법을 숙지하기
- **목표**: 최신 UI/UX를 React를 사용해 실제로 구현해보고 어떤 점을 더 연습하면 좋을지 체크해보기

- 참고영상1 : [【2021 年最新版】女性目線の Web デザイン最新トレンド 6 選！](https://www.youtube.com/watch?v=rYJTU6T_pN0)

0. Index 페이지

<img src="https://user-images.githubusercontent.com/67398691/126268413-7f16c511-66e5-4628-a1aa-24ed7fe15369.JPG" alt="index page image" width="980px" height="540px"/>

- 간략한 background gradiant와 타이포그래피로 구성

1. 추상 디자인(Abstract Design)

<img src="https://user-images.githubusercontent.com/67398691/126268523-9352febb-aeb2-493d-8471-c89abeb4e840.JPG" alt="abstract design" width="980px" height="540px"/>

- 사각형, 원형과 같은 여러 도형으로 구성되는 디자인으로 추상 벡터 이미지의 배경과 여러 모양의 도형으로 구성하였다

2. 한붓 그리기 디자인(One-stroke Design)

<img src="https://user-images.githubusercontent.com/67398691/126268698-5e4b8ff8-da12-40b6-8229-2e5aa9e77209.JPG" alt="one-stroke design" width="980px" height="540px"/>

- 하나의 선을 여러개 이용한 디자인으로 예제 페이지에서는 스핀 애니메이션을 넣은 4개의 원으로 구성하였다

3. 3D 디자인(3D Design)

<img src="https://user-images.githubusercontent.com/67398691/126268900-3871abd7-0265-4f0d-a0d8-d130d24db0ca.JPG" alt="3d design" width="980px" height="540px"/>

- 3D 형태의 도형을 이용한 디자인으로 예제 페이지에는 큐브를 회전시키는 애니메이션을 적용하였다

4. 뉴모피즘 디자인(Neumorphism Design)

<img src="https://user-images.githubusercontent.com/67398691/126268998-4afed67d-b502-474e-96a9-e4ef331cbb81.JPG" alt="neumorphism design" width="980px" height="540px"/>

- 객체의 돌출을 표현하기 위해 그림자만을 사용하여 볼륨감을 표현하는 디자인으로 예제 페이지에는 4가지의 뉴모피즘 스타일을 적용하였다.

5. 테라조 디자인(Terazzo Design)

<img src="https://user-images.githubusercontent.com/67398691/126269284-6a0f4ab7-c2e3-423e-b859-40458b7ecc83.JPG" alt="terazzo design" width="980px" height="540px"/>

- 테라조란 대리석, 화강암 등의 부순 골재, 안료, 시멘트 등 고착제와 함께 성형하고, 경화한 후 표면을 연마, 광택을 내어 대리석과 같이 마감한 것으로 바닥이나 벽에 쓰이는 재료로 다양한 타일 모양을 표현하기 좋으며 특히 대리석 느낌을 표현하기 좋다
- 예제 페이지에서는 테라조 디자인의 배경에 거품이 올라오는 애니메이션을 합성하여 제작하였다

6. 섀도우 디자인(Shadow Design)

<img src="https://user-images.githubusercontent.com/67398691/126447372-2b0acf15-2de1-4ec5-a56f-564ded652424.JPG" alt="shadow design" width="980px" height="540px"/>

- 웹디자인에 주로 사용되는 카드형 컴포넌트와 그림자 스타일을 혼합하여 사용하였다

7. 컬러리스/더블톤 디자인(Colorless/Double-tone Design)

<img src="https://user-images.githubusercontent.com/67398691/126447414-d5289d25-cacc-4cac-81a9-e3dc0205d460.JPG" alt="double-tone design" width="980px" height="540px"/>

- 더블 톤으로 Violet/White를 이용하였고 물결 무늬를 표현하기 위해 clip-path를 사용하였다
- 애니메이션을 이용해 텍스트가 떠오르고 애니메이션 이후에 그 자리에 고정되게끔 js와 조합하여 추가하였다

**여기서부터는 페이지 개발에 필요한 것들 정리**

- create-react-app w/ typescript
  `npx create-react-app my-app --template typescript`
- 타입 스크립트 관련 모듈 설치하기
  `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
- react-router-dom 설치하기([참고페이지](https://jeonghwan-kim.github.io/dev/2019/07/08/react-router-ts.html))
  `npm install react-router-dom @types/react-router-dom`
- `routes/index.tsx` 파일을 생성하고 경로 설정하기

**여기서부터는 만들어보고 느낀 점**

- 해당 디자인에 어떤 애니메이션을 조합했을 때 효과적일까를 생각하는 시간이 매우 유익했다
- 여러 CSS(트랜스폼, 애니메이션, 키프레임 등)를 복습 할 수 있었다
- 앞으로 UI/UX를 공부함에 있어 **실제로 구현해보는 것**에 거부감 없이 도전할 수 있으면 함
- 기본적으로 CSS만 사용하고자 했으나, **실제로는 자바스크립트와 캔버스를 활용**하는 애니메이션이 더 동적이고 사용자와 상호작용을 할 수 있으므로 향후 **JS와 캔버스를 활용한 UI/UX 구현**을 과제로 삼아야 할 것
