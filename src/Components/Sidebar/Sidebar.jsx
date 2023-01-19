import React from 'react'
import "./Sidebar.css";
function Sidebar() {
  return (<>    <div className='sidebar'>
        <li className='brand'><h1>Integram</h1></li>
     <ul>
        <li><i class="bi bi-house-door"/><span>Home</span></li>
        <li><i class="bi bi-search"/><span>Search</span></li>
        <li><i class="bi bi-compass"/><span>Exploser</span></li>
        <li><i class="bi bi-film"/><span>reels</span></li>
        <li><i class="uil uil-facebook-messenger-alt"/><span>messages</span></li>
        <li><i class="bi bi-heart"/><span>notification</span></li>
        <li><i class="bi bi-plus-square"/><span>create</span></li>
        <li><i class="uil uil-user-circle"/><span>propfile</span></li>
     </ul>
         </div>
         <div className='side-res'>
         <ul>
        <li><i class="bi bi-house-door"/></li>
        <li><i class="bi bi-compass"/></li>
        <li><i class="bi bi-film"/></li>
        <li><i class="uil uil-facebook-messenger-alt"/></li>
        <li><i class="bi bi-plus-square"/></li>
        <li><i class="uil uil-user-circle"/></li>
     </ul>
         </div>
         </>

  )
}

export default Sidebar
