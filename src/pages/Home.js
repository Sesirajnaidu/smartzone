import React from 'react'


const Home = () => {
  return (
    <div>
    <nav className='nav'>
    <div>EN<input placeholder='select your language' id='lan'></input></div> 
    <div id="logo">SmartZone </div> 
    <div><button>Login</button><button>Sign-up</button></div> 
    </nav>
    <div className='signup'>
        <h1>SIGN-UP</h1>
        <p>Firstname<input placeholder=' Enter your firstname'/></p><p>Lastname<input placeholder=' Enter your Lastname'/></p>
        <p>Email<input placeholder='Enter your email-address'/></p><p>Phonenumber<input placeholder='Enter your phonenumber' /></p> 
        <p>Password<input placeholder='Enteryourpassword'/></p><p>Confirm password<input placeholder='Confirm your password' /></p>
        
          </div>
    
    </div>
  )
}

export default Home

