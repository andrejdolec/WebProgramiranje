import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Counter value is {this.state.counter}</h2>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div >
        )
    }

}

export default Counter;