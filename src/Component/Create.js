import React,{useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import '../App.css'

function Create() {
    const submitstyle ={
        width:"10%",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "14px 20px",
        margin: "8px 206px",
        border: "none",
        borderRadius :"4px",
        cursor: "pointer"
      }
    let navigate=useNavigate()
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')
   const submitData = (e)=>{
   
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title,
        body
    }).then(()=>navigate('/read'))
    }
  return (
   
    <Form onSubmit={submitData} style={{marginTop:"50px"}}>
    <Form.Field >
      <label style={{paddingRight:"30px"}}>Enter Title</label>
      <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
    </Form.Field>
    <Form.Field style={{marginTop:"10px"}}>
      <label style={{paddingRight:"30px"}}>Enter Body</label>
      <input type="text" placeholder='Body' value={body} onChange={(e)=>setBody(e.target.value)} required/>
    </Form.Field>
    <Button type='submit'  style={submitstyle}>Add</Button>
  </Form>
  
  )
}

export default Create