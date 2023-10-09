import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Login = () => {
  return (
    <LoginContainer>
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque debitis? Perspiciatis iusto reprehenderit repellat officia aspernatur corrupti repudiandae temporibus nisi veritatis eos culpa, doloremque deserunt magni, nam, quod accusamus.</p>
                <span>Don't you have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text"placeholder='yourname' />
                    <input type="password"placeholder='password' />
                    
                    <button>Login</button>
                   
                </form>
            </div>
        </div>
    </div>
    </LoginContainer>
  )
}
const LoginContainer=styled.div`
    .login{
        height:100vh;
        background-color:rgb(193,290,255);
        display:flex;
        align-items:center;
        justify-content:center;
        .card{
            display:flex;
            width:70%;
            height:90vh;
            background-color:white;
            border-radius:10px;
            overflow:hidden;
            .left{
                flex:1;
                background: linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url("https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600") center;
                background-size:cover;
                padding:0 40px;
                display:flex;
                flex-direction:column;
                gap:10px;
                color:white;

                h1{
                margin-top:10px;
                font-size:100px;
                line-height:100px;
                }

                p{
                    margin-top:-30px;
                }

                span{
                    font-size:14px;
                }

                button{
                    width:50%;
                    padding:10px;
                    border:none;
                    background-color:white;
                    color:purple;
                    font-weight:bold;
                    cursor:pointer;
                }
            }
            .right{
                flex:1;
                display:flex;
                flex-direction:column;
                gap:10px;

                h1{
                    padding:20px;
                    justify-content:center;
                }
                form{
                    display:flex;
                    flex-direction:column;
                    gap:30px;
                    padding:20px;
                    justify-content:center;

                    input{
                        border:none;
                        border-bottom:1px solid lightgray;
                        padding:20px 10px;
                    }

                    button{
                        width:70%;
                        padding:15px;
                        border:none;
                        background-color:#7766f6;
                        color:white;
                        font-weight:bold;
                        cursor:pointer;
                    }
                }
            }
        }

    }
`;
export default Login