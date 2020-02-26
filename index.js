import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import CounterComponent from './CounterComponent'

const defaultState = {
  count: 10
}

const reducer = (state = defaultState, action) => {
  const stateCopy = {...state}
  if (action.type === 'INCR') {
    stateCopy.count += 1
  } else if (action.type === 'DECR') {
    stateCopy.count -= 1
  }
  return stateCopy
}

// Create store with initial state 10
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <CounterComponent/>
  </Provider>,
  document.getElementById("react-root")
)