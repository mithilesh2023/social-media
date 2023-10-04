import React,{useState} from 'react'

const Register = (props) => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[name,setName]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email)
        console.log(password)
    }
   
  return (
    <div className='auth-form'>
        <form action="" onSubmit={handleSubmit} >
        <label htmlFor="">Email</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter your name' />

            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email' />

            <label htmlFor="">Password</label>
            <input type="password" value={password}
            onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' />

            <button type='submit'>Login</button>
        </form>
        <button onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here </button>
    </div>
  )
}

export default Register