// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let myObj={
    username:"rameez",
    age:21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black'>Tailwind test</h1>
      <Card channel='rameez' someObj={myObj}/>
      <Card/>
    </>
  )
}

export default App
