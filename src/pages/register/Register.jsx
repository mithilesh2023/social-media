import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss';
const Register = () => {
  return (
    <div className="register">
        <div className="card">
           
            <div className="left">
                <h1>Register</h1>
                <form action="">
                    <input type="text"placeholder='UserName' />
                    <input type="email"placeholder='Email' />
                    <input type="password"placeholder='Password' />
                    <input type="text"placeholder='Name' />
                   
                    <button>Register</button>
                  
                </form>
            </div>
            <div className="right">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque debitis? Perspiciatis iusto reprehenderit repellat officia aspernatur corrupti repudiandae temporibus nisi veritatis eos culpa, doloremque deserunt magni, nam, quod accusamus.</p>
                <span>Do you have an account?</span>
                <Link to="/login">
                <button>Register</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Register