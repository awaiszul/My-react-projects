import React from 'react'
import './Navbar.css'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>

      <div className="nav-left flex-div">
        <img className='menu' onClick={()=>setSidebar(prev=>prev===false?true:false)} src="../../Images/menu.png" alt="" />
        <Link to={"/"} className='logo'>
            <span className='span'>my</span> 
            <span className='span'>Youtube</span> 
            </Link>
      </div>

      <div className="nav-middle flex-div search-box">
        <input className='search' type="text" placeholder='search' />
        <img src="../../Images/search.png" alt="" />
      </div>

      <div className="nav-right flex-div">
        <img src="../../Images/icons (4).png" alt="" />
        <img src="../../Images/notification.png" alt="" />
        <img src="../../Images/icons (5).png" alt="" />
        <img className='user-icon' src="../../Images/acc.jfif" alt="" />
      </div>
    </nav>
  )
}

export default Navbar
