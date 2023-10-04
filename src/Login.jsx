import React,{useState} from 'react'

const Login = (props) => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email)
        console.log(password)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} >
            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email' />
            <label htmlFor="">Password</label>
            <input type="password" value={password}
            onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' />
            <button type='submit'>Login</button>
        </form>
        <button onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register here </button>
    </div>
  )
}

export default Login