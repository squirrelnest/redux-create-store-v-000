function createStore(reducer) {

  let state;

  function dispatch(action){
    state = reducer(state, action)
    render()
  };

  function getState() {
    return state;
  };

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState
  };

};

function render(){
  let container = document.getElementById('container')
  container.textContent = store.getState.count
}

function changeCount(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

let store = createStore(changeCount);
let button = document.getElementById('button');

button.addEventListener('click', function(){
  store.dispatch({type: 'INCREASE_COUNT'})
});
