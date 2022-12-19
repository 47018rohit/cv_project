import React, { useState } from 'react'

export default function Name(props) {

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');

    const handleFirst = (event) => {
        setFName(event.target.value);
        assignFName(event.target.value);
    };
    const handleLast = (event) => {
        setLName(event.target.value);
        assignLName(event.target.value);
    };
    

    function assignFName(name){
        document.getElementById('first-name').innerText = name;
    }
    function assignLName(name){
        document.getElementById('last-name').innerText = name;
    }

    return (
        <>
            <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" value={fName} onChange={handleFirst} aria-describedby="firstNameHelp" />
            </div>
            <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" value={lName} onChange={handleLast} aria-describedby="lastNameHelp" />
            </div>
            
        </>
    )
}
