const elNumber = document.getElementById('number');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

// define action type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


// action script function
const increment = (diff) => ({ type: INCREMENT, diff: diff});
const decrement = () => ({ type: DECREMENT});

// init value
const initialState = {
  number: 0
};


// reducer function
const counter = (state = initialState, action) => {
  console.log(action);
  switch(action.type){
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
}

// make store
const { createStore } = Redux;
const store = createStore(counter);

//call this function when state changed
const render = () => {
  elNumber.innerText = store.getState().number;
  console.log('call this');
}

// subscribe store, when state changed, call render function
store.subscribe(render);

// initialize render
render();

// add event button, dispatch store
btnIncrement.addEventListener('click', ()=>{
  store.dispatch(increment(1));
})
btnDecrement.addEventListener('click', ()=>{
  store.dispatch(decrement());
})





