import React from 'react'
import Contact from './formComponents/Contact'
import Education from './formComponents/Education'
import Experience from './formComponents/Experience'
import Name from './formComponents/Name'
import Photo from './formComponents/Photo'
import Summary from './formComponents/Summary'

export default function Form(props) {
    

    return (
        <form className='my-2'>
            <Name mode={props.mode} />
            <Summary mode={props.mode}/>
            <Contact mode={props.mode}/>
            <Experience mode={props.mode}/>
            <Education mode={props.mode}/>
            <Photo mode={props.mode}/>

            <button type="submit" className="btn btn-primary">Preview</button>
        </form>
    )
}

