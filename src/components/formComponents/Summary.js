import React,{useState} from 'react'

export default function Summary(props) {
    const [summary,setSummary] = useState('')

    const handleSummary =(event) =>{
        setSummary(event.target.value)
        assignSummary(event.target.value)
    }

    const assignSummary =(text)=>{
        document.getElementById('summary-text').innerText = text;
    }

    return (
        <>
            <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <label htmlFor="aboutYourself" className="form-label">Summary</label>
                <textarea className="form-control" id="aboutYourself" value={summary} onChange={handleSummary} rows="3"></textarea>
            </div>
        </>
    )
}
