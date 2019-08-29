# Redux Tutorial

## 2019.08.29 - 카운터를 통한 간단한 리덕스 구조 파악

- [x] 자바스크립트를 이용한 기초 개념 파악하기

## Redux 개념

- 액션 (Action) : \
  상태의 변화가 필요할 때 발생. 하나의 객체로 표현됨.\
   type은 필수적으로 들어가야 하며 그외의 값들은 작성자가 원하는대로 작성 할 수 있음.
  > 예시
  ```javascript
   {
    type: "SAMPLE_VALUE",
    data: {
      id: 0,
      value: "HI"
      }
   }
  ```
- 액션 생성함수 (Action Creator) : \
  액션을 만드는 함수. 파라미터를 받아 액션 객체 형태로 만들어줌.
  > 예시
  ```javascript
  function creator(data) {
    retuen {
      type: "SAMPLE_VALUE",
      data:
    };
  };
  // 애로우펑션으로도 제작 가능
  const creator = (text) => ({
    type: "CHANGE_VALUE",
    text
  });
  ```
- 리듀서 (Reducer) : \
  변화를 만드는 함수. 두개의 파리미터를 받아옴.\
  리듀서는 현재의 상태 (state)와 전달받은 액션 (action)을 참고하여 새로운 상태를 반환함.

  > 예시

  ```javascript
  function reducer(state, action) {
    // 상태 업데이트 로직 작성
    return alteredState;
  }
  ```

* 스토어 (Store) : \
  하나의 애플리케이션에 하나의 스토어를 만들게 됨. 스토어 내부에 현재 앱상태, 리듀서가 들어있고, 추가적으로 몇가지의 내장 함수가 포함됨.
  > 예시
  ```javascript
  const { createStore } = Redux;
  const store = createStore(reducer);
  ```
* 디스패치 (dispatch) : \
  스토어의 내장 함수 중 하나. 디스패치는 액션을 발생시키는 역할을 수행함.
  > 예시
  ```javascript
  store.dispatch(action); // 이 형식으로 파라미터를 전달.
  ```
* 구독 (subscribe) : \
  스토어의 내장 함수 중 하나. 함수 형태의 값을 파라미터로 받아 액션이 디스패치 될 때 마다 전달해준 함수가 호출 됨.
  > 예시
  ```javascript
  store.subscribe(render); // 이 형식으로 파라미터를 전달.
  ```

## 카운터를 통한 구조 파악

```javascript
const elNumber = document.getElementById('number');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

// 액션 타입의 정의
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션 스크립트 함수 제작
const increment = diff => ({ type: INCREMENT, diff: diff });
const decrement = () => ({ type: DECREMENT });

// 초기 상태값 설정
const initialState = {
  number: 0
};

// 리듀서 함수 제작
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + action.diff
      };
    case DECREMENT:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
};

// 스토어 제작 및 리듀서 할당
const { createStore } = Redux;
const store = createStore(counter);

// 상태가 변하면 함수가 호출
const render = () => {
  elNumber.innerText = store.getState().number;
  console.log('call this');
};

// 스토어 구독, 스토어에 변화가 생기면, render 함수 호출
store.subscribe(render);

// 초기 랜더링
render();

// 버튼에 이벤트 할당, 각 이벤트마다 구독.
btnIncrement.addEventListener('click', () => {
  store.dispatch(increment(1));
});
btnDecrement.addEventListener('click', () => {
  store.dispatch(decrement());
});
```
