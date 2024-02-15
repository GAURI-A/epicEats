import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="userCard">
                <h2>Name:{this.props.name}</h2>
                <h3>Location: </h3>
            </div>
        )
    }
} 
//user class update

export default UserClass