import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class ImmutableForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {
                username: 'My name'
            }
        }
        
        this.myChangeHandler = this.myChangeHandler.bind(this)
    }
    
    myChangeHandler = (event) => {
        const person = { ...this.state.person }
        person.username = event.target.value //Immutable state: 
        this.setState({
            person: person
        })
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
                    <p>Name: {this.state.person.username}</p>
                </div>
            </div>
        )
    }
}

export default ImmutableForm;