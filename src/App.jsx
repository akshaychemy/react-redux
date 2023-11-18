import { useState } from 'react'

//===redux part
import { useContext, useReducer } from "react";
import { useSelector } from "react-redux";
import { ExampleReducer_INITIAL_STATE,ExampleReducer } from './reducer';

function App() {
  const [count, setCount] = useState(0)
  const [state,dispatch] =useReducer(ExampleReducer,ExampleReducer_INITIAL_STATE)

//const { name,age } = useSelector((state) => state);

  console.log(state)

  const ExampleFunction =(e)=>{
    console.log("clicked")
    dispatch({
      type:"PUT_DATA",
      payload:{
        name:"akshay",
        age:25
      }
    })
  }

  return (
    <>
      <div>
        <h5>user Data {state.name} </h5>
      </div>
      <div className="card">
        <button onClick={ExampleFunction}>
          Update 
        </button>
      </div>
    </>
  )
}

export default App
