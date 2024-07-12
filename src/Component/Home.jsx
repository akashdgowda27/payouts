import React, { useEffect, useRef, useState } from 'react'
import '../Styles/home.css'
import NavBar from './NavBar'
// import BuissnessPage from './BuissnessPage'
import { Route, Routes, useLocation } from 'react-router-dom'
import Stocks from './Stocks'
import '../Styles/buissnesspage.css'
import cash from '../Images/money.png'

const Home = () => {
  let [page,setPage]=useState(true)



  let comp=useRef()
  let acc=useRef()
  let navigate=useLocation()

  let handleClick=()=>{
    setPage(!page)
    // navigate('/home/stocks')
  }


  let [price,setPrice]=useState([])
  useEffect(()=>{
    let fetchApi=async()=>{
      let resApi=await fetch(`http://localhost:4000/Stocks`)
      .then(resp=>resp.json())
      // .then((elem)=>{return setPrice(elem)})
      setPrice(resApi)
      console.log(resApi);
      
      
    
    }
    fetchApi()
  },[price])


  let num=()=>{Math.floor(Math.random()*1000)}
  return (
   <>
   <div className="home">
    <NavBar />
    {/* {page ?  <BuissnessPage /> : <Stocks />} */}
    {page ?  
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
           <button onClick={handleClick}>OpenStocks</button>
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
     <div className="bottom">
      <div className="table-cont">
        <table border={1}>
          <thead>
            <tr>
              <th>id</th>
              <th>StockName</th>
              <th>transaction</th>
            </tr>
          </thead>
          <tbody>
            {price.map((elem)=>{
              const {id,sname,price}=elem
              return(
                <>
                  <tr>
                    <td>{id}</td>
                    <td>{sname}</td>
                    <td>{
                      setInterval(()=>{
                        let ran=num()
                        if(ran<10000)
                          ran
                        else num()
                      },3000)}</td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
     </div>
   </div>
    
    :
     <Stocks />}

    {/* <BuissnessPage /> */}
   

   </div>
   </>
  )
}

export default Home
