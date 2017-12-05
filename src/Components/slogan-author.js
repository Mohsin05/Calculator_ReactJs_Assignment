import React, { Component } from 'react';
// import logo from './logo.svg';
/*
import './App.css';
We dont need the css here, we only need to include that in the main component only*/


class slogan_author extends Component {
    render() {
        return (
            <div className="Calculator">

                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2 className="App-title">Calculate Your Matters</h2><h4>By: {this.props.author}</h4>

            </div>
        );
    }
}

export default slogan_author;
