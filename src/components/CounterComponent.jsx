import { useState } from 'react'
import '../App.css'
import { Routes, Route, Link } from "react-router-dom"

function CounterComponent() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <div>
        <button type="button">
          <Link to={'/'}>Static</Link>
        </button>
        <button type='button'>
          <Link to={'/components/EnhancedCounterComponent'}>Enhanced Counter</Link>
        </button>
        <button type="button">
          <Link to={'/components/FormComponent'}>Form</Link>
        </button>
      </div>
    </>
  )
}

export default CounterComponent
