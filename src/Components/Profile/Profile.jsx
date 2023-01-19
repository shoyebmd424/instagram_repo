import React from 'react'
import "./Profile.css"
import profile from "../../All-images/profile.jpeg";
function Profile() {
  return (
    <div className='profile-com'>
            <div className='profile'>
                <div className='image'><img src={profile} alt="" /></div>
                <div className='profile-content'>
                    <div className='profile-name'> <p><span>virat.kohli</span> <i class="bi bi-check-circle-fill"></i> <button className='btn-primary'>Follow</button> <button><b>Messages</b></button>  <button><i class="bi bi-person-plus"></i></button></p>
                    </div>
                    <div className='follower'>
                        <div>1,502 Posts</div> <div>232M Followers
</div><div>262 Following</div>
                    </div>
                    <div>
                        <p>Virat Kohli</p>
                        <small>Carpediem!</small>
                        <p>
                        <a style={{textDecoration:"none"}} href="http://one8.com/.">one8.com</a>
                        </p>
                    </div>
                    <div><small>Followed by imhayat390, <b> sam.samar13, i_m_jaseem </b> + 5 more</small></div>


                </div>
            </div>

    </div>
  )
}

export default Profile
