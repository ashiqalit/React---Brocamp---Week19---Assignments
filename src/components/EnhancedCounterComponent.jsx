import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import ProfileCard from './reusable-components'

function EnhancedCounterComponent() {
  const [count, setCount] = useState(1)
  const [userData, setUserdata] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(false);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((response) => response.json())
      .then((data) => {
        setUserdata(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch the data')
        setLoading(false)
      })
  }, [count])

  const increment = () => setCount((prev) => Math.min(prev + 1, 10))
  const decrement = () => setCount((prev) => Math.max(prev - 1, 1))
  return (
    <div className='App'>
      <h2>{count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <ProfileCard
          name={userData.name}
          email={userData.email}
        />
      )}
      < div >
      <button type="button">
        <Link to={'/'}>Static</Link>
      </button>
      <button type="button">
        <Link to={'/components/CounterComponent'}>Counter</Link>
      </button>
      <button type="button">
        <Link to={'/components/FormComponent'}>Form</Link>
      </button>
      </div >
    </div>
  )
}

export default EnhancedCounterComponent
