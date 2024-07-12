import React, { useRef, useState } from 'react'
import '../Styles/createaccount.css'
import { useNavigate } from 'react-router-dom'

const CreateAccount = () => {
  let email=useRef()
  let password=useRef()
  let navigate=useNavigate()
  let[num,setNum]=useState(0)

  let handleClick=()=>{
    setNum(num)
    
  }

  let handleSubmit=async(e)=>{
    e.preventDefault()

    let inputData={
      id:num,
      email :email.current.value,
      password: password.current.value
    }
    

    await fetch(`http://localhost:4000/UserData`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(inputData)
    })
    navigate('/')
    num+=1
  }
  return (
    <>
     <div className="create-acc">
      <div className="acc-conatiner">
        <h2>Create-Account</h2>
        <form action="" onSubmit={handleSubmit}>
          <input ref={email} type="email" placeholder='enter your email' />
          <input ref={password} type="password" placeholder='create password'/>
          <button onClick={handleClick}>Create</button>
        </form>
      </div>
     </div>
    </>
  )
}

export default CreateAccount
