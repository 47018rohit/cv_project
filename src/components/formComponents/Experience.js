import React, { useState } from 'react'

export default function Experience(props) {
    const[company,setCompany]=useState('')
    const[occupation,setOccupation]=useState('')

    const handleCompany =(event)=>{
        setCompany(event.target.value)
        assignCompany(event.target.value)
    }
    const handleOccupation =(event)=>{
        setOccupation(event.target.value)
        assignOcupation(event.target.value)
    }

    const assignCompany=(data)=>{
        document.getElementById('company-data').innerText = data;
    }
    const assignOcupation=(data)=>{
        document.getElementById('occupation-data').innerText = data;
    }
    return (
        <>
            <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h5>Experience</h5>
                <input className="form-control my-1" type="text" placeholder="Organisation" id='company' value={company} onChange={handleCompany} aria-label="default input example" />
                <input className="form-control my-1" type="text" placeholder="Job profile" id='occupation' value={occupation} onChange={handleOccupation} aria-label="default input example" />
                <button className="btn btn-outline-success">Add More</button>
            </div>
        </>
    )
}
