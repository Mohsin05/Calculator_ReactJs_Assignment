import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Slogan from './Components/slogan-author';
import Todo from './Components/calculator';


class App extends Component {

  constructor(){
    super();
      this.state={

          todo:[ {
              tool: 'Summation',
              category: 'something'


          },{
              tool: 'Subtraction',
              category: 'something'
          },{
              tool: 'Multiplication',
              category: 'something'

          },{
              tool: 'Division',
              category: 'something'

          },]

      }
  }


  render() {
    return (
      <div className="container">

          <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to my Calculator</h1>
        </header>

          <Slogan author="Mohsin"/>

          </div>

          <div className="App">

              <Todo />

          </div>


      </div>


    );
  }
}

export default App;
