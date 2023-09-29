import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>The Last Chapter</h1>
      </div>
      <p className="read-the-docs">
        This is a book online book store
      </p>
    </>
  )
}

export default App
