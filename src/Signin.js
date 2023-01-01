import React from 'react';
import "./stylesignin.css";
import logo from "./img/logo.png";

function Signin(props) {
    return (
        <div className='container'>
            <div className='app'>
                <div className='logo'>
                    <img src={logo} alt=''></img>
                   <div className='logotitle'> <h1>Sign in</h1></div>
                </div>
                <form className='form-signin'>
                <div className='Email'>
                         <label className='Label'>Email</label> 
                         <input className='Input' type='Email'   />     </div>
                    <div className='Password'>
                         <label className='Label'>Password</label> 
                         <input className='Input' type='Password'/>     </div>

                <div className='remembox'>
                        <input type="checkbox" className="checkbox"checked=" checked"/>
                          <label className='rememberme'>Remember me</label>
                          </div>
                <div className='button'>
                        <button className='Submit' >Login</button>
                    </div></form>
                    
            </div>



        </div>
            
    
    );
}

export default Signin;