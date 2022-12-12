import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state = {count:0}

        this.addCount = this.addCount.bind(this)
    }

    addCount(){
        this.setState({count: this.state.count+1})
    }

    render(){
        return (
            <div>
                <div>你点击了{this.state.count}次</div>
                <button onClick={this.addCount}>再点一次</button>
            </div>
        );
    }
}

export default Counter;
