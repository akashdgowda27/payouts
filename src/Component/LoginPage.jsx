import React, { useEffect, useRef, useState } from 'react'
import '../Styles/loginpage.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  let email=useRef()
  let pass=useRef()
  let [validUser,setValiduser]=useState([])
  let homenav=useNavigate()

  useEffect(()=>{
    let fetchApi=async()=>{
      let resApi= await fetch(`http://localhost:4000/UserData`)
      .then((resp)=>resp.json())
      setValiduser(resApi)
    }
    fetchApi()
  },[])

  console.log(validUser);
  let handleSubmit=(e)=>{
    e.preventDefault()

    let userData={
      emi:email.current.value,
      passw:pass.current.value
    }
    let {emi,passw}=userData
    
    validUser.map((elem)=>{
      let {email,password}=elem
      if(email.includes(emi) && password.includes(passw)){
        alert('Welcome your login successfull')
        homenav('/home')
      }
      else{
        alert('enter correct credentials')
      }
    })
    
  }

  let navigate=useNavigate()
  let handleClick=()=>{
    console.log("hello");
    navigate('/createaccount')
  }
  return (
    <>
      <div className="loginpage">
        <div className="login-container">
          <div className="form">
            <form action="" onSubmit={handleSubmit}>
              <input ref={email} type="email" placeholder='enter your email'/>
              <input ref={pass} type="password" placeholder='enter your password'/>
              <button>SignIn</button>
            </form>
            <h3><span>Don't have an Account ?</span><a onClick={handleClick}>CreateAccount</a></h3>
          </div>
        </div>
      </div>
    </>
  )
}



export default LoginPage
