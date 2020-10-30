import "../styles/Error.css"
import React from 'react'


const Error = (props)=>{
    return(
        <div className = "Error">
            <h1>{props.message}</h1>
        </div>
    )
}

export default Error