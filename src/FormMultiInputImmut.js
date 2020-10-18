import React from 'react';
import '../src/index.css';

//TO BE UPDATED with useState Hooks vs. Object https://bigcodenerd.org/single-on-change-handler-react-js/

class FormMultiInputImmut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {
                user1: {
                    name: "",
                    email: "",
                    password: "",
                },
            },
        }
        
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
    }
    
    mySubmitHandler = (event) => {
        event.preventDefault();
        
    }
    
    myChangeHandler = (a, b, c) => {
        const users = { ...this.state.users };
        users.user1.name = a.target.value;
        users.user1.email = b.target.value;
        users.user1.password = c.target.value;
        //let nam = event.target.name;
        //let val = event.target.value;
        this.setState({users: users});
    }
    
    render() {
        return (
            <div className="container">
                <div className="form-input">
                    <h1>Input</h1>
                    <form>
                        <label>
                        Name: 
                        <input type="text" name="name" onChange={this.myChangeHandler} />
                        </label>
            <br /><br />
                        <label>
                        E-mail: 
                        <input type="text" name="email" onChange={this.myChangeHandler} />
                        </label>
            <br /><br />
                        <label>
                        Password: 
                        <input type="text" name="password" onChange={this.myChangeHandler} />
                        </label>
                    </form>
                </div>
                <div className="form-output">
                    <h1>Output</h1>
                    <p>Name: {this.state.users.user1.name}</p>
                    <p>E-Mail: {this.state.users.user1.email}</p>
                    <p>Password: {this.state.users.user1.password}</p>
                </div>
            </div>
        )
    }
}

export default FormMultiInputImmut;