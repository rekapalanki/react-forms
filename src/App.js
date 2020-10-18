import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormMultiInputImmut from './FormMultiInputImmut'
import ImmutableForm from './ImmutableForm'
import FormComponent from './FormComponent'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    stateUpdate = (name, value) => {
        this.setState({[name]: value})
    }
    
    render() {
        return <FormComponent username={this.state.username} />
    }
}

export default App;