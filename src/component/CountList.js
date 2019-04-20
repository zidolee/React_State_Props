import React, {Component} from 'react';

class CountList extends  Component {
    constructor(props) {
        super(props)    //component에 상속 받기때문에 부모에 props를 넘겨야 함
        this.state = {
            number : 0,
            result :0,
        }
        this.onClick = this.onClick.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
    }
    onClick() {
        this.setState({
            result : this.state.number
        })
    }
    onNumberChange(e) {
        this.setState({
            number: e.target.value
        })
    }
    render () {
        //const {number} =  this.state;   //같음
        return (
            <div>
                <div>
                    <input value={this.state.number} onChange={this.onNumberChange}></input>
                    <button onClick= {this.onClick}>Click</button>
                    </div>
                <div>
                    <h1>
                        {this.state.result} 
                    </h1>
                </div>
            </div>
        )
    }
}
// export default CountList;
// import CountList from './CountList'


export {
    CountList
};
// import {CountList} from './CountList'