import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { property1: "value" }
    }
    
    render() {
        return <h1>Hello React!</h1>
    }
}

export default App;
