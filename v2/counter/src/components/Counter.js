// components/Counter.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      // valueが奇数の場合のみonIncrementを実行
      this.props.onIncrement()
    }
  }

  incrementAsync = () => {
    // 1秒後にonIncrementを実行
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    // 描画処理
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

export default Counter