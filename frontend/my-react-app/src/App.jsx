import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios, { AxiosError } from 'axios'
import { useEffect } from 'react'

function App() {
const [jokes,setJokes] = useState([])
useEffect(()=>{
  axios.get('http://localhost:3000/jokes')
  .then((response)=>{
    setJokes(response.data)
  }
)
 .catch((error)=>{
  console.log(error)
})
})
  return (
    <>
    <h1>Chai and full stack</h1>
    <p>jokes:{jokes.length}</p>
    {
      jokes.map((jokes, index)=>{
        <div key ={jokes.id}>
          <h3>{jokes.title}</h3>
          <h3>{jokes.content}</h3>
        </div>
      })
    }
    </>
  )
}

export default App
