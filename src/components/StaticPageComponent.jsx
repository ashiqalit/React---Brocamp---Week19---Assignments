import { Routes, Route, Link } from "react-router-dom"
import '../App.css'
import ProfileCard from "./reusable-components"
import CounterComponent from "./CounterComponent"
import EnhancedCounterComponent from "./EnhancedCounterComponent"
import Form from "./Form"

function StaticPageComponent() {
  const data = [
    { id: 1, name: "Ashiq", email: "ashiq@gmail.com" },
    { id: 2, name: "Shamnad", email: "shamnad@gmail.com" }
  ]

  return (
    <div className='App'>
      {data.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          email={profile.email}
        />
      ))}
      <button type="button">
        <Link to={'/components/CounterComponent'}>Counter</Link>
      </button>
      <button type="button">
        <Link to={'/components/EnhancedCounterComponent'}>Enhanced Counter</Link>
      </button>
      <button type="button">
        <Link to={'/components/FormComponent'}>Form</Link>
      </button>

    </div>
  )
}

export default StaticPageComponent
