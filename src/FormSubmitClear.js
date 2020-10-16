import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class FormSubmitClear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {
                user1: {
                    name: "Your name",
                },
            },
        };
        
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }
    
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert(`You are submitting ${this.state.users.user1.name}.`); //Kiíratjuk, hogy elküldjük ezt a nevet - valójában nem küldjük el sehova az előző parancs miatt.
        const users = { ...this.state.users }; //A form kiürítéséhez az immutability szabály miatt először másoljuk a state értékét. 
        users.user1.name = ""; //Az előbb megadott users konstans user1.name attribute-ját egyenlővé tesszük ""-vel, azaz üres értéket rendereljen ki az XML. 
        this.setState({users: users}); //A setState() metódussal kapcsoljuk hozzá a fenti értéket a state-hez. 
    }
    
    myChangeHandler = (event) => {
        const users = { ...this.state.users }; //Létrehozok egy users constant-t, aminek az értéke a state-ben lévő users objektum
        users.user1.name = event.target.value; //A users constant user1.name attribut-ja vegye fel az input mező mindenkori értékét
        this.setState({users: users}); //A state-ben lévő users objektum értéke vegye fel a users constant értékét
    }
    
    render() {
        return (
            <div className="container">
                <div className="form-input">
                    <h1>Form</h1>
                    <form onSubmit={this.mySubmitHandler}>
                        <label>
                        Name: 
                            <input type="text" value={this.state.users.user1.name} onChange={this.myChangeHandler} />
                            <input type="submit" />
                        </label>
                    </form>
                </div>
                <div className="form-output">
                    <h1>Output</h1>
                    <p>Name: {this.state.users.user1.name}</p>
                </div>
            </div>
        )
    }
}

export default FormSubmitClear;