import '../App.css'
import Form from './Form'
import { Routes, Route, Link } from "react-router-dom"
function FormComponent() {


  return (
    <>
      <Form />
      < div >
      <button type="button">
        <Link to={'/'}>Static</Link>
      </button>
      <button type='button'>
        <Link to={'/components/CounterComponent'}>Counter</Link>
      </button>
      <button type='button'>
        <Link to={'/components/EnhancedCounterComponent'}>EnhancedCounterComponent</Link>
      </button>
      </div >
    </>
  )
}

export default FormComponent
