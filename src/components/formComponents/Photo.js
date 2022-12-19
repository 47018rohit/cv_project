import React from 'react'

export default function Photo(props) {
    return (
        <>
            <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <label htmlFor="photo" className="form-label">Upload Picture</label>
                <input className="form-control" type="file" id="photo" />
            </div>
        </>
    )
}
