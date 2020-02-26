import React from 'react'
import {connect} from 'react-redux'

const CounterComponent = (props) => {
  const {count, dispatchIncrement, dispatchDecrement} = props
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={dispatchIncrement}>Increment</button>
      <button onClick={dispatchDecrement}>Decrement</button>
    </>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchIncrement: () => dispatch({type:'INCR'}),
    dispatchDecrement: () => dispatch({type: 'DECR'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent)
