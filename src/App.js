import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
          persons:[
          {name:'Max', age: 28},
          {name:'Manu', age: 29},
          {name:'Stephanie', age: 26}
          ]
        }

  switchNameHandler = () => {
    this.setState({
      persons:[
      {name:'ABCD',age:28},
      {name:'ABCDEF',age:29},
      {name:'ABCDEFGH',age:26}
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
      {name:event.target.value,age:28},
      {name:event.target.value,age:29},
      {name:event.target.value,age:26}
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button style={style} onClick={this.switchNameHandler} >Switch Names </button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age} 
       click={this.switchNameHandler.bind(this,'Max!')}
       changed={this.nameChangedHandler} />
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age} 
       click={this.switchNameHandler.bind(this,'Max!')}
       changed={this.nameChangedHandler} />
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age} 
       click={this.switchNameHandler.bind(this,'Max!')}
       changed={this.nameChangedHandler} />
      </div>
    );
  }
}

export default App;
