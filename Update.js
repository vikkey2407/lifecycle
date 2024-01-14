import React ,{Component} from "react";

class Update extends Component{
    constructor(props){
        super(props)
         this.state={
            movie:" = LEO"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return {movie:props.flim}

    // }
    ChangeFlim=()=>{
        this.setState({
            movie:"= gilli"
        });
    };
    shouldComponentUpdate(){
        return true
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                movie:" = ps1"  })
            
        },3000);
    }
    getSnapshotBeforeUpdate(preprops, prevstate){
        return (document.getElementById("div1").innerHTML="before update"+prevstate.movie);

    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML="after update"+this.state.movie
    }
    render(){
        return (<div><h1>fav movie{this.state.movie}</h1>
        <button onClick={this.ChangeFlim}>changemovie</button>
        <div id="div1">
        </div>
        <div id="div2">

        </div>
        </div>)
    }
}
export default Update