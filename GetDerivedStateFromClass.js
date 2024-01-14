import React ,{Component}from "react";
class BeforeRender extends Component{
    constructor(props){
        super(props)
        this.state={favmovie:"  GOAT"}
    }
    // want before rendering movie name 
    static getDerivedStateFromProps(props,state){ // comment this goat will displays
        return {favmovie:props.favflim}
    }
    render(){
        return <div>fav movie{this.state.favmovie}</div>
    }
}
export default BeforeRender