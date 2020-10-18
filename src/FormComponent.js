import React from 'react';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myChangeHandler = this.myChangeHandler.bind(this);
    }
    
    myChangeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.props.stateUpdate(name, value);
    }
    
    render() {
        return (
            <div className="container">
                <div className="form-input">
                    <h1>Form</h1>
                    <form>
                        <label>
                        Name: 
                            <input 
                                type="text"
                                name="username" 
                                value={this.props.username} 
                                onChange={this.myChangeHandler} 
                            />
                        </label>
                    </form>
                </div>
                <div className="form-output">
                    <h1>Output</h1>
                    <p>Name: {this.props.username}</p>
                </div>
            </div>
        )
    }
}

export default FormComponent;