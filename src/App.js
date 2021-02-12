import React, {Component} from 'react';
import FirstComponent, {FirstComponentExtended} from './component/learning-examples/FirstComponent';
import SecondComponent from './component/learning-examples/SecondComponent';
import ThirdComponent from './component/learning-examples/ThirdComponent';
import CounterButton from './component/counter/Counter';
import Counter from './component/counter/Counter';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
           <Counter />
      </div>
    );
  }
}

class LearningComponent extends Component{
  render(){
    return (
      <div className="learningComponent">
        Learning Component
      </div>
    );
  }
}


function ForthComponent()
{
  return(
    <div className="forthComponent">
        Forth Component in function
    </div>
  );
}

export default App;

