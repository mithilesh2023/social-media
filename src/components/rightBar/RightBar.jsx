import React from 'react'
import styled from 'styled-components'

const RightBar = () => {
  return (
    <RightContainer>
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
              
                <span>Jone Doe</span> <span style={{color:'gray'}}> Change their cover picture </span>
              
            </div>
           <span style={{color:'gray'}}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              
                <span>Jone Doe</span> <span style={{color:'gray'}}> Change their cover picture </span>
              
            </div>
           <span style={{color:'gray'}}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              
                <span>Jone Doe</span> <span style={{color:'gray'}}> Change their cover picture </span>
              
            </div>
           <span style={{color:'gray'}}>1 min ago</span>
          </div>
        </div>
      </div>
     </div>
   </RightContainer>
  )
}
const RightContainer=styled.div`
  .rightBar{
    flex:3;
    position:sticky;
    top:70px;
    height:calc(100vh-70px);
    overflow:scroll;
    &::-webkit-scrollbar{
        display:none;
    };

    .container{
      padding:20px;

      .item{
        -webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.09);
        -moz-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.09);
         box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.09);
        padding:15px;

        span{
        font-weight:500;

        }

          .user{
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin:20px 0px;
            font-weight:500;
            gap:60px;


            .userInfo{
              display:flex;
              align-items:center;
              gap:10px;
              p{
                color:gray;
              }
              img{
                width:40px;
                height:40px;
                border-radius:50%;
                object-fit:cover;

                p{
                  color:gray;
                }

                span{
                  font-weight:500;
                }

              }
            }

            .buttons{
              display:flex;
              align-items:center;
              gap:10px;

              button{
                border:none;
                padding:5px;
                color:white;
                cursor:pointer;

                &:first-child{
                  background-color:#5271ff;
                }
                &:last-child{
                  background-color:#f0544f;
                }
              }
            }
          }
        }
    }
  }
`;

export default RightBar