import React from 'react'
import './rightBar.scss'

const RightBar = () => {
  return (
     <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Mithilesh</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Mithilesh</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <br />

        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                <span>Jone Doe </span>  <span style={{color:'gray'}}> cover picture </span> 
              </p>
              
            </div>
           <span style={{color:'gray'}}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                <span>Jone Doe </span>  <span style={{color:'gray'}}> cover picture </span> 
              </p>
              
            </div>
           <span style={{color:'gray'}}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                <span>Jone Doe </span>  <span style={{color:'gray'}}> cover picture </span> 
              </p>
              
            </div>
           <span style={{color:'gray'}}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                <span>Jone Doe </span>  <span style={{color:'gray'}}> cover picture </span> 
              </p>
              
            </div>
           <span style={{color:'gray'}}>1 min ago</span>
          </div>
        </div>

        

    <br />
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className='online'></div>
                <span>Jone Doe</span>
              
            </div>
           <span style={{color:'gray'}}>1 min ago</span>
          </div>
        </div>
      </div>
     </div>
  )
}


export default RightBar