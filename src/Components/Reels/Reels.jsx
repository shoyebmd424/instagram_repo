import React from 'react'
import { reelsdata } from '../Data/Data'

function Reels() {
  return (
    <div className='posts'>
    {reelsdata.map((data,key)=>(
    <div className='card' key={key}>      
          <div className='card-body'>
        <img   src={data.image} alt="" />
    </div>
    <div className='photo-icon'><i class="bi bi-images"></i></div>
    <div className='like-comment'>
   <div style={{margin:"auto"}}>   
    <span> <i class="bi bi-heart-fill"></i> {data.like} </span>
       <span style={{marginLeft:"1rem"}}><i class="bi bi-chat-dots-fill"></i> {data.like} </span>
       </div>
       </div>
    </div>
))}
</div>
  )
}

export default Reels
