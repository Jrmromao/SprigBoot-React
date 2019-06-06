import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './counter.css'

class Counter extends Component{
    constructor(){
        super(); // error 1
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
 
        this.reset = this.reset.bind(this)
    }

    render(){

        return(
          <div className="Counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <span className="count">{this.state.counter}</span>
          <div>
                 <button className="reset" onClick={this.reset}>Reset</button>
            </div>
          </div>
        )
      }

      reset(){
        this.setState( {counter: 0 });
      }

      increment(by){ // update the state - count ++
        this.setState(
            (prevState) => {    
                    return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by){ // update the state - count ++
        this.setState(
            (prevState) => {    
                    return {counter: prevState.counter - by}
            }
        );
    }
 
}
// function comonets
class CounterButton extends Component{
    //define the intial state in a contructor
    //state -> coiunter 0
    constructor(){
        super(); // error 1
        // this.state = {
        //     counter : 0
        // }
        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)
 
       
    }
    render(){
        return(
            <div className="counter">
                    <button onClick={()=> this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
                    <button onClick={()=> this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>
      
            </div>
        ); 
//   }
//     increment(){ // update the state - count ++
//             this.setState({
//                 counter: this.state.counter+this.props.by});
//             this.props.incrementMethod(this.props.by);
//         }   
 
//         decrement(){ // update the state - count ++
//             this.setState({
//                 counter: this.state.counter-this.props.by});
//             this.props.decrementMethod(this.props.by);
        }   
}

CounterButton.defaultProps = {
    by: 1
  }

  CounterButton.proType = {
 by: PropTypes.number
}

  export default Counter
