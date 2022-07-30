import React,{useState,useEffect} from 'react'
import { Button, Form,TextArea } from 'semantic-ui-react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Update() {
    const titlestyle={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px"
    }
    const formdatastyle={
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
    const navigate=useNavigate()
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')
    const[ID,setId]=useState(null)
   const submitData = ()=>{
    axios.put(`https://jsonplaceholder.typicode.com/posts/${ID}`,{
        title,
        body
    }).then(()=>
    navigate('/read'))
}
    useEffect(()=>{
        setTitle(localStorage.getItem('title'))
        setBody(localStorage.getItem('body'))
        setId(localStorage.getItem("Id"))
    
       
    },[])
  return (
    <div>
    <Form onSubmit={submitData} style={formdatastyle}>
    <Form.Field style={titlestyle}>
      <label style={{paddingRight:"30px"}}>Title:</label>
      <TextArea placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} rows="5"/>
      
    </Form.Field>
    <Form.Field style={titlestyle}>
      <label style={{paddingRight:"30px"}}>Body:</label>
      <TextArea placeholder='Body' value={body} onChange={(e)=>setBody(e.target.value)} rows="5"/>
      
    </Form.Field>
    <Button type='submit' style={{marginTop:"10px"}}>Update</Button>
  </Form>
    </div>
  )
}


export default Update