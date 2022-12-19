import React, { useState } from 'react'
export default function Contact(props) {
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')

    const handleEmail =(event)=>{
        setEmail(event.target.value)
        assignEmail(event.target.value)
    }
    const handlePhone =(event)=>{
        setPhone(event.target.value)
        assignPhone(event.target.value)
    }

    const assignEmail=(data)=>{
        document.getElementById('email-data').innerText = data;
    }
    const assignPhone=(data)=>{
        document.getElementById('phone-data').innerText = data;
    }

    return (
        <>
            <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h5>Contact Info.</h5>
                <input className="form-control my-1" type="email" placeholder="Email" id='email' value={email} onChange={handleEmail} aria-label="default input example" />
                <input className="form-control my-1" type="phone" placeholder="Phone" id='phone' value={phone} onChange={handlePhone} aria-label="default input example" />
            </div>
        </>
    )
}
