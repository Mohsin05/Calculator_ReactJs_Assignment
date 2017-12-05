import React, { Component } from 'react';
// import logo from './logo.svg';
/*
import './App.css';
We dont need the css here, we only need to include that in the main component only*/



class calculator extends Component {

    render() {


         return (
            <div className="calc-contain">
                {/*{this.props.todo.map((todo) => todo.tool)}*/}


                <form name="calculator">
                    <input type="text" name="answer" />
                    <br/>
                    <input type="button" value=" 1 "/>
                    <input type="button" value=" 2 " />
                    <input type="button" value=" 3 "/>
                    <input type="button" value=" + "/>
                    <br/>

                    <input type="button" value=" 4 "/>
                    <input type="button" value=" 5 "/>
                    <input type="button" value=" 6 "/>
                    <input type="button" value=" - "/>

                    <br/>
                    <input type="button" value=" 7 "/>
                    <input type="button" value=" 8 "/>
                    <input type="button" value=" 9 "/>
                    <input type="button" value=" x "/>
                    <br/>

                    <input type="button" value=" c "/>
                    <input type="button" value=" 0 "/>
                    <input type="button" value=" = "/>
                    <input type="button" value=" / "/>
                    <br/>
                </form>

            </div>
        );
    }
}

export default calculator;
