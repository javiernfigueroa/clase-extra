import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='asd'>Hola</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} ></button >
    </>
  )
}

export default App
