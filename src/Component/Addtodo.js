import React from 'react'
import {Button} from 'semantic-ui-react'
import { useNavigate } from "react-router-dom"

function Addtodo() {
    const navigate=useNavigate()
    const redirect=()=>{
        navigate('/create')
    }
  return (
    <div>
        <h1>React Todo App</h1>
    <Button onClick={redirect}>Add Todo</Button>
    </div>
  )
}

export default Addtodo