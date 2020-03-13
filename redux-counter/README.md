# Redux react app.

- 리덕스 공부 및 간단한 리덕스를 사용한 미니 프로젝트 생성.

## 구성

- presentation Component : 뷰만 컴포넌트. 리덕스 스토어에 접근할수 없으며, 오직 props로만 데이터를 관리. 주로 함수형 컴포넌트로 작성하며, state 가 있어야하거나 최적화를 할 필요가 있을경우에만 클래스 컴포넌트를 사용.
- container Component : 프레젠테이션 컴포넌트들과 컨테이너 컴포넌트들을 관리함. 내부 DOM 엘리먼트를 직접적으로 사용하지 않으며, 감싸는 용도로 사용. 스타일을 가지고 있지 않고 상태를 가지고 있으며 리덕스에 직접 접근함.

## directory

src

- actions
  - ActionTypes.js
  - index.js
- components
  - Counter.css
  - Counter.js
- containers
  - App.js
  - CounterContainers.js
- reducers
  - color.js
  - number.js
  - index.js
- index.css
- index.js

## 리듀서 구성

- 서브리듀서를 생성. index에서 서브리듀서들을 combineReducers 를 통해 하나로 합침.
- CounterContainers.js 에서 액션 생성함수를 사용해 액션을 생성하고, 해당 액션을 dispatch하는 함수를 만든 후 이를 props로 연결함. connect 함수를 사용.
