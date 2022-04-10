import React, { useEffect } from 'react'
 import {useState} from "react";
import Button from './Button'
import Header from './Header'
import Main from './Main'
import axios from 'axios';
const Container = () => {
    let [text,setText]=useState("")
    let [author,setAuthor]=useState("")
    let [loaded,isLoading]=useState(false)
    useEffect(()=>{
      isLoading(false)
      myFunction();
    },[])
  function myFunction(){
    isLoading(false)
     const url='https://api.quotable.io/random';
     axios.get(url).then(
       (res)=>{
         //console.log(res.data.author)
         setText(res.data.content)
         setAuthor(res.data.author)
        }
        
       ).catch(err=>console.log(err))
}
  return (
    <div >
        <Header />
        <Main text={text} author={author}/>
        <Button t={myFunction} />  
    </div>
  )
}

export default Container