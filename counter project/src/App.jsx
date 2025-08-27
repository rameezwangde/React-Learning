import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const[counter,setCounter]=useState(0)
    
  // let counter=0

  const  addValue=()=>{
    console.log("clicked",counter);
    // counter+=1;
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
  }
  const subtractValue=()=>{
    console.log("De-clicked",counter);
    setCounter(counter-1);
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>

      <br/>
      <button
      onClick={subtractValue}
      >Decrease value</button>
    </>
  )
}

export default App
