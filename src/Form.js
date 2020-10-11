import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: "" }
    }
    
    myChangeHandler = (event) => {
        this.setState({username: event.target.value})
    }
    
    render() {
        return (
            <div className="container">
                <div className="form-input">
                    <h1>Form</h1>
                    <form>
                        <label>
                        Name: 
                            <input type="text" onChange={this.myChangeHandler} />
                        </label>
                    </form>
                </div>
                <div className="form-output">
                    <h1>Output</h1>
                    <p>Name: {this.state.username}</p>
                </div>
            </div>
        )
    }
}

export default Form;