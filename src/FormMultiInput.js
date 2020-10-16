import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class FormMultiInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Slim Shady",
            email: "slim@shady.org",
            address: "42 Wallaby Way, Sydney"
        }
        
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }
    
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert(`You are submitting following data: "Name: ${this.state.name}, E-mail: ${this.state.email}, Address: ${this.state.address}".`);
        this.setState({
            name: "",
            email: "",
            address: "",
        });
    }
    
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
        
    render() {
        return (
            <div className="container">
                <div className="form-input">
                    <h1>Input</h1>
                    <form onSubmit={this.mySubmitHandler}>
                    <label>
                        Name: 
                        <input type="text" name="name" value={this.state.name} onChange={this.myChangeHandler} />
                    </label>
                    <br /><br />
                    <label>
                        E-mail:
                       <input type="text" name="email" value={this.state.email} onChange={this.myChangeHandler} />
                    </label>
                    <br /><br />
                    <label>
                        Address:
                       <input type="text" name="address" value={this.state.address} onChange={this.myChangeHandler} />
                    </label>
                    <br /><br />
                    <input className="submit-button" type="submit" value="Submit" />
                    </form>
                </div>
                <div className="form-output">
                    <h1>Output</h1>
                    <p>Name: {this.state.name}</p>
                    <p>E-Mail: {this.state.email}</p>
                    <p>Address: {this.state.address}</p>
                </div>
            </div>
        )
    }
}

export default FormMultiInput;