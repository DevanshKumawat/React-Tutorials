import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)


  //let counter = 15 || // 1). Using this the counter is updated but cannot be propagated in UI

  const addValue = () => {
    if(counter<20) setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter>0) setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button
        onClick={addValue}
      >Increase Value {counter}</button>
      <button
        onClick={removeValue}
      >Decrease Value{counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
