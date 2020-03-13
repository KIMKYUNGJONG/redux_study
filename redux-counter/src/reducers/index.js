import number from './number';
import color from './color';

import { combineReducers } from 'redux';

/* 
서브리듀서를 하나로 합친다.
combineReducers를 실행하고 난 후 나중에 store형태를
파라미터로 전달한 객체 모양대로 만듬.
현재 이 상태로 만들게 된다.
  {
    numberData: {
      number: 0
    },
    colorData: {
      color: 'black'
    }
  }

*/
const reducers = combineReducers({
  numberData: number,
  colorData: color
});

export default reducers;
