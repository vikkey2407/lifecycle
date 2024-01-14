import React ,{Component}from "react";
class Change extends Component{
    constructor(){
        super()
        this.state={ actor:"thalapathy"}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({actor:"vijay"})
        },3000)
    }
    render(){
        return <div>my fav actor {this.state.actor}</div>
    }
}
export default Change