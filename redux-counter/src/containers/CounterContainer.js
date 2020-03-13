import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

//13 가지 색상 중 랜덤으로 선택하는 함수 생성.
export function getRandomColor() {
  const colors = [
    '#495057',
    '#f03e3e',
    '#d6336c',
    '#ae3ec9',
    '#7048e8',
    '#4263eb',
    '#1c7cd6',
    '#1098ad',
    '#0ca678',
    '#37b24d',
    '#74b816',
    '#f59f00',
    '#f76707'
  ];

  // 0 ~ 12 랜덤 숫자
  const random = Math.floor(Math.random() * 13);

  // 랜덤 색상 반환
  return colors[random];
}

// store 안의 state값을 props로 연결

const mapStateToProps = state => ({
  color: state.colorData.color,
  number: state.numberData.number
});

/* 액션 생성함수를 사용해 액션을 생성하고, 
해당 액션을 dispatch하는 함수를 만든 후 이를 props로 연결함 */

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

//Counter 컴포넌트의 Container 컴포넌트
//Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할을 함.

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
