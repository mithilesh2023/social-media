import React from 'react'
import styled from 'styled-components'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarComponent>
    <div className='navbar'>
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
            <span>Social Media</span>
            </Link>
            <HomeOutlinedIcon/>
            <DarkModeOutlinedIcon/>
            <GridViewOutlinedIcon/>
            <div className="search">
                <input type="text" placeholder='search...' />
            </div>
        </div>

        <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>Mithilesh</span>
        </div>
        </div>
    </div>
    </NavbarComponent>
  )
}
const NavbarComponent=styled.div`
.navbar{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:40px;
    padding:10px 20px;
    border-bottom:1px solid lightgray; 
    background-color:white;
    position: sticky;
    top: 0;
   
.left{
    display:flex;
    align-itmes:center;
    gap:30px;

    span{
        font-weight:bold;
        font-size:20px;
    }

    .search{
        display:flex;
        align-items:center;
        gap:10px;
        border:1px solid lightgray;
        border-radius:5px;
        // padding:5px;

        input{
            border:none;
            width:500px;
            padding:8px;
            
        }
    }
}

.right{
    display:flex;
    align-items:center;
    gap:20px;

    .user{
display:flex;
align-items:center;
gap:10px;
font-weight:500px;

        img{
            width:40px;
            height:40px;
            border-radius:50%;
            object-fit:cover;
        }

        span{}
    }
}
}

`;
export default Navbar