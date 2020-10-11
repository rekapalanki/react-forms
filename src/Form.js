import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { property1: "value" }
    }
    
    render() {
        return (
            <React.Fragment>
            <div class="container">
                <div class="form-input">
                    <h1>Form</h1>
                    <form>
                        <label>
                        Name: 
                            <input type="text" />
                        </label>
                    </form>
                </div>
                <div class="form-output">
                    <h1>Output</h1>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Form;