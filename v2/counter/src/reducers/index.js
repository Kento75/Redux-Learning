// reducers/index.js
export default (state = 0, action) => {
    // stateの初期値を0に設定
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }