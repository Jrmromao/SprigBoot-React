import React, {Component} from 'react';
import logo from './logo.svg';
import FirstComponet  from './componets/learning-examples/FirstComponent.jsx'
import SecondComponet  from './componets/learning-examples/SecondComponent.jsx'
import ThirdComponet  from './componets/learning-examples/ThirdComponent.jsx'
import Counter from './componets/counter/Counter'
import './App.css';


class App extends Component{
  render(){

    return(
      <div className="App">
          <Counter></Counter>

      </div>

    )
  }
}




export default App;



















