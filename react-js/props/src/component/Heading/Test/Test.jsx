import React from "react";

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state  = {name : 'vishal'};
    }

    changeState(){
        this.setState({name : 'ajay'});
    }

    render(){
        return(
            <div>
                <h2>
                    helooo,{
                        this.state.name
                    }
                </h2>
                <button onClick={this.changeState.bind(this)}>Click</button>
            </div>  
        )
    }

    componentDidUpdate(){
        console.log('successfully');
    }
}
// Test();

export default Test