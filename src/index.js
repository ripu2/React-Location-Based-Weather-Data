import React from "react"
import ReactDOM from "react-dom"
import Season from "./components/SeasonDisplay"
import Loading from "./components/LoadScreen"
import Error from "./components/ErrorScreen"
class App extends React.Component {
    state = {lat : null,lon: null,errorMessage : ''};
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({lat: position.coords.latitude})
                this.setState({lon : position.coords.longitude})
                
            },
            (error)=>  this.setState({errorMessage : error.message})
        )
        
    }
    componentDidUpdate (){
    }
    renderContent() {
        if(this.state.errorMessage && !this.state.lat && !this.state.lon){
            return (
                <Error message = {this.state.errorMessage} />
            )
            
        }
        if(this.state.lat && this.state.lon && !this.state.errorMessage){
            return(
                <Season  lat={this.state.lat} lon = {this.state.lon } />
            )
        }
        else {
            return (<Loading  message = "Please provide loaction Acess"/ >
            )
        }

    }
    
    //rule of class  to render
    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )  
        
    }
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
    );