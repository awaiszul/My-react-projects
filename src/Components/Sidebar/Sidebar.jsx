import React from 'react'
import './Sidebar.css'
const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-links ${category===0?"active":""}`} onClick={()=>setCategory(0)} >
            <img src="./Images/1 (1).png" alt="" /> <p>Home</p>
        </div>
        <div className={`side-links ${category===20?"active":""}`} onClick={()=>setCategory(20)} >
            <img src="./Images/1 (9).png" alt="" /> <p>Games</p>
        </div>
        <div className={`side-links ${category===2?"active":""}`} onClick={()=>setCategory(2)} >
            <img src="./Images/1 (3).png" alt="" /> <p>Automobiles</p>
        </div>
        <div className={`side-links ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
            <img src="./Images/1 (8).png" alt="" /> <p>Sports</p>
        </div>
        <div className={`side-links ${category===24?"active":""}`} onClick={()=>setCategory(24)} >
            <img src="./Images/1 (5).png" alt="" /> <p>Entertaiment</p>
        </div>
        <div className={`side-links ${category===28?"active":""}`} onClick={()=>setCategory(28)} >
            <img src="./Images/1 (4).png" alt="" /> <p>Technology</p>
        </div>
        <div className={`side-links ${category===10?"active":""}`} onClick={()=>setCategory(10)} >
            <img src="./Images/1 (6).png" alt="" /> <p>Music</p>
        </div>
        <div className={`side-links ${category===22?"active":""}`} onClick={()=>setCategory(22)} >
            <img src="./Images/1 (2).png" alt="" /> <p>Blogs</p>
        </div>
        <div className={`side-links ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
            <img src="./Images/1 (3).png" alt="" /> <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-links">
        <img src="./Images/account.png" alt="" /> <p>PewDiePie</p>
        </div>
        <div className="side-links">
        <img src="./Images/account.png" alt="" /> <p>Mr Beast</p>
        </div>
        <div className="side-links">
        <img src="./Images/account.png" alt="" /> <p>Jesten Beber</p>
        </div>
        <div className="side-links">
        <img src="./Images/account.png" alt="" /> <p>Ducky bie</p>
        </div>
        <div className="side-links">
        <img src="./Images/account.png" alt="" /> <p>5-minute Craft</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
