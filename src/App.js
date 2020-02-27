import React, { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Result from './components/Result';

      class App extends Component {       
        constructor(){
        super();

        this.state={
        result:" "
      }
    }

    onClick = button => {

      if(button === "="){
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }

      else {
          this.setState({
              result: this.state.result + button
          })
      }
  };

    calculate = () => {
      var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }
      try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(checkResult) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  reset = () => {
      this.setState({
          result: ""
      })
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };


        render() {
          return (
            <div className="calculator">
              <h1>Calculator</h1>
              <Result result={this.state.result}/>
              <Keypad onClick={this.onClick}/>

            </div>
          );
        }
      }
          
      export default App;
     