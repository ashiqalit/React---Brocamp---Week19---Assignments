import { Route, Routes } from 'react-router-dom'
import './App.css'
import FormComponent from './components/FormComponent';
import CounterComponent from './components/CounterComponent';
import StaticPageComponent from './components/StaticPageComponent';
import EnhancedCounterComponent from './components/EnhancedCounterComponent';

function App() {
  return (
      <Routes>
        <Route path='/' element={<StaticPageComponent/>} />
        <Route path='/components/CounterComponent' element={<CounterComponent/>} />
        <Route path='/components/EnhancedCounterComponent' element={<EnhancedCounterComponent/>} />
        <Route path='/components/FormComponent' element={<FormComponent/>} />
      </Routes>
  )
}

export default App
