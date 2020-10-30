import "../styles/Season.css"
import React from "react"
const SeasonConfig = {
    Summer : {
        text : "Let's hit the beach !!",
        icon : "sun"
    },
    Winter : {
        text : "Burrr, it's chilly !!",
        icon : "snowflake"
    }
        
}
const getSeason = (lat,month)=>{
    if(month >2 && month <9)
        return(lat>0?"Summer" : "Winter")
    else 
        return(lat>0?"Winter" : "Summer")
}
const Season = (props)=>{
    const season = getSeason(props.lat,new Date().getMonth())
    const {text,icon} = SeasonConfig[season]
    
    
    return(        
        <div className={`Season-display ${season}`}>
            <i className={`icon-left ${icon} icon massive`}/>
           <h1>{text}</h1> 
            <i className={`icon-right ${icon} icon massive`} />
        </div>
    )
}

export default Season