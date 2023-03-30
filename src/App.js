import React, { useState } from "react";
import "./App.css";

const App = () => {
  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]

  const [text, setText] = useState('')
  let [counter, setCounter] = useState(0)

  const changeText = () => {
    setText(<h1>Al Rey <span className='king'>{reyesGodos[counter].nombre}</span> le gusta <span className='hooby'>{reyesGodos[counter].aficion}</span></h1>)
    increment()
  }

  const increment = () => { 
    counter < reyesGodos.length - 1
    ?
    setCounter(++counter)
    :
    setCounter(0)

    
  }
  return (
    <>
    <div>
      <button onClick={ changeText }>Ver siguiente</button>
      <div>{ text }</div>
    </div>
    
    </>
  )
}

export default App;
