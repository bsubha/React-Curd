import React,{useEffect,useState} from 'react'
import { Button, Table } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../App.css'

function Read() {
    const btncolor = {
        color: "white",
        backgroundColor: "green",
        padding: "10px",
        
      };
      const btncolor1 = {
        color: "white",
        backgroundColor: "red",
        padding: "10px",
       
      };
     
    const[post,setPost]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
           setPost(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])
    const setId=(id,title,body)=>{
        localStorage.setItem("Id",id)
        localStorage.setItem("title",title)
        localStorage.setItem("body",body)
    }
    const getData=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setPost(res.data)
         })
         
    }
    const onDelete=(id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(()=>{
            getData();
        })
        
    }
  return (
    <div>
        <Table stackable  id="customers">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Body</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {post.map((posts)=>{
            return(<Table.Row key={posts.id}>
                <Table.Cell>{posts.id}</Table.Cell>
                <Table.Cell>{posts.title}</Table.Cell>
                <Table.Cell>{posts.body}</Table.Cell>
                <Table.Cell><Link to="/update" ><Button style={btncolor} onClick={()=>setId(posts.id,posts.title,posts.body)}>Update</Button></Link></Table.Cell>
                <Table.Cell><Button  style={btncolor1 }  onClick={()=>onDelete(posts.id)}>Delete</Button></Table.Cell>
              </Table.Row>)
        })}
      
     
      
     
    </Table.Body>
  </Table>
    </div>
  )
}

export default Read