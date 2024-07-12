import React from 'react'
import '../Styles/navbar.css'
import logo from '../Images/escrow-com-logo-A5AA280C7E-seeklogo.com.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
     <div className="navbar">
        <div className="topnav">
            <div className="logo">
                <div className="img">
                    <img src={logo} alt="ESCROW" />
                </div>
                <div className="text">
                    <h2>EazyPayouts</h2>
                </div>
            </div>
            <div className="innernav">
                <div className="loads"><NavLink><i class="fa fa-arrow-circle-down" aria-hidden="true"></i>loads</NavLink></div>
                <div className="statements"><NavLink><i class="fa fa-stack-exchange" aria-hidden="true"></i>Statements</NavLink></div>
                <div className="transaction"><NavLink><i class="fa fa-exchange" aria-hidden="true"></i>Transaction</NavLink></div>
            </div>
        </div>
        <div className="logout">
            <NavLink to='/'><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</NavLink>
        </div>
     </div>
    </>
  )
}

export default NavBar
