import React, { useEffect, useState } from 'react'
import '../Styles/stocks.css'

const Stocks = () => {
  let [price,setPrice]=useState([])
  let [prc,setPrc]=useState()

  
  // setInterval(async()=>{
  //   let sPrice=Math.floor(Math.random()*1000)
  //   setPrc(sPrice)

  //   const newPrice=sPrice
    
  //   await fetch(`http://localhost:4000/Stocks`,{
  //     method:"POST",
  //     headers:{"Content-Type":"application/json"},
  //     body:JSON.stringify({price:prc})
  //   })
  // },3000)

  useEffect(()=>{
    let fetchApi=async()=>{
      let resApi=await fetch(`http://localhost:4000/Stocks`)
      .then(resp=>resp.json())
      .then((elem)=>{return setPrice(elem)})
      console.log(resApi);
      
      
    
    }
    fetchApi()
  },[price])
      
  console.log(price);
  return (
    <>
      <div className="stocks">
        <h1>Stock</h1>
        <div className="stock-container">
        {price.map((elem)=>{
            let {id,sname,price}=elem
            let num=()=>{Math.floor(Math.random()*1000)}
            return(
              <>
              <div className="stock-card">
                <p>{id}</p>
                <p>{sname}</p>
                <p>{ setInterval(()=>{
                        let ran=num()
                        if(ran<10000)
                          ran
                        else num()
                      },3000)}</p>
              </div>
              </>
            )
          })}
        </div>
      </div>
      
    </>
  )
}

export default Stocks
