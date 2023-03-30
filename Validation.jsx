import {  Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validation = () => {
    var[submitted,setSubmitted] =useState(false)
        var[value,setValue]=useState({
       fname:''

    })
    var[validation,setValidation] = useState({
        fname:''
    })
    const checkValidation = ()=>{
        let error = validation;
        if(!value.fname.trim()){
            error.fname="Enter the First Name"
        }else{
            error.fname=""
        }
   setValidation(error);
    }
    useEffect(() => {
   
    checkValidation()
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted(true)
    }
    const handleInput=(e)=>{
        const{name,value}=e.target
        setValue({...value,[name]:value})
        console.log(value)
    }

  
  return (
    <div>
<form onSubmit={handleSubmit}>

<TextField label='First Name' name='fname' value={value.fname} onChange={handleInput} ></TextField>
<br></br>
{(validation.fname && submitted) && <p>{validation.fname}</p>}
<Button variant='contained' type='submit' color='primary'>Submit</Button>
</form>

    </div>
  )
}

export default Validation