import React, { useRef } from 'react'
import '../Styles/buissnesspage.css'
import cash from '../Images/money.png'
import { useNavigate } from 'react-router-dom'

const BuissnessPage = () => {
  let comp=useRef()
  let acc=useRef()
  let navigate=useNavigate()
  let nav=useNavigate()


  // let handleStocks=()=>{
  //   nav('/home/stocks')
  // }
  
  let handleClick=()=>{

    let selection={
      com:comp.current.value,
      acnt:acc.current.value 
    }
    let{com,acnt}=selection

    if(com==='Company' && acnt==='Account1'){
      alert('Welcome to the company account')
      navigate('/home/stocks')
    }
    else if(com==='Company' && acnt==='Account2'){
      alert('Welcome to the company account')
      navigate('/buisspage/stocks')
      }
      else{
        navigate('/buisspage/stocks')
        return(
          <>
            <div className="createAcc">
              <label htmlFor="">Account Holder Name</label>
              <input type="text" placeholder='enter name'/>
              <label htmlFor="">Account number</label>
              <input type="text" placeholder='enter name'/>
              <button>Create Account</button>
            </div>
          </>
        )
      }

  }
  return (
    <>
      <div className="buissnesspage">
        <div className="top">
          <div className="top1">
            <div className="top1-1" >
             <form action="">
             <select name="Company" id="" ref={comp}>
              <option value="Company" selected>Company</option>
                <option value="Company1">Escrow</option>
                <option value="Company1">EazyPayout</option>
              </select>
              <button>OpenStocks</button>
             </form>
            </div>
            <div className="top1-2">
              <select name="Company" id="" ref={acc}>
                <option value="Account" selected>Account</option>
                <option value="acc1">Account1</option>
                <option value="acc2">Account2</option>
              </select>
            </div>
          </div>
          <div className="top2">
            <div className="balance">
              <div className="cash">
                <img src={cash} alt="💰" />
              </div>
              <div className="amount">
                <h5>Available Balance</h5>
                <input type="text"  />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </>
  )
}

export default BuissnessPage
