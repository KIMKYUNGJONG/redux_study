import * as types from './ActionTypes';

export const increment = () => ({
  type: types.INCREMENT
});
export const decrement = () => ({
  type: types.DECREMENT
});

// 다른 생성자와 다르게 파라미터를 가지고 있어야함.
export const setColor = color => ({
  type: types.SET_COLOR,
  color
});
