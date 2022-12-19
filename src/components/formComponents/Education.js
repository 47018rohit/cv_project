import React, { useState } from 'react'

export default function Education(props) {
    const[college,setCollege]=useState('')
    const[spec,setSpec]=useState('')

    const handleCollege =(event)=>{
        setCollege(event.target.value)
        assignCollege(event.target.value)
    }
    const handleSpec =(event)=>{
        setSpec(event.target.value)
        assignOcupation(event.target.value)
    }

    const assignCollege=(data)=>{
        document.getElementById('college-data').innerText = data;
    }
    const assignOcupation=(data)=>{
        document.getElementById('spec-data').innerText = data;
    }
    return (
        <>
            <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h5>Education</h5>
                <input className="form-control my-1" type="text" placeholder="College" id='college' value={college} onChange={handleCollege} aria-label="default input example" />
                <input className="form-control my-1" type="text" placeholder="Specialization" id='specialization' value={spec} onChange={handleSpec} aria-label="default input example" />
                <button className="btn btn-outline-success">Add More</button>
            </div>
        </>
    )
}
