import React, { useState } from 'react';
import "./styles.css"

function Form(props) {
    const [email,SetEmail]=useState("");
    const [password,SetPassword]=useState("");
    const [allEntry,SetAllEntry]=useState([]);
   const submitform=()=>{
    const newEntry ={email: email,password: password};
    SetAllEntry=([...allEntry,newEntry]);
   }


    return (
        <>
            <form className='loginform'  action='' onSubmit={submitform}>
                <div className='emailbox'>
                    <label  htmlFor='email'>Email</label>
                    <input type="text" name='email' id='email'autoComplete='off' value={email} onChange={(e)=>SetEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' id='password'autoComplete='off'value={password}onChange={(e)=>SetPassword(e.target.value)}/>
                </div>
                <button  className='submit' type='submit'>Login</button>
            </form>
        </>
    );
}

export default Form;