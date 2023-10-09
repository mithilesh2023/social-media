import React from 'react'
import styled from 'styled-components'
import Friends from "../../images/1.png";
import Groups from "../../images/2.png";
import Market from "../../images/3.png";
import Watch from "../../images/4.png";
import Memories from "../../images/5.png";
import Events from "../../images/6.png";
import Gaming from "../../images/7.png";
import Gallery from "../../images/8.png";
import Videos from "../../images/9.png";
import Messages from "../../images/10.png";
import Tutorials from "../../images/11.png";
import Courses from "../../images/12.png";
import Fund from "../../images/13.png";
const LeftBar = () => {
    return (
        <LeftContainer>
            <div className="leftBar">
                <div className="container">
                    <div className="menu">
                        <div className="user">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Mithilesh</span>
                        </div>
                        <div className="item">
                            <img src={Friends} alt="" />
                            <span>Friends</span>
                        </div>
                        <div className="item">
                            <img src={Groups} alt="" />
                            <span>Groups</span>
                        </div>
                        <div className="item">
                            <img src={Market} alt="" />
                            <span>Marketplace</span>
                        </div>
                        <div className="item">
                            <img src={Watch} alt="" />
                            <span>Watch</span>
                        </div>
                        <div className="item">
                            <img src={Memories} alt="" />
                            <span>Memories</span>
                        </div>
                    </div>
                    <hr />
                    <div className="menu">
                        <span>Your Shortcuts</span>
                        <div className="item">
                            <img src={Events} alt="" />
                            <span>Events</span>
                        </div>
                        <div className="item">
                            <img src={Gaming} alt="" />
                            <span>Gaming</span>
                        </div>
                        <div className="item">
                            <img src={Gallery} alt="" />
                            <span>Gallery</span>
                        </div>
                        <div className="item">
                            <img src={Videos} alt="" />
                            <span>Videos</span>
                        </div>
                        <div className="item">
                            <img src={Messages} alt="" />
                            <span>Messages</span>
                        </div>
                        <div className="menu">
                            <span>Other</span>
                            <div className="item">
                                <img src={Fund} alt="" />
                                <span>Fundraiser</span>
                            </div>
                            <div className="item">
                                <img src={Courses} alt="" />
                                <span>Courses</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </LeftContainer>
    )
}
const LeftContainer = styled.div`

.leftBar{
    flex:2;
    position:sticky;
    top:70px;
    height:calc(100vh-70px);
    overflow:scroll;
    &::-webkit-scrollbar{
        display:none;
    };
   
    .container{
        padding:20px;

        hr{
            margin:20px 0px;
            border:none;
            height:0.5px;
            background-color:lightgray;
        }
    }
    .menu{
        display:flex;
        flex-direction:column;
        gap:20px;

        span{
            font-size:18px;
        }

        .user{
            display:flex;
            align-items:center;
            gap:10px;

            img{

                width:30px;
                height:30px;
                border-radius:50%;
                object-fit:cover;
            }
            span{}
        }
        .item{
            display:flex;
            align-items:center;
            gap:10px;

            img{
                width:30px;
            }

            span{
                font-size:14px;
            }
        }
    }
}

`;
export default LeftBar