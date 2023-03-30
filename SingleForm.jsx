import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SingleForm = () => {
    var[input,setInput]=useState({
        value1:'',
        value2:'',
        value3:''

    })

    const inputHandler = (e)=>{
        const {name,value}= e.target
        setInput({...input,[name]:value})
    }




  return (
    <div>
<Typography>{input.value1}</Typography>
<TextField label='First Name' name='value1' value={input.value1} onChange={inputHandler}></TextField>
<br></br>
<Typography>{input.value2}</Typography>
<TextField label='Second Name' name='value2' value={input.value2} onChange={inputHandler}></TextField>
<br></br>
<Typography>{input.value3}</Typography>
<TextField label='Address' name='value3' value={input.value3} onChange={inputHandler}></TextField>
    </div>
  )
}

export default SingleForm