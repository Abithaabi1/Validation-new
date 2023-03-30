import { Button,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sample = () => {
  var[input,setInput]= useState();
  var[input2,setinput2]=useState()
    const inputHandle = (event)=> {
      setInput(event.target.value)
      console.log(input)

    }

    const inputHandle2 =(e)=>{
        setinput2(e.target.value)
    }
  return (
    <div>
        <Typography> {input} </Typography>
        <Typography> {input2}</Typography>
        <TextField variant='outlined' label='First Name'  onChange={inputHandle}/>
        <br></br>
        <br></br>
        <TextField variant='outlined' label='Second Name'  onChange={inputHandle2}/>
        <br></br>
        <Button variant="contained">submit</Button>
    </div>
  )
}

export default Sample