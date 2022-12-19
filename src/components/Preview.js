import React from 'react'

export default function Preview(props) {
    const printPreview = () => {
        const printableContent = document.getElementById('previewPage').innerHTML;
        const originalContent = document.body.innerHTML;

        document.body.innerHTML = printableContent;
        window.print();
        document.body.innerHTML = originalContent;

    }

    return (
        <>
            <div style={Wrapper} id='previewPage'>
                <div style={PreviewFormat} >
                    <div style={Side} className="leftSide my-4">
                        <div className="name mb-3" style={{ display: 'flex', gap: '1rem', borderBottom: '5px solid gray' }}>
                            <h3 id='first-name'>FirstName</h3>
                            <h3 id='last-name'>LastName</h3>
                        </div>
                        <div className="summary mb-3" style={{ borderBottom: '5px solid gray' }}>
                            <h5>Summary</h5>
                            <p id='summary-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime itaque consectetur aliquid dolorum voluptate fugit enim exercitationem voluptatibus labore. Ratione, quo cumque dolor ea repudiandae, sed ducimus quibusdam enim alias placeat quae quisquam adipisci.</p>
                        </div>
                        <div className="experience mb-3" style={{ borderBottom: '5px solid gray' }}>
                            <h5>Experience</h5>
                            <p><strong>Company: </strong> <span id='company-data'>-</span> <br /><strong>Occupation: </strong> <span id='occupation-data'>-</span> </p>
                        </div>
                        <div className="education mb-3">
                            <h5>Education</h5>
                            <p><strong>College: </strong><span id='college-data'>-</span> <br /><strong>Specialization: </strong><span id='spec-data'></span> - </p>
                        </div>
                    </div>
                    <div className="rightSide my-4" style={Side} >
                        <div className="photo mb-5" style={{ width: '95%', aspectRatio: '1', borderRadius: '2rem', backgroundColor: 'red' }}></div>
                        <div className="contactInfo my-5">
                            <p>Email: <span id='email-data'></span></p>
                            <p>Phone: <span id='phone-data'></span></p>
                        </div>
                    </div>

                </div>
            </div>
            <button onClick={printPreview}>print</button>
        </>


    )
}



const Wrapper = {
    height: '100vh',
    borderRadius: '1rem',
    backgroundColor: 'rgba(138, 138, 138, 0.27)',
    backdropFilter: 'blur(3px)',

};

const PreviewFormat = {
    width: '95%',
    minWidth: '500px',
    aspectRatio: '1/1.414',
    backgroundColor: 'aliceblue',
    margin: '5% auto',
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    padding: '0.3rem',
    boxSizing: ' border-box',
};

const Side = {
    height: '100%',
    padding: '0.5rem', boxSizing: 'border-box'
};





