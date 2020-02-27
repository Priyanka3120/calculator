// state = {  
    //         calKeys:[  
    //             1,2,3,4,5,6,7,8,9,0 
    //           ],  
    //         displayValue:0,  
    //         prevVal:0, 
    //         signVal:''
    //       }
  
    //   handleKey = (val) => {  
    //     let displayVal = "" + this.state.displayValue;  
    //     displayVal += val;  
    //     this.setState({ displayValue:displayVal});  
    //  }  
       
    //  handleCKey =() => {  
    //     this.setState({displayValue:0})  
    //  }  
       
    //  handleSignKey =(sign) =>{  
    //     this.setState({prevVal: this.state.displayValue, displayValue:0, signVal:sign});  
    //  }  
       
    //  handleEqualsKey= () =>{  
    //     let result = 0;  
    //     switch (this.state.signVal){  
    //         case '+':  
    //             result = parseFloat(this.state.prevVal)+ parseFloat(this.state.displayValue);  
    //             break;  
    //         case '-':  
    //             result = parseFloat(this.state.prevVal)- parseFloat(this.state.displayValue);  
    //             break;  
    //         case '*':  
    //             result = parseFloat(this.state.prevVal)* parseFloat(this.state.displayValue);  
    //             break;  
    //         case '/':  
    //             result = parseFloat(this.state.prevVal)/parseFloat(this.state.displayValue);  
    //             break;  
    //         default:  
    //             break;  
    //     }  
    //     this.setState({displayValue: result})  
    //  }  






    // <form name="calc">
            
    //         <input type="text" name="answer" />
    //         <pre/>
            
    //         <input type="button" value=" 1 " />
    //         <input type="button" value=" 2 " />
    //         <input type="button" value=" 3 " />
    //         <input type="button" value=" + " />
    //         <pre/>
            
    //         <input type="button" value=" 4 " />
    //         <input type="button" value=" 5 " />
    //         <input type="button" value=" 6 " />
    //         <input type="button" value=" - " />
    //         <pre/>
          
    //         <input type="button" value=" 7 " />
    //         <input type="button" value=" 8 " />
    //         <input type="button" value=" 9 " />
    //         <input type="button" value=" x " />
    //         <pre/>
        
    //         <input type="button" value=" c " />
    //         <input type="button" value=" 0 " />
    //         <input type="button" value=" = " />
    //         <input type="button" value=" / " />
    //         <pre/>
    //       </form>
    //       </div>