import React ,{Component} from "react";
class Con extends Component{
    constructor(){
        super()
        this.state={movie:"   LEO"}
    }
    render(){
        return (<div>my fav movie{this.state.movie}</div>)

    }
}
export default Con