import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div>
      <nav>
        <ul className='navbar'>
            <li><Link to="/posts"><i class="bi bi-grid-3x3"></i> Posts</Link></li>
            <li><Link to="/reels"><i class="bi bi-film"></i> Reels</Link></li>
            <li><Link to="/taged"><i class="uil uil-user-square"></i> Taged</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
