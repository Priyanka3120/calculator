import React, { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';
// import { addHistoryItem } from '../actions/History';
// import History from  './components/History';
// import Result from './components/Result';


// const mapDispatchToProps = (dispatch) => ({
//   addHistoryItem: expr => dispatch(addHistoryItem(expr))
// })
      class App extends Component {       
        constructor(props){
        super(props);

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
            //   eslint-disable-next-line
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
              <input name="calc" value={this.state.result} onChange={evt => this.updateresult(evt)} />
              <Keypad onClick={this.onClick}/>
            </div>
//             <ScrollView
//             ref={ref => this.scrollView = ref}
//             onContentSizeChange={(contentWidth, contentHeight)=>{        
//                 this.scrollView.scrollToEnd({animated: true});
//             }}>


//             {
//                 this.props.data.map((history, index) => (
//                     <View key={index} style={styles.historyCont}>
//                         <View style={styles.placeHolderHistory}>
//                             <View style={styles.expressionCont}>
//                                 <Text style={styles.txtExpression}>{history[0]}</Text>
//                             </View>
//                             <View style={styles.resultCont}>
//                                 <Text style={styles.txtResult}>{'='+history[1]}</Text>
//                             </View>
//                         </View>
//                     </View>
//                 ))
//             }
//         </ScrollView>
//         : 
//         <View style={styles.emptyHistoryCont}>
//             <Text style={styles.txtEmptyHistory}>NO HISTORY</Text>
//         </View>
//     }
// </View>
          );
        }
      }
          
      export default App;
     
