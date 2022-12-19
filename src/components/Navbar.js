import React from 'react'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} `}>
            <div className="container-fluid ">
                <h1 className={`navbar-brand text-${props.mode==='light'? 'dark':'light'}`} href="/">Make<span style={{color: 'green'}}>CV</span></h1>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="form-check form-switch px-5">
                    <input className="form-check-input" type="checkbox" onChange={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode==='light'? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='light'? 'Dark':'Light'} Mode</label>
                </div>
            </div>
        </nav>
    )
}
